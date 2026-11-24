import * as THREE from "three";

const SPACING = 22;
const FOG_NEAR = 16;
const FOG_FAR = 64;

const FALLBACK_COLORS = {
  bg: "#fbf6ec",
  bgDeep: "#f4ecdd",
  surface: "#fffdf8",
  surface2: "#f8f1e4",
  text: "#12263a",
  textStrong: "#0c1a26",
  line: "#e2d8c7",
  accent: "#3f6b55",
  accentStrong: "#2f5544",
  accentSoft: "#eaf2e7",
  coral600: "#b95448",
  lav600: "#6a5b8f",
  gold600: "#a77b2f",
  sage600: "#3f6b55",
  blue700: "#28546f",
  danger: "#8e3c34",
  warning: "#7d5a1d",
  success: "#2f5544",
  textMuted: "#626963",
  lineStrong: "#cbbda6",
  link: "#2f5544",
  focus: "#2c6a8a",
  onDark: "#f7f3e8",
  onLight: "#23303a",
  onAccent: "#fffdf7"
};

function color(value, fallback = "#ffffff") {
  try {
    return new THREE.Color(value || fallback);
  } catch {
    return new THREE.Color(fallback);
  }
}

function lerp(current, target, amount) {
  return current + (target - current) * amount;
}

function createFallbackEngine(container, count) {
  const notice = document.createElement("div");
  notice.className = "stage-fallback";
  notice.textContent = "3D stage unavailable — flat presentation mode";
  container.appendChild(notice);
  const fallbackGeometry = {
    plane: new THREE.PlaneGeometry(1, 1),
    box: new THREE.BoxGeometry(1, 1, 1),
    sphere: new THREE.SphereGeometry(1, 20, 14),
    lowSphere: new THREE.SphereGeometry(1, 10, 8),
    icosa: new THREE.IcosahedronGeometry(1, 0),
    torus: new THREE.TorusGeometry(1, 0.035, 10, 64),
    cone: new THREE.ConeGeometry(1, 1, 12)
  };
  return {
    THREE,
    SPACING,
    geometry: fallbackGeometry,
    addSection() {},
    registerLayer() {},
    registerLowGraphics() {},
    registerUpdatable() {},
    trackMaterial() {},
    setPalette() {},
    setScrollProgress() {},
    setPointer() {},
    setActive() {},
    setHold() {},
    setLowGraphics() {},
    setReducedMotion() {},
    start() {},
    dispose() {
      notice.remove();
      for (const item of Object.values(fallbackGeometry)) item.dispose();
    },
    getState() {
      return {
        fallback: true,
        sections: count,
        cameraZ: 0,
        targetZ: 0,
        pointer: { x: 0, y: 0 },
        activeIndex: 0,
        lowGraphics: false,
        hold: false,
        reducedMotion: false,
        updatables: 0,
        drawCalls: 0,
        triangles: 0,
        fogColor: "#f4ecdd",
        rimColor: "#3f6b55",
        accentMaterialColor: "#3f6b55"
      };
    }
  };
}

export function createStageEngine({ container, count }) {
  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance"
    });
  } catch (error) {
    console.warn("[stage] WebGL unavailable; using flat fallback.", error);
    return createFallbackEngine(container, count);
  }

  const width = container.clientWidth || window.innerWidth;
  const height = container.clientHeight || window.innerHeight;

  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
  renderer.setSize(width, height);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.setClearColor(0x000000, 0);
  renderer.domElement.className = "stage-canvas";
  container.appendChild(renderer.domElement);

  const scene = new THREE.Scene();
  scene.fog = new THREE.Fog(color(FALLBACK_COLORS.bgDeep).getHex(), FOG_NEAR, FOG_FAR);

  const camera = new THREE.PerspectiveCamera(52, width / height, 0.1, 86);
  camera.position.set(0, 1.2, 10);

  const ambient = new THREE.AmbientLight(0xfff8ea, 1.05);
  const key = new THREE.DirectionalLight(0xfff4df, 1.7);
  key.position.set(7, 11, 9);
  const rim = new THREE.PointLight(FALLBACK_COLORS.accent, 2.1, 70, 1.8);
  rim.position.set(-9, 3.5, -18);
  scene.add(ambient, key, rim);

  const geometry = {
    plane: new THREE.PlaneGeometry(1, 1),
    box: new THREE.BoxGeometry(1, 1, 1),
    sphere: new THREE.SphereGeometry(1, 20, 14),
    lowSphere: new THREE.SphereGeometry(1, 10, 8),
    icosa: new THREE.IcosahedronGeometry(1, 0),
    torus: new THREE.TorusGeometry(1, 0.035, 10, 64),
    cone: new THREE.ConeGeometry(1, 1, 12)
  };

  const state = {
    progress: 0,
    cameraZ: 10,
    targetZ: 10,
    pointer: { x: 0, y: 0 },
    pointerTarget: { x: 0, y: 0 },
    activeIndex: 0,
    hold: false,
    lowGraphics: false,
    reducedMotion: false,
    time: 0,
    lastFrame: 0
  };

  const cameraRig = {
    x: 0,
    y: 1.2,
    z: 0,
    lookX: 0,
    lookY: 1.1,
    lookZ: -12,
    fov: 52,
    roll: 0
  };

  const sections = [];
  const layers = [];
  const lowGraphicsObjects = [];
  const updatables = new Set();
  const colorPairs = [];
  const materials = new Set();
  const fogTarget = color(FALLBACK_COLORS.bgDeep);
  const rimTarget = color(FALLBACK_COLORS.accent);
  let paletteInitialized = false;

  colorPairs.push({ color: scene.fog.color, target: fogTarget });
  colorPairs.push({ color: rim.color, target: rimTarget });

  function trackColor(target, role, options = {}) {
    const identity = options.identity || FALLBACK_COLORS[role] || "#ffffff";
    const mix = typeof options.mix === "number" ? Math.min(1, Math.max(0, options.mix)) : 1;
    const base = color(identity);
    colorPairs.push({
      color: target,
      target: base.clone(),
      base,
      mix,
      colorRole: role
    });
  }

  function trackMaterial(material, role, options = {}) {
    const property = options.property || "color";
    const list = Array.isArray(material) ? material : [material];
    for (const item of list) {
      if (!item || !item[property] || !item[property].isColor) continue;
      materials.add(item);
      item.userData.colorRole = role;
      trackColor(item[property], role, options);
    }
  }

  function registerUpdatable(callback) {
    if (typeof callback === "function") updatables.add(callback);
    return () => updatables.delete(callback);
  }

  function registerLayer(object, factor) {
    object.userData.parallaxFactor = factor;
    object.userData.basePosition = object.position.clone();
    layers.push(object);
  }

  function registerLowGraphics(object) {
    lowGraphicsObjects.push(object);
  }

  function addSection(index, group) {
    group.position.z = -index * SPACING;
    group.userData.active = index === 0;
    sections[index] = group;
    scene.add(group);
  }

  function setPalette(palette = {}) {
    const get = role => palette[role] || FALLBACK_COLORS[role] || "#ffffff";
    for (const pair of colorPairs) {
      if (!pair.colorRole) continue;
      const themed = color(get(pair.colorRole));
      pair.target.copy(pair.base).lerp(themed, pair.mix);
      if (!paletteInitialized) pair.color.copy(pair.target);
    }
    fogTarget.set(palette.bgDeep || palette.bg || FALLBACK_COLORS.bgDeep);
    rimTarget.set(palette.accentStrong || palette.accent || FALLBACK_COLORS.accent);
    if (!paletteInitialized) {
      scene.fog.color.copy(fogTarget);
      rim.color.copy(rimTarget);
    }
    paletteInitialized = true;
  }

  function setScrollProgress(progress) {
    const clamped = Math.min(1, Math.max(0, Number(progress) || 0));
    state.progress = clamped;
    state.targetZ = 10 - clamped * (count - 1) * SPACING;
    state.activeIndex = Math.min(count - 1, Math.round(clamped * (count - 1)));
    sections.forEach((group, index) => {
      if (group) group.userData.active = index === state.activeIndex;
    });
  }

  function setActive(index) {
    if (!Number.isInteger(index) || index < 0 || index >= count) return;
    state.activeIndex = index;
    sections.forEach((group, current) => {
      if (group) group.userData.active = current === index;
    });
  }

  function setPointer(x, y) {
    state.pointerTarget.x = Math.min(1, Math.max(-1, Number(x) || 0));
    state.pointerTarget.y = Math.min(1, Math.max(-1, Number(y) || 0));
  }

  function setHold(value) {
    state.hold = Boolean(value);
  }

  function setLowGraphics(value) {
    state.lowGraphics = Boolean(value);
    renderer.setPixelRatio(state.lowGraphics ? 1 : Math.min(window.devicePixelRatio || 1, 1.5));
    renderer.setSize(container.clientWidth || window.innerWidth, container.clientHeight || window.innerHeight);
    for (const object of lowGraphicsObjects) object.visible = !state.lowGraphics;
  }

  function setReducedMotion(value) {
    state.reducedMotion = Boolean(value);
    if (state.reducedMotion) {
      state.pointerTarget.x = 0;
      state.pointerTarget.y = 0;
    }
  }

  function getCameraTarget() {
    const floatIndex = state.progress * (count - 1);
    const index = Math.min(count - 1, Math.max(0, Math.round(floatIndex)));
    const profile = sections[index]?.userData?.camera || {};
    const from = profile.from || profile;
    const to = profile.to || from;
    const local = Math.min(1, Math.max(0, (floatIndex - index + 0.35) / 0.7));
    const keys = ["x", "y", "z", "lookX", "lookY", "lookZ", "fov", "roll"];
    const target = {};
    for (const key of keys) {
      const start = Number.isFinite(from[key]) ? from[key] : cameraRig[key];
      const end = Number.isFinite(to[key]) ? to[key] : start;
      target[key] = lerp(start, end, local);
    }
    return target;
  }

  function render(frameTime) {
    const seconds = frameTime ? frameTime / 1000 : 0;
    const delta = state.lastFrame ? Math.min(0.25, seconds - state.lastFrame) : 0.016;
    state.lastFrame = seconds;
    if (!state.hold && !state.reducedMotion) state.time += delta;

    const moveEase = state.reducedMotion ? 1 : 1 - Math.exp(-delta * 4.8);
    const pointerEase = state.reducedMotion ? 1 : 1 - Math.exp(-delta * 3.6);
    state.cameraZ = lerp(state.cameraZ, state.targetZ, moveEase);
    state.pointer.x = lerp(state.pointer.x, state.pointerTarget.x, pointerEase);
    state.pointer.y = lerp(state.pointer.y, state.pointerTarget.y, pointerEase);

    const cameraTarget = getCameraTarget();
    const cameraEase = state.reducedMotion ? 1 : 1 - Math.exp(-delta * 3.4);
    for (const key of Object.keys(cameraRig)) {
      cameraRig[key] = lerp(cameraRig[key], cameraTarget[key], cameraEase);
    }
    if (Math.abs(camera.fov - cameraRig.fov) > 0.01) {
      camera.fov = cameraRig.fov;
      camera.updateProjectionMatrix();
    }
    camera.position.set(
      cameraRig.x + state.pointer.x * (state.reducedMotion ? 0 : 0.95),
      cameraRig.y + state.pointer.y * (state.reducedMotion ? 0 : 0.5),
      state.cameraZ + cameraRig.z
    );
    camera.lookAt(
      cameraRig.lookX + state.pointer.x * 0.2,
      cameraRig.lookY + state.pointer.y * 0.12,
      state.cameraZ + cameraRig.z + cameraRig.lookZ
    );
    camera.rotation.z += cameraRig.roll;

    for (const layer of layers) {
      const base = layer.userData.basePosition;
      const factor = layer.userData.parallaxFactor || 0;
      layer.position.x = base.x + state.pointer.x * factor * 1.6;
      layer.position.y = base.y - state.pointer.y * factor * 0.9;
    }

    for (const group of sections) {
      if (!group) continue;
      group.visible = group.userData.active;
      const targetScale = group.userData.active ? 1.03 : 0.985;
      const scale = lerp(group.scale.x, targetScale, state.reducedMotion ? 1 : 1 - Math.exp(-delta * 3.4));
      group.scale.setScalar(scale);
    }

    const colorEase = state.reducedMotion ? 1 : 1 - Math.exp(-delta * 3.2);
    for (const pair of colorPairs) {
      pair.color.lerp(pair.target, colorEase);
    }

    const animationDelta = !state.hold && !state.reducedMotion ? delta : 0;
    if (animationDelta) {
      for (const object of layers) {
        const spin = object.userData.idleSpin;
        if (spin) object.rotation.y += spin * animationDelta;
        const bob = object.userData.idleBob;
        if (bob) {
          object.rotation.z = Math.sin(state.time * bob.speed + bob.phase) * bob.amount;
        }
      }
    }

    const frameContext = {
      delta: animationDelta,
      realDelta: delta,
      time: state.time,
      pointer: state.pointer,
      reducedMotion: state.reducedMotion,
      hold: state.hold
    };
    for (const update of updatables) update(frameContext);

    renderer.render(scene, camera);
  }

  function resize() {
    const w = container.clientWidth || window.innerWidth;
    const h = container.clientHeight || window.innerHeight;
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h);
  }

  window.addEventListener("resize", resize, { passive: true });
  renderer.setAnimationLoop(render);

  return {
    THREE,
    SPACING,
    geometry,
    scene,
    camera,
    addSection,
    registerLayer,
    registerLowGraphics,
    registerUpdatable,
    trackMaterial,
    setPalette,
    setScrollProgress,
    setPointer,
    setActive,
    setHold,
    setLowGraphics,
    setReducedMotion,
    start() {
      renderer.setAnimationLoop(render);
    },
    dispose() {
      renderer.setAnimationLoop(null);
      window.removeEventListener("resize", resize);
      updatables.clear();
      for (const item of materials) item.dispose();
      for (const item of Object.values(geometry)) item.dispose();
      renderer.dispose();
      renderer.domElement.remove();
    },
    getState() {
      return {
        fallback: false,
        sections: sections.filter(Boolean).length,
        cameraZ: Number(state.cameraZ.toFixed(2)),
        targetZ: Number(state.targetZ.toFixed(2)),
        progress: Number(state.progress.toFixed(3)),
        pointer: {
          x: Number(state.pointer.x.toFixed(3)),
          y: Number(state.pointer.y.toFixed(3))
        },
        activeIndex: state.activeIndex,
        camera: Object.fromEntries(
          Object.entries(cameraRig).map(([key, value]) => [key, Number(value.toFixed(3))])
        ),
        lowGraphics: state.lowGraphics,
        hold: state.hold,
        reducedMotion: state.reducedMotion,
        updatables: updatables.size,
        drawCalls: renderer.info.render.calls,
        triangles: renderer.info.render.triangles,
        fogColor: `#${scene.fog.color.getHexString()}`,
        rimColor: `#${rim.color.getHexString()}`,
        accentMaterialColor: `#${(
          colorPairs.find(pair => pair.colorRole === "accent")?.color || color(0xffffff)
        ).getHexString()}`
      };
    }
  };
}

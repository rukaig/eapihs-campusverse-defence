import {
  addCompanion,
  addProp,
  addShape,
  baseGroup,
  flat,
  surface,
  wireReactions
} from "./shared.js";

const TOKEN_ROLES = {
  desk: ["sage600", "gold600", "blue700"],
  shelf: ["lav600", "sage600", "coral600"],
  kiosk: ["coral600", "blue700", "gold600"],
  bridge: ["blue700", "lav600", "sage600"],
  table: ["gold600", "sage600", "lav600"]
};

function roundRect(ctx, x, y, width, height, radius) {
  if (typeof ctx.roundRect === "function") {
    ctx.beginPath();
    ctx.roundRect(x, y, width, height, radius);
    return;
  }
  ctx.beginPath();
  ctx.rect(x, y, width, height);
  ctx.closePath();
}

function drawMock(ctx, width, height, mock) {
  ctx.fillStyle = "#fbf6ec";
  ctx.fillRect(0, 0, width, height);
  ctx.fillStyle = "#fffdf8";
  ctx.fillRect(0, 0, width, Math.round(height * 0.12));
  ctx.fillStyle = "#3f6b55";
  ctx.font = `700 ${Math.round(width * 0.038)}px sans-serif`;
  ctx.fillText(String(mock.header || ""), Math.round(width * 0.05), Math.round(height * 0.075));
  ctx.fillStyle = "#626963";
  ctx.font = `${Math.round(width * 0.022)}px sans-serif`;
  ctx.fillText(String(mock.sub || ""), Math.round(width * 0.05), Math.round(height * 0.174));

  const tiles = Array.isArray(mock.tiles) ? mock.tiles : [];
  const columns = width > height ? 3 : 2;
  const gap = Math.round(width * 0.035);
  const top = Math.round(height * 0.23);
  const tileWidth = Math.round((width - gap * (columns + 1)) / columns);
  const tileHeight = Math.round(height * (width > height ? 0.2 : 0.13));
  tiles.forEach((tile, index) => {
    const column = index % columns;
    const row = Math.floor(index / columns);
    const x = gap + column * (tileWidth + gap);
    const y = top + row * (tileHeight + gap);
    ctx.fillStyle = index % 3 === 0 ? "#eaf2e7" : (index % 3 === 1 ? "#f4ecdd" : "#e7eef4");
    roundRect(ctx, x, y, tileWidth, tileHeight, 14);
    ctx.fill();
    ctx.fillStyle = "#12263a";
    ctx.font = `600 ${Math.round(width * 0.021)}px sans-serif`;
    const words = String(tile).split(" ");
    let line = "";
    let lineY = y + Math.round(tileHeight * 0.42);
    for (const word of words) {
      const candidate = line ? `${line} ${word}` : word;
      if (ctx.measureText(candidate).width > tileWidth - 24 && line) {
        ctx.fillText(line, x + 12, lineY);
        lineY += Math.round(width * 0.027);
        line = word;
      } else {
        line = candidate;
      }
    }
    if (line) ctx.fillText(line, x + 12, lineY);
  });

  ctx.fillStyle = "#626963";
  ctx.font = `${Math.round(width * 0.019)}px sans-serif`;
  ctx.fillText(String(mock.footer || ""), Math.round(width * 0.05), Math.round(height * 0.94));
}

function drawFallback(ctx, width, height, config) {
  ctx.fillStyle = "#fbf6ec";
  ctx.fillRect(0, 0, width, height);
  ctx.fillStyle = "#fffdf8";
  ctx.fillRect(0, 0, width, Math.round(height * 0.14));
  ctx.fillStyle = "#3f6b55";
  ctx.font = `700 ${Math.round(width * 0.045)}px sans-serif`;
  ctx.fillText(String(config.screenLabel || ""), Math.round(width * 0.06), Math.round(height * 0.087));
  ctx.fillStyle = "#e2d8c7";
  for (let index = 0; index < 5; index += 1) {
    ctx.fillRect(
      Math.round(width * 0.06),
      Math.round(height * (0.22 + index * 0.13)),
      Math.round(width * (index % 2 ? 0.62 : 0.78)),
      Math.round(height * 0.055)
    );
  }
}

function createScreen(engine, config, isPhone) {
  const { THREE } = engine;
  const width = isPhone ? 640 : 1024;
  const height = isPhone ? 1180 : 640;
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");
  if (config.mock) drawMock(ctx, width, height, config.mock);
  else drawFallback(ctx, width, height, config);

  let fallback = new THREE.CanvasTexture(canvas);
  if ("colorSpace" in fallback) fallback.colorSpace = THREE.SRGBColorSpace;
  const material = new THREE.MeshBasicMaterial({ map: fallback, toneMapped: false });
  let loaded = null;
  let disposed = false;

  if (config.screenshot) {
    const url = new URL(
      `${import.meta.env.BASE_URL}app-shots/${config.screenshot}`,
      document.baseURI
    ).href;
    new THREE.TextureLoader().load(url, texture => {
      if (disposed) {
        texture.dispose();
        return;
      }
      if ("colorSpace" in texture) texture.colorSpace = THREE.SRGBColorSpace;
      texture.minFilter = THREE.LinearFilter;
      loaded = texture;
      material.map = texture;
      material.needsUpdate = true;
      fallback.dispose();
      fallback = null;
    });
  }

  return {
    material,
    isLoaded: () => Boolean(loaded),
    dispose() {
      disposed = true;
      material.dispose();
      if (fallback) fallback.dispose();
      if (loaded) loaded.dispose();
    }
  };
}

export function createAppTour({ engine, kit, section }) {
  const config = section.scene;
  const { THREE } = engine;
  const group = baseGroup(engine, section, config.camera);
  group.position.y = -0.2;

  const isPhone = config.device === "phone";
  const baseDeviceY = isPhone ? 0.18 : 0.5;
  const screen = createScreen(engine, config, isPhone);
  const roles = TOKEN_ROLES[config.set] || TOKEN_ROLES.desk;

  if (config.set === "desk") {
    const desk = addShape(kit, group, kit.geometry.box,
      surface(engine, config.deskRole, { roughness: 0.8 }),
      [0, -1.36, -0.6], [7.2, 0.18, 2.8]);
    engine.registerLayer(desk, 0.14);
  } else if (config.set === "shelf") {
    for (let index = 0; index < 3; index += 1) {
      addShape(kit, group, kit.geometry.box,
        surface(engine, config.deskRole, { roughness: 0.72 }),
        [0.9, -0.95 + index * 0.78, -2.05], [4.4, 0.08, 0.32]);
    }
  } else if (config.set === "kiosk") {
    const plinth = addShape(kit, group, kit.geometry.box,
      surface(engine, config.deskRole, { roughness: 0.74 }),
      [0, -1.28, -0.7], [2.6, 0.3, 2.0]);
    engine.registerLayer(plinth, 0.14);
    for (const sign of [-1, 1]) {
      addShape(kit, group, kit.geometry.box,
        surface(engine, "surface2", { roughness: 0.7 }),
        [sign * 2.2, -0.5, -1.4], [0.16, 2.6, 0.18]);
    }
  } else if (config.set === "bridge") {
    for (const sign of [-1, 1]) {
      addShape(kit, group, kit.geometry.box,
        surface(engine, config.deskRole, { roughness: 0.76 }),
        [sign * 2.6, -1.24, -0.8], [2.6, 0.18, 2.4]);
    }
    const rail = addShape(kit, group, kit.geometry.cylinder,
      surface(engine, "lineStrong", { roughness: 0.5 }),
      [0, -1.05, -0.8], [0.045, 4.6, 0.045], [0, 0, Math.PI / 2]);
    engine.registerLayer(rail, 0.15);
  } else {
    const table = addShape(kit, group, kit.geometry.cylinder,
      surface(engine, config.deskRole, { roughness: 0.8 }),
      [0, -1.3, -0.7], [2.6, 0.14, 2.6]);
    engine.registerLayer(table, 0.14);
  }

  const device = new THREE.Group();
  device.position.set(0, baseDeviceY, 0.35);
  group.add(device);
  engine.registerLayer(device, 0.18);

  if (isPhone) {
    addShape(kit, device, kit.geometry.box,
      surface(engine, "textStrong", { roughness: 0.42, metalness: 0.08 }),
      [0, 0, 0], [1.08, 1.96, 0.16]);
    addShape(kit, device, kit.geometry.plane, screen.material,
      [0, 0.02, 0.086], [0.92, 1.72, 1]);
    addShape(kit, device, kit.geometry.lowSphere,
      surface(engine, "surface", { roughness: 0.6 }),
      [0, 0.91, 0.09], [0.045, 0.045, 0.02]);
    addShape(kit, device, kit.geometry.box,
      surface(engine, "surface2", { roughness: 0.66 }),
      [0, -0.89, 0.09], [0.3, 0.024, 0.012]);
  } else {
    addShape(kit, device, kit.geometry.box,
      surface(engine, "lineStrong", { roughness: 0.5, metalness: 0.08 }),
      [0, -0.86, 0.28], [2.86, 0.12, 1.52]);
    addShape(kit, device, kit.geometry.box,
      surface(engine, "surface2", { roughness: 0.72 }),
      [0, -0.79, 0.28], [2.58, 0.03, 1.28]);
    addShape(kit, device, kit.geometry.box,
      surface(engine, "lineStrong", { roughness: 0.5 }),
      [0, 0.34, -0.2], [2.64, 1.8, 0.1]);
    addShape(kit, device, kit.geometry.plane, screen.material,
      [0, 0.34, -0.142], [2.34, 1.5, 1]);
    addShape(kit, device, kit.geometry.box,
      surface(engine, "textMuted", { roughness: 0.5 }),
      [0, -0.79, 0.62], [0.6, 0.018, 0.24]);
  }

  const screenGlow = addShape(kit, group, kit.geometry.torus,
    flat(engine, roles[0], { transparent: true, opacity: 0.24, depthWrite: false }),
    [0, 0.18, -0.18], isPhone ? [1.05, 1.85, 1] : [2.45, 1.55, 1]);
  engine.registerLayer(screenGlow, 0.24);
  engine.registerLowGraphics(screenGlow);

  const tokens = roles.map((role, index) => {
    const token = addShape(kit, group, kit.geometry.box,
      surface(engine, role, { roughness: 0.56 }),
      [(index - 1) * 0.72, -1.22, -0.9], [0.32, 0.1, 0.26]);
    engine.registerLowGraphics(token);
    return { token, index, baseY: -1.22 };
  });

  const companion = addCompanion(engine, kit, group, config.companion,
    [isPhone ? -1.85 : -2.55, -1.05, 1.15], isPhone ? 0.74 : 0.8, config.mood);
  const reactions = wireReactions({ [config.companion]: companion }, config.reactions);

  const prop = config.prop
    ? addProp(engine, kit, group, config.prop, [isPhone ? 1.95 : 2.75, -1.0, 0.8], 0.62)
    : null;

  let active = false;
  let progress = 0;
  const baseRotation = isPhone ? -0.12 : 0.06;
  const unregister = engine.registerUpdatable(() => {
    const amount = active ? progress : 0;
    device.rotation.y = baseRotation + amount * 0.11;
    device.position.y = baseDeviceY + amount * 0.06;
    screenGlow.rotation.z = amount * 0.06;
    for (const item of tokens) {
      item.token.position.y = item.baseY + amount * 0.12 + Math.sin(amount * Math.PI + item.index) * 0.04;
    }
  });

  return {
    group,
    companion: config.companion,
    prop: config.prop || "none",
    companionApi: companion,
    companionApis: [companion],
    setActive(value) {
      active = value;
      if (value) reactions.reset();
    },
    setLocalProgress(value) {
      progress = value;
      if (active) reactions.setLocalProgress(value);
    },
    getState() {
      return {
        stage: "app-tour",
        page: config.pageId,
        device: config.device,
        screenshot: config.screenshot || null,
        screenshotLoaded: screen.isLoaded(),
        mood: companion.getMood(),
        bubble: companion.getState().bubbleVisible
      };
    },
    dispose() {
      unregister();
      screen.dispose();
      companion.dispose();
      if (prop) prop.dispose();
    }
  };
}

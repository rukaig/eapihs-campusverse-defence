// Shared procedural modelling helpers for the CampusVerse character lab.
// Everything is built from three.js primitives and canvas textures; no model
// files, CDNs or runtime network requests are used.

function createWingGeometry(THREE) {
  const shape = new THREE.Shape();
  shape.moveTo(0, 0);
  shape.bezierCurveTo(0.22, 0.42, 0.92, 0.56, 1.18, 0.16);
  shape.bezierCurveTo(1.34, -0.16, 0.72, -0.52, 0.14, -0.3);
  shape.bezierCurveTo(-0.06, -0.22, -0.08, -0.1, 0, 0);
  return new THREE.ShapeGeometry(shape, 18);
}

function createStarGeometry(THREE) {
  const shape = new THREE.Shape();
  const outer = 1;
  const inner = 0.46;
  for (let i = 0; i < 10; i += 1) {
    const angle = -Math.PI / 2 + (i * Math.PI) / 5;
    const radius = i % 2 === 0 ? outer : inner;
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;
    if (i === 0) shape.moveTo(x, y);
    else shape.lineTo(x, y);
  }
  shape.closePath();
  const geometry = new THREE.ExtrudeGeometry(shape, {
    depth: 0.16,
    bevelEnabled: true,
    bevelThickness: 0.035,
    bevelSize: 0.035,
    bevelSegments: 2,
    curveSegments: 6
  });
  geometry.translate(0, 0, -0.08);
  geometry.computeVertexNormals();
  return geometry;
}

function createPawnGeometry(THREE) {
  const points = [
    new THREE.Vector2(0, 0),
    new THREE.Vector2(0.44, 0),
    new THREE.Vector2(0.36, 0.09),
    new THREE.Vector2(0.23, 0.2),
    new THREE.Vector2(0.17, 0.58),
    new THREE.Vector2(0.29, 0.71),
    new THREE.Vector2(0.18, 0.82),
    new THREE.Vector2(0.22, 0.96),
    new THREE.Vector2(0, 0.98)
  ];
  return new THREE.LatheGeometry(points, 20);
}

function cssColor(variable, fallback) {
  if (typeof getComputedStyle !== "function") return fallback;
  const value = getComputedStyle(document.documentElement).getPropertyValue(variable).trim();
  return value || fallback;
}

function roundRect(ctx, x, y, width, height, radius) {
  if (typeof ctx.roundRect === "function") {
    ctx.beginPath();
    ctx.roundRect(x, y, width, height, radius);
    return;
  }
  const r = Math.min(radius, width / 2, height / 2);
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + width - r, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + r);
  ctx.lineTo(x + width, y + height - r);
  ctx.quadraticCurveTo(x + width, y + height, x + width - r, y + height);
  ctx.lineTo(x + r, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - r);
  ctx.lineTo(x, y + r);
  ctx.quadraticCurveTo(x, y, x + r, y);
  ctx.closePath();
}

function wrapText(ctx, text, maxWidth, maxLines = 4) {
  const words = String(text || "").trim().split(/\s+/).filter(Boolean);
  const lines = [];
  let current = "";
  for (const word of words) {
    const candidate = current ? `${current} ${word}` : word;
    if (ctx.measureText(candidate).width > maxWidth && current) {
      lines.push(current);
      current = word;
      if (lines.length === maxLines) break;
    } else {
      current = candidate;
    }
  }
  if (lines.length < maxLines && current) lines.push(current);
  if (lines.length === maxLines && words.join(" ").length > lines.join(" ").length) {
    lines[maxLines - 1] = `${lines[maxLines - 1].slice(0, -1)}…`;
  }
  return lines.length ? lines : ["…"];
}

export function createCharacterKit(engine) {
  const { THREE } = engine;
  const extraGeometry = {
    cylinder: new THREE.CylinderGeometry(1, 1, 1, 12),
    wing: createWingGeometry(THREE),
    star: createStarGeometry(THREE),
    pawn: createPawnGeometry(THREE)
  };
  const geometry = { ...engine.geometry, ...extraGeometry };

  function material(role, options = {}) {
    const { identity, mix, property, ...surface } = options;
    const result = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      roughness: 0.66,
      metalness: 0.03,
      ...surface
    });
    engine.trackMaterial(result, role, { identity, mix, property });
    return result;
  }

  function basic(role, options = {}) {
    const { identity, mix, property, ...surface } = options;
    const result = new THREE.MeshBasicMaterial({ color: 0xffffff, ...surface });
    engine.trackMaterial(result, role, { identity, mix, property });
    return result;
  }

  function mesh(shape, surface, position = [0, 0, 0], scale = [1, 1, 1], rotation = [0, 0, 0]) {
    const object = new THREE.Mesh(shape, surface);
    object.position.set(position[0], position[1], position[2]);
    object.scale.set(scale[0], scale[1], scale[2]);
    object.rotation.set(rotation[0], rotation[1], rotation[2]);
    return object;
  }

  function eyes(parent, options = {}) {
    const {
      spacing = 0.16,
      y = 0,
      z = 0.34,
      size = 0.055,
      role = "textStrong"
    } = options;
    const surface = material(role, { roughness: 0.32 });
    const meshes = [-1, 1].map(sign => {
      const eye = mesh(geometry.lowSphere, surface,
        [sign * spacing, y, z], [size, size * 1.12, size * 0.58]);
      eye.userData.baseScaleY = eye.scale.y;
      parent.add(eye);
      return eye;
    });
    return {
      meshes,
      setOpen(factor) {
        const value = Math.max(0.06, Math.min(1, factor));
        for (const eye of meshes) eye.scale.y = eye.userData.baseScaleY * value;
      }
    };
  }

  function mouths(parent, options = {}) {
    const { y = -0.12, z = 0.38, width = 0.22, role = "textStrong" } = options;
    const surface = material(role, { roughness: 0.4 });
    const happyGeometry = new THREE.TorusGeometry(width * 0.62, 0.018, 6, 20, Math.PI);
    const lineGeometry = new THREE.BoxGeometry(width * 0.62, 0.026, 0.026);
    const openGeometry = new THREE.SphereGeometry(1, 12, 8);

    const happy = mesh(happyGeometry, surface, [0, y, z], [1, 1, 1], [0, 0, Math.PI]);
    const thinking = mesh(lineGeometry, surface, [width * 0.12, y, z], [1, 1, 1], [0, 0, -0.24]);
    const cheering = mesh(openGeometry, surface, [0, y - 0.02, z], [width * 0.4, width * 0.48, 0.035]);
    const neutral = mesh(lineGeometry, surface, [0, y, z], [0.82, 0.72, 0.72]);

    for (const part of [happy, thinking, cheering, neutral]) parent.add(part);

    function set(mood) {
      happy.visible = mood === "happy";
      thinking.visible = mood === "thinking";
      cheering.visible = mood === "cheering";
      neutral.visible = mood !== "happy" && mood !== "thinking" && mood !== "cheering";
    }
    set("idle");

    return {
      meshes: { happy, thinking, cheering, neutral },
      set,
      dispose() {
        happyGeometry.dispose();
        lineGeometry.dispose();
        openGeometry.dispose();
      }
    };
  }

  function bubble(parent, options = {}) {
    const position = options.position || [0, 1.9, 0];
    const canvas = document.createElement("canvas");
    canvas.width = 640;
    canvas.height = 320;
    const context = canvas.getContext("2d");
    const texture = new THREE.CanvasTexture(canvas);
    texture.colorSpace = THREE.SRGBColorSpace;
    const surface = new THREE.MeshBasicMaterial({
      map: texture,
      transparent: true,
      depthWrite: false,
      side: THREE.DoubleSide,
      opacity: 0
    });
    const object = mesh(new THREE.PlaneGeometry(1, 1), surface, position);
    object.visible = false;
    object.renderOrder = 5;
    parent.add(object);

    let remaining = 0;
    let total = 1;

    function setText(text, settings = {}) {
      total = settings.duration || Math.min(6, Math.max(2.4, String(text).length * 0.055));
      remaining = total;
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.font = "600 34px system-ui, sans-serif";
      const lines = wrapText(context, text, 556);
      const boxHeight = Math.min(238, 86 + lines.length * 42);
      const boxTop = 16;
      const boxWidth = 608;

      context.fillStyle = cssColor("--cv-surface", "#fffdf8");
      context.strokeStyle = cssColor("--cv-line", "#e2d8c7");
      context.lineWidth = 3;
      roundRect(context, 16, boxTop, boxWidth, boxHeight, 26);
      context.fill();
      context.stroke();
      context.beginPath();
      context.moveTo(292, boxTop + boxHeight - 2);
      context.lineTo(320, boxTop + boxHeight + 30);
      context.lineTo(348, boxTop + boxHeight - 2);
      context.closePath();
      context.fill();
      context.stroke();

      context.fillStyle = cssColor("--cv-text", "#12263a");
      lines.forEach((line, index) => {
        context.fillText(line, 44, boxTop + 52 + index * 42);
      });

      texture.needsUpdate = true;
      object.scale.set(2.9, 1.25 + lines.length * 0.19, 1);
      object.visible = true;
      surface.opacity = 0;
    }

    function update(delta) {
      if (!object.visible) return;
      remaining -= delta;
      const fadeIn = Math.min(1, (total - remaining) / 0.18);
      const fadeOut = Math.min(1, remaining / 0.3);
      surface.opacity = Math.max(0, Math.min(fadeIn, fadeOut));
      if (remaining <= 0) object.visible = false;
    }

    return {
      object,
      setText,
      update,
      hide() {
        object.visible = false;
        surface.opacity = 0;
      },
      dispose() {
        texture.dispose();
        surface.dispose();
        object.geometry.dispose();
        parent.remove(object);
      }
    };
  }

  function label(title, subtitle) {
    const canvas = document.createElement("canvas");
    canvas.width = 512;
    canvas.height = 132;
    const context = canvas.getContext("2d");
    context.fillStyle = "rgba(255,253,248,0.94)";
    context.strokeStyle = "rgba(18,38,58,0.18)";
    context.lineWidth = 3;
    roundRect(context, 8, 8, 496, 116, 22);
    context.fill();
    context.stroke();
    context.fillStyle = "#12263a";
    context.font = "700 42px system-ui, sans-serif";
    context.fillText(title, 30, 58);
    context.fillStyle = "#3f6b55";
    context.font = "600 26px system-ui, sans-serif";
    context.fillText(subtitle, 30, 98);
    const texture = new THREE.CanvasTexture(canvas);
    texture.colorSpace = THREE.SRGBColorSpace;
    const surface = new THREE.SpriteMaterial({ map: texture, transparent: true, depthTest: false });
    const sprite = new THREE.Sprite(surface);
    sprite.scale.set(1.85, 0.48, 1);
    return {
      sprite,
      dispose() {
        texture.dispose();
        surface.dispose();
      }
    };
  }

  return {
    THREE,
    geometry,
    material,
    basic,
    mesh,
    eyes,
    mouths,
    bubble,
    label,
    dispose() {
      for (const shape of Object.values(extraGeometry)) shape.dispose();
    }
  };
}

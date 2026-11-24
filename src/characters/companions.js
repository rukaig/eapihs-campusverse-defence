import { companionDesigns } from "./designs.js";

export const MOODS = ["idle", "happy", "thinking", "cheering"];
export const MOOD_ALIASES = {
  bright: "happy",
  calm: "idle",
  sleepy: "thinking",
  proud: "cheering",
  curious: "thinking",
  neutral: "idle"
};

const POSES = {
  idle: { bounce: 0.026, headYaw: 0, headPitch: 0, headTilt: 0, eyeOpen: 1, limb: 0, cheer: 0 },
  happy: { bounce: 0.075, headYaw: 0, headPitch: -0.04, headTilt: 0.05, eyeOpen: 1, limb: 0.28, cheer: 0.25 },
  thinking: { bounce: 0.014, headYaw: -0.12, headPitch: 0.08, headTilt: -0.24, eyeOpen: 0.68, limb: -0.32, cheer: 0 },
  cheering: { bounce: 0.19, headYaw: 0, headPitch: -0.12, headTilt: 0, eyeOpen: 1, limb: 0.78, cheer: 1 }
};

function lerp(current, target, amount) {
  return current + (target - current) * amount;
}

function lerpAngle(current, target, amount) {
  let difference = target - current;
  while (difference > Math.PI) difference -= Math.PI * 2;
  while (difference < -Math.PI) difference += Math.PI * 2;
  return current + difference * amount;
}

function makeRig(kit, id, name) {
  const { THREE } = kit;
  const group = new THREE.Group();
  group.name = `companion-${id}`;
  const bodyPivot = new THREE.Group();
  const headPivot = new THREE.Group();
  group.add(bodyPivot);
  bodyPivot.add(headPivot);
  return {
    THREE,
    group,
    bodyPivot,
    headPivot,
    name,
    eyes: null,
    mouths: null,
    bubble: null,
    bubbleY: 1.9,
    parts: {},
    disposables: [],
    animate() {}
  };
}

function buildMoss(kit) {
  const { THREE, geometry } = kit;
  const rig = makeRig(kit, "moss", "Moss");
  const shell = kit.material("sage600", { identity: "#3f6b55", mix: 0.45, roughness: 0.82 });
  const skin = kit.material("surface2", { identity: "#f8f1e4", mix: 0.3 });
  const leaf = kit.material("success", { identity: "#2f5544", mix: 0.5 });
  const seam = kit.material("accentStrong", { identity: "#2f5544", mix: 0.4 });

  rig.bodyPivot.add(kit.mesh(geometry.sphere, skin, [0, 0.55, 0.04], [0.72, 0.46, 0.86]));
  rig.bodyPivot.add(kit.mesh(geometry.icosa, shell, [0, 0.66, -0.26], [0.88, 0.58, 0.72]));

  const seamGeometry = new THREE.TorusGeometry(0.34, 0.017, 6, 20, Math.PI);
  rig.disposables.push(seamGeometry);
  rig.bodyPivot.add(kit.mesh(seamGeometry, seam, [0, 0.68, 0.39], [1, 1, 1], [0, 0, Math.PI]));
  rig.bodyPivot.add(kit.mesh(geometry.box, seam, [0, 0.66, 0.39], [0.022, 0.56, 0.022]));

  rig.parts.legs = [-1, 1].flatMap(signX => [-1, 1].map(signZ => {
    const leg = kit.mesh(geometry.sphere, shell,
      [signX * 0.5, 0.18, signZ * 0.46], [0.24, 0.15, 0.28]);
    rig.bodyPivot.add(leg);
    return leg;
  }));
  rig.bodyPivot.add(kit.mesh(geometry.cone, shell, [0, 0.48, -0.92], [0.16, 0.42, 0.16], [Math.PI / 2, 0, 0]));

  rig.headPivot.position.set(0, 1.13, 0.56);
  rig.headPivot.add(kit.mesh(geometry.sphere, skin, [0, 0, 0], [0.42, 0.4, 0.4]));
  rig.eyes = kit.eyes(rig.headPivot, { spacing: 0.16, y: 0.04, z: 0.36, size: 0.048 });
  rig.mouths = kit.mouths(rig.headPivot, { y: -0.13, z: 0.37, width: 0.22 });

  rig.parts.stem = kit.mesh(geometry.cylinder, leaf, [0, 0.38, -0.02], [0.035, 0.3, 0.035]);
  rig.headPivot.add(rig.parts.stem);
  rig.parts.leaves = [
    kit.mesh(geometry.icosa, leaf, [-0.17, 0.5, 0], [0.16, 0.08, 0.1], [0, 0, -0.35]),
    kit.mesh(geometry.icosa, leaf, [0.18, 0.54, 0], [0.13, 0.07, 0.09], [0, 0, 0.4])
  ];
  for (const part of rig.parts.leaves) rig.headPivot.add(part);

  rig.bubbleY = 2.05;
  rig.animate = ({ time, pose, walking }) => {
    rig.parts.leaves.forEach((part, index) => {
      part.rotation.z = (index === 0 ? -0.35 : 0.4) + Math.sin(time * 1.4 + index) * (0.1 + pose.limb * 0.16);
    });
    rig.parts.legs.forEach((leg, index) => {
      leg.position.y = 0.18 + (walking ? Math.abs(Math.sin(time * 9 + index * Math.PI)) * 0.08 : 0);
    });
  };
  return rig;
}

function buildPip(kit) {
  const { THREE, geometry } = kit;
  const rig = makeRig(kit, "pip", "Pip");
  const coral = kit.material("coral600", { identity: "#b95448", mix: 0.45 });
  const cream = kit.material("surface2", { identity: "#f8f1e4", mix: 0.3 });
  const beak = kit.material("gold600", { identity: "#a77b2f", mix: 0.4 });
  const ink = kit.material("textStrong", { identity: "#12263a", mix: 0.25 });

  rig.bodyPivot.add(kit.mesh(geometry.sphere, coral, [0, 0.66, 0], [0.68, 0.62, 0.64]));
  rig.bodyPivot.add(kit.mesh(geometry.sphere, cream, [0.08, 0.56, 0.37], [0.48, 0.42, 0.32]));
  rig.bodyPivot.add(kit.mesh(geometry.cone, coral, [-0.62, 0.78, -0.48], [0.18, 0.72, 0.18], [0, 0, -1.02]));

  rig.parts.wings = [-1, 1].map(sign => {
    const pivot = new THREE.Group();
    pivot.position.set(sign * 0.62, 0.76, -0.03);
    pivot.add(kit.mesh(geometry.sphere, coral, [sign * 0.16, 0, 0], [0.4, 0.18, 0.44], [0, 0, sign * 0.25]));
    rig.bodyPivot.add(pivot);
    return { pivot, sign };
  });

  rig.parts.feet = [-1, 1].map(sign => {
    const foot = kit.mesh(geometry.box, beak, [sign * 0.2, 0.13, 0.12], [0.13, 0.24, 0.13]);
    rig.bodyPivot.add(foot);
    return foot;
  });

  rig.headPivot.position.set(0.3, 1.15, 0.2);
  rig.headPivot.add(kit.mesh(geometry.sphere, coral, [0, 0, 0], [0.42, 0.4, 0.4]));
  rig.headPivot.add(kit.mesh(geometry.cone, beak, [0.4, -0.04, 0.18], [0.15, 0.32, 0.15], [Math.PI / 2, 0, 0]));
  rig.eyes = kit.eyes(rig.headPivot, { spacing: 0.17, y: 0.06, z: 0.35, size: 0.05 });
  rig.parts.brow = kit.mesh(geometry.box, ink, [0.17, 0.23, 0.37], [0.24, 0.025, 0.025], [0, 0, -0.16]);
  rig.headPivot.add(rig.parts.brow);
  rig.mouths = kit.mouths(rig.headPivot, { y: -0.14, z: 0.36, width: 0.16 });

  rig.bubbleY = 2.05;
  rig.animate = ({ time, pose, walking }) => {
    rig.parts.wings.forEach(({ pivot, sign }) => {
      pivot.rotation.z = sign * (0.12 + pose.limb * 0.65) + Math.sin(time * 3.2 + sign) * (0.08 + pose.cheer * 0.18);
    });
    rig.parts.feet.forEach((foot, index) => {
      foot.position.y = 0.13 + (walking ? Math.abs(Math.sin(time * 9 + index * Math.PI)) * 0.09 : 0);
    });
    rig.parts.brow.rotation.z = -0.16 - pose.limb * 0.12;
  };
  return rig;
}

function buildLumen(kit) {
  const { THREE, geometry } = kit;
  const rig = makeRig(kit, "lumen", "Lumen");
  const gold = kit.material("gold600", { identity: "#a77b2f", mix: 0.42 });
  const paper = kit.material("surface2", {
    identity: "#f8f1e4", mix: 0.22, transparent: true, opacity: 0.92, side: THREE.DoubleSide
  });
  const vein = kit.material("accent", { identity: "#3f6b55", mix: 0.35 });
  const glow = kit.material("warning", {
    identity: "#a77b2f", mix: 0.4, emissive: 0x6b4a12, emissiveIntensity: 0.36
  });

  rig.bodyPivot.add(kit.mesh(geometry.sphere, gold, [0, 0.76, 0], [0.22, 0.62, 0.22]));
  rig.bodyPivot.add(kit.mesh(geometry.sphere, glow, [0, 0.44, 0.14], [0.14, 0.18, 0.14]));

  rig.parts.wings = [-1, 1].map(sign => {
    const pivot = new THREE.Group();
    pivot.position.set(sign * 0.1, 0.98, -0.06);
    const wing = kit.mesh(geometry.wing, paper, [sign * 0.5, 0, 0], [sign * 0.56, 0.62, 1]);
    pivot.add(wing);
    for (let i = 0; i < 3; i += 1) {
      pivot.add(kit.mesh(geometry.box, vein,
        [sign * (0.28 + i * 0.18), 0.12 - i * 0.1, 0.012],
        [0.28, 0.012, 0.012], [0, 0, sign * (0.18 + i * 0.16)]));
    }
    rig.bodyPivot.add(pivot);
    return { pivot, sign };
  });

  rig.headPivot.position.set(0, 1.34, 0.06);
  rig.headPivot.add(kit.mesh(geometry.sphere, paper, [0, 0, 0], [0.28, 0.28, 0.28]));
  rig.eyes = kit.eyes(rig.headPivot, { spacing: 0.11, y: 0, z: 0.25, size: 0.038 });
  rig.mouths = kit.mouths(rig.headPivot, { y: -0.12, z: 0.25, width: 0.13 });
  rig.parts.antennae = [-1, 1].map(sign => {
    const antenna = kit.mesh(geometry.cone, gold,
      [sign * 0.17, 0.28, 0], [0.045, 0.34, 0.045], [0, 0, sign * 0.36]);
    rig.headPivot.add(antenna);
    return antenna;
  });

  rig.bubbleY = 2.12;
  rig.animate = ({ time, pose, walking }) => {
    rig.parts.wings.forEach(({ pivot, sign }) => {
      pivot.rotation.z = sign * (0.06 + pose.limb * 0.34) + Math.sin(time * 2.6 + sign) * (0.06 + pose.cheer * 0.14);
    });
    rig.parts.antennae.forEach((antenna, index) => {
      antenna.rotation.z = (index === 0 ? -0.36 : 0.36) + Math.sin(time * 1.8 + index) * 0.08;
    });
    rig.bodyPivot.scale.y = 1 + (walking ? Math.abs(Math.sin(time * 8)) * 0.04 : 0);
  };
  return rig;
}

function buildJuniper(kit) {
  const { THREE, geometry } = kit;
  const rig = makeRig(kit, "juniper", "Juniper");
  const lavender = kit.material("lav600", { identity: "#6a5b8f", mix: 0.45 });
  const cream = kit.material("surface2", { identity: "#f8f1e4", mix: 0.28 });
  const blush = kit.material("coral600", { identity: "#b95448", mix: 0.35 });
  const ink = kit.material("textStrong", { identity: "#12263a", mix: 0.25 });

  rig.bodyPivot.add(kit.mesh(geometry.sphere, lavender, [0, 0.66, 0], [0.72, 0.6, 0.68]));
  rig.bodyPivot.add(kit.mesh(geometry.sphere, cream, [0, 0.6, 0.36], [0.44, 0.34, 0.28]));

  rig.parts.tailPivot = new THREE.Group();
  rig.parts.tailPivot.position.set(-0.62, 0.62, -0.38);
  for (let i = 0; i < 4; i += 1) {
    rig.parts.tailPivot.add(kit.mesh(geometry.sphere, lavender,
      [-i * 0.22, i * 0.12, -i * 0.1], [0.28 - i * 0.04, 0.26 - i * 0.03, 0.26 - i * 0.03]));
  }
  rig.bodyPivot.add(rig.parts.tailPivot);

  rig.parts.paws = [-1, 1].map(sign => {
    const paw = kit.mesh(geometry.sphere, ink, [sign * 0.46, 0.2, 0.34], [0.2, 0.16, 0.24]);
    rig.bodyPivot.add(paw);
    return paw;
  });

  rig.headPivot.position.set(0, 1.06, 0.35);
  rig.headPivot.add(kit.mesh(geometry.sphere, lavender, [0, 0, 0], [0.42, 0.38, 0.38]));
  rig.parts.ears = [-1, 1].map(sign => {
    rig.headPivot.add(kit.mesh(geometry.cone, lavender,
      [sign * 0.28, 0.42, -0.02], [0.2, 0.46, 0.2], [0, 0, sign * 0.18]));
    const inner = kit.mesh(geometry.cone, blush,
      [sign * 0.28, 0.4, 0.06], [0.11, 0.28, 0.11], [0, 0, sign * 0.18]);
    rig.headPivot.add(inner);
    return inner;
  });
  rig.headPivot.add(kit.mesh(geometry.sphere, cream, [0, -0.08, 0.3], [0.34, 0.26, 0.2]));
  rig.eyes = kit.eyes(rig.headPivot, { spacing: 0.16, y: 0.04, z: 0.45, size: 0.048 });
  rig.mouths = kit.mouths(rig.headPivot, { y: -0.18, z: 0.46, width: 0.18 });
  rig.parts.cheeks = [-1, 1].map(sign => {
    const cheek = kit.mesh(geometry.sphere, blush, [sign * 0.29, -0.14, 0.38], [0.09, 0.05, 0.05]);
    rig.headPivot.add(cheek);
    return cheek;
  });

  rig.bubbleY = 2.05;
  rig.animate = ({ time, pose, walking }) => {
    rig.parts.tailPivot.rotation.z = Math.sin(time * 1.7) * (0.12 + pose.cheer * 0.28);
    rig.parts.ears.forEach((ear, index) => {
      ear.rotation.z = (index === 0 ? -0.18 : 0.18) + Math.sin(time * 2.2 + index) * 0.04;
    });
    rig.parts.paws.forEach((paw, index) => {
      paw.position.y = 0.2 + pose.limb * 0.28 + (walking ? Math.abs(Math.sin(time * 9 + index * Math.PI)) * 0.06 : 0);
    });
  };
  return rig;
}

const BUILDERS = {
  moss: buildMoss,
  pip: buildPip,
  lumen: buildLumen,
  juniper: buildJuniper
};

function normalizePosition(value, fallback) {
  if (!value) return fallback.clone();
  if (Array.isArray(value)) return new fallback.constructor(value[0], value[1], value[2]);
  if (typeof value.x === "number") {
    return new fallback.constructor(value.x, value.y ?? fallback.y, value.z ?? fallback.z);
  }
  return fallback.clone();
}

export function createCompanion(engine, kit, id, options = {}) {
  const design = companionDesigns.find(item => item.id === id) || companionDesigns[0];
  const build = BUILDERS[design.id] || BUILDERS.moss;
  const rig = build(kit);
  rig.group.userData.companion = design.id;
  rig.bubble = kit.bubble(rig.group, { position: [0, rig.bubbleY, 0.1] });

  const state = {
    mood: "idle",
    blink: 0,
    blinkTimer: 1.4 + Math.random() * 2,
    walkTarget: null,
    walkSpeed: options.walkSpeed || 2.6,
    walking: false,
    walkPhase: 0,
    phase: Math.random() * Math.PI * 2,
    time: 0
  };

  function setMood(mood) {
    const next = MOOD_ALIASES[mood] || (MOODS.includes(mood) ? mood : "idle");
    state.mood = next;
    rig.mouths.set(next);
    rig.group.userData.mood = next;
    return next;
  }

  function say(text, settings = {}) {
    rig.bubble.setText(text, settings);
    return api;
  }

  function walkTo(position, settings = {}) {
    state.walkTarget = normalizePosition(position, rig.group.position);
    state.walkSpeed = settings.speed || state.walkSpeed;
    return api;
  }

  function update(frame) {
    const delta = frame.delta || 0;
    const pose = POSES[state.mood];
    state.time += delta;

    let blinkFactor = 1;
    if (delta > 0) {
      state.blinkTimer -= delta;
      if (state.blinkTimer <= 0) {
        state.blink = 0.16;
        state.blinkTimer = 2.2 + Math.random() * 3.4;
      }
      if (state.blink > 0) {
        state.blink -= delta;
        const progress = 1 - Math.max(0, state.blink) / 0.16;
        blinkFactor = 1 - Math.sin(progress * Math.PI) * 0.94;
      }
    }
    rig.eyes.setOpen(blinkFactor * pose.eyeOpen);

    let stepBob = 0;
    if (state.walkTarget && delta > 0) {
      const target = state.walkTarget;
      const direction = target.clone().sub(rig.group.position);
      const distance = Math.hypot(direction.x, direction.z);
      if (distance > 0.05) {
        const amount = 1 - Math.exp(-delta * state.walkSpeed);
        rig.group.position.lerp(target, amount);
        state.walkPhase += delta * 9;
        stepBob = Math.abs(Math.sin(state.walkPhase)) * 0.09;
        const yaw = Math.atan2(direction.x, direction.z);
        rig.group.rotation.y = lerpAngle(rig.group.rotation.y, yaw, 1 - Math.exp(-delta * 5));
        state.walking = true;
      } else {
        rig.group.position.copy(target);
        state.walkTarget = null;
        state.walking = false;
      }
    } else if (!state.walkTarget) {
      state.walking = false;
    }

    const smoothing = delta > 0 ? 1 - Math.exp(-delta * 5.5) : 1;
    const pointer = frame.reducedMotion ? { x: 0, y: 0 } : frame.pointer;
    rig.headPivot.rotation.y = lerp(rig.headPivot.rotation.y, pointer.x * 0.26 + pose.headYaw, smoothing);
    rig.headPivot.rotation.x = lerp(rig.headPivot.rotation.x, -pointer.y * 0.16 + pose.headPitch, smoothing);
    rig.headPivot.rotation.z = lerp(rig.headPivot.rotation.z, pose.headTilt, smoothing);

    const breath = Math.sin(state.time * 1.5 + state.phase);
    rig.bodyPivot.position.y = Math.sin(state.time * 1.9 + state.phase) * pose.bounce + stepBob;
    rig.bodyPivot.scale.x = 1 + breath * 0.012;
    rig.bodyPivot.scale.z = 1 + breath * 0.018;
    rig.animate({
      time: state.time,
      delta,
      pose,
      walking: state.walking,
      pointer,
      mood: state.mood
    });
    rig.bubble.update(frame.realDelta ?? delta);
  }

  const api = {
    id: design.id,
    name: design.name,
    species: design.species,
    tagline: design.tagline,
    group: rig.group,
    head: rig.headPivot,
    setMood,
    getMood: () => state.mood,
    say,
    walkTo,
    update,
    getState() {
      return {
        id: design.id,
        mood: state.mood,
        position: rig.group.position.toArray().map(value => Number(value.toFixed(3))),
        rotationY: Number(rig.group.rotation.y.toFixed(3)),
        headRotation: rig.headPivot.rotation.toArray().slice(0, 3).map(value => Number(value.toFixed(3))),
        bubbleVisible: rig.bubble.object.visible,
        walking: Boolean(state.walkTarget)
      };
    },
    dispose() {
      unregister();
      rig.bubble.dispose();
      rig.mouths.dispose();
      for (const shape of rig.disposables) shape.dispose();
      rig.group.removeFromParent();
    }
  };

  setMood("idle");
  const unregister = options.autoRegister === false
    ? () => {}
    : engine.registerUpdatable(api.update);

  return api;
}

export const moodLines = {
  moss: {
    happy: "The garden is awake. One small thing, then another.",
    thinking: "What is the smallest version of the task you keep avoiding?",
    cheering: "You kept going. That counts more than a perfect streak."
  },
  pip: {
    happy: "Say the question out loud. Questions get lighter in the air.",
    thinking: "You do not need the whole answer. You need the next question.",
    cheering: "You asked. That is how the lock opens."
  },
  lumen: {
    happy: "One candle is enough to start. You do not need the whole sun.",
    thinking: "What did you notice today that you would otherwise have missed?",
    cheering: "I saw that. You did the thing you said you would do."
  },
  juniper: {
    happy: "Draft first. Make it clever later.",
    thinking: "What is the most interesting wrong version of this idea?",
    cheering: "Look at that. Imperfect and finished. My favourite combination."
  }
};

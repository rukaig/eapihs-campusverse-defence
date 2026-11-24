import {
  addCompanion,
  addLabel,
  addProp,
  addShape,
  baseGroup,
  flat,
  surface,
  wireReactions
} from "./shared.js";

const NEED_PROPS = ["books", "phone", "chess", "laptop", "calculator"];
const NEED_ROLES = ["sage600", "coral600", "gold600", "blue700", "lav600"];

export function createFiveNeeds({ engine, kit, section }) {
  const config = section.scene;
  const { THREE } = engine;
  const group = baseGroup(engine, section, {
    from: { x: -0.5, y: 2.0, z: 5.6, lookX: 0.05, lookY: 1.2, fov: 57, roll: -0.008 },
    to: { x: 0.6, y: 1.25, z: -1.5, lookX: 0.2, lookY: 0.9, fov: 52, roll: 0.008 }
  });
  group.position.y = -1.3;

  const tags = [];
  const props = [];
  const geometries = [];
  const nodes = [];

  const hub = addShape(kit, group, kit.geometry.cylinder,
    surface(engine, "accent", { roughness: 0.55, metalness: 0.12 }),
    [0, -1.0, -2.6], [2.3, 0.36, 2.3]);
  addShape(kit, group, kit.geometry.torus,
    flat(engine, "accentSoft", { transparent: true, opacity: 0.82 }),
    [0, -0.74, -2.6], [2.5, 2.5, 1], [Math.PI / 2, 0, 0]);
  engine.registerLayer(hub, 0.2);
  tags.push(addLabel(kit, group, config.hub, section.eyebrow, [0, 0.25, -2.35], [3.1, 0.78, 1]));

  const hubPoint = new THREE.Vector3(0, -0.35, -2.6);
  config.needs.forEach((name, index) => {
    const angle = (index / config.needs.length) * Math.PI * 2 - Math.PI / 2;
    const outer = new THREE.Vector3(
      Math.cos(angle) * 4.8,
      0.5 + Math.sin(index * 1.8) * 1.15,
      -1.2 + Math.sin(angle) * 3.1
    );
    const inner = new THREE.Vector3(
      Math.cos(angle) * 1.25,
      -0.2 + Math.sin(index * 1.4) * 0.28,
      -2.2 + Math.sin(angle) * 0.9
    );

    const socket = addShape(kit, group, kit.geometry.icosa,
      surface(engine, NEED_ROLES[index], { roughness: 0.5, metalness: 0.08 }),
      outer.toArray(), [0.46, 0.46, 0.46]);
    socket.userData.idleSpin = 0.14 + index * 0.03;
    engine.registerLayer(socket, 0.42 + index * 0.04);
    engine.registerLowGraphics(socket);

    const prop = addProp(engine, kit, group, NEED_PROPS[index],
      [outer.x, outer.y + 0.65, outer.z], 0.42);
    props.push(prop);
    tags.push(addLabel(kit, group, name, "", [outer.x, outer.y + 1.5, outer.z], [1.75, 0.44, 1]));

    const direction = hubPoint.clone().sub(outer);
    const length = direction.length();
    const linkGeometry = new THREE.CylinderGeometry(0.018, 0.018, length, 6);
    geometries.push(linkGeometry);
    const link = new THREE.Mesh(linkGeometry,
      flat(engine, NEED_ROLES[index], { transparent: true, opacity: 0.44, depthWrite: false }));
    link.position.copy(outer).add(hubPoint).multiplyScalar(0.5);
    link.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), direction.normalize());
    group.add(link);

    nodes.push({ socket, prop, outer, inner });
  });

  const companions = {
    lumen: addCompanion(engine, kit, group, "lumen", [-1.7, -0.9, 0.2], 0.76, "happy"),
    moss: addCompanion(engine, kit, group, "moss", [2.4, -0.95, 0.6], 0.74, "idle")
  };
  const reactions = wireReactions(companions, config.reactions);

  let active = false;
  let converge = 0;
  const unregister = engine.registerUpdatable(() => {
    const amount = active ? converge : 0;
    for (const node of nodes) {
      node.socket.position.lerpVectors(node.outer, node.inner, amount * 0.82);
      node.prop.group.position.set(
        THREE.MathUtils.lerp(node.outer.x, node.inner.x, amount * 0.82),
        THREE.MathUtils.lerp(node.outer.y + 0.65, node.inner.y + 0.6, amount * 0.82),
        THREE.MathUtils.lerp(node.outer.z, node.inner.z, amount * 0.82)
      );
    }
  });

  return {
    group,
    companion: "lumen",
    prop: "books",
    companionApi: companions.lumen,
    companionApis: Object.values(companions),
    setActive(value) {
      active = value;
      if (value) reactions.reset();
    },
    setLocalProgress(progress) {
      converge = progress;
      if (active) reactions.setLocalProgress(progress);
    },
    getState() {
      return {
        stage: "five-needs",
        converge: Number(converge.toFixed(3)),
        moods: Object.fromEntries(Object.entries(companions).map(([id, api]) => [id, api.getMood()])),
        bubbles: Object.fromEntries(Object.entries(companions).map(([id, api]) => [id, api.getState().bubbleVisible]))
      };
    },
    dispose() {
      unregister();
      for (const companion of Object.values(companions)) companion.dispose();
      for (const prop of props) prop.dispose();
      for (const tag of tags) tag.dispose();
      for (const shape of geometries) shape.dispose();
    }
  };
}

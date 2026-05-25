import * as THREE from '../node_modules/three/build/three.module.js';

export function logModelStructure(scene3d) {
  const info = { meshes: [], objects: [], zoneNames: [], issues: [] };

  scene3d.traverse(obj => {
    const entry = {
      name: obj.name || '(no name)',
      type: obj.type,
      visible: obj.visible,
      parent: obj.parent?.name || 'root',
    };

    if (obj.isMesh) {
      const box = new THREE.Box3().setFromObject(obj);
      const size = box.getSize(new THREE.Vector3());

      entry.geometry = obj.geometry.type;
      entry.triangles = obj.geometry.index
        ? obj.geometry.index.count / 3
        : obj.geometry.attributes.position.count / 3;
      entry.size = {
        x: +size.x.toFixed(2),
        y: +size.y.toFixed(2),
        z: +size.z.toFixed(2),
      };
      entry.frustumCulled = obj.frustumCulled;
      entry.raycastable = !!obj.geometry.attributes.position;
      info.meshes.push(entry);
    } else {
      info.objects.push(entry);
    }

    if (obj.name) info.zoneNames.push(obj.name);
  });

  const expectedZoneNames = new Set([
    'cont', 'okr',
    ...Array.from({ length: 48 }, (_, i) => String(i + 1)),
    '131', '141', '241', '251', '21_1',
  ]);

  const found = [];
  const missing = [];
  expectedZoneNames.forEach(name => {
    const obj = info.zoneNames.find(n => n === name);
    obj ? found.push(name) : missing.push(name);
  });

  info.zoneNames_found = found;
  info.zoneNames_missing = missing;
  info.duplicates = info.zoneNames.filter((n, i) => info.zoneNames.indexOf(n) !== i);

  console.log('=== MODEL STRUCTURE ===');
  console.log('Found zones:', found);
  console.log('Missing zones:', missing);
  console.log('Duplicates:', info.duplicates);
  console.log('All mesh details:');
  console.table(info.meshes);
  console.log('All object names:', info.zoneNames);
  console.log('Full info:', info);
}

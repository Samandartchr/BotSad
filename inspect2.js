const fs = require('fs');
const buf = fs.readFileSync('BotSadBezKol.glb');
const jsonLen = buf.readUInt32LE(12);
const gltf = JSON.parse(buf.slice(20, 20 + jsonLen).toString('utf8'));
const nodes = gltf.nodes || [];
const meshes = gltf.meshes || [];
const names = [];
nodes.forEach((n, i) => {
  if (n.mesh !== undefined) {
    const mesh = meshes[n.mesh];
    names.push({ nodeIndex: i, name: n.name || null, meshName: mesh?.name || null, children: n.children || [] });
  }
});
console.log(JSON.stringify(names.filter(x => x.nodeIndex < 30), null, 2));

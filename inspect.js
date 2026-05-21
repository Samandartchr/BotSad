const fs = require('fs');
const buf = fs.readFileSync('BotSadBezKol.glb');
const jsonLen = buf.readUInt32LE(12);
const gltf = JSON.parse(buf.slice(20, 20 + jsonLen).toString('utf8'));
const nodes = gltf.nodes || [];
const names = new Set(nodes.filter(n => n.name).map(n => n.name));
console.log('count', names.size);
['2.1','21','13.1','14.1','24.1','25.1'].forEach(q => {
  const n = nodes.find(n => n.name === q);
  if (!n) return console.log(q, 'MISSING');
  console.log('node', q, 'index', nodes.indexOf(n), 'children', n.children || []);
});
console.log('--- all matching names ---');
console.log(nodes.filter(n => n.name && ['2.1','21','13.1','14.1','24.1','25.1'].includes(n.name)).map(n => n.name));

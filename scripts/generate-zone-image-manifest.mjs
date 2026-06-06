import { readdir, writeFile } from 'node:fs/promises';
import path from 'node:path';

const root = process.cwd();
const imageRoot = path.join(root, 'modules', 'data', 'zoneimg');
const output = path.join(root, 'modules', 'data', 'zoneImageManifest.json');
const imageExt = new Set(['.jpg', '.jpeg', '.png', '.webp', '.avif', '.gif']);

async function main() {
  const manifest = {};
  const zones = await readdir(imageRoot, { withFileTypes: true }).catch(() => []);

  for (const zone of zones) {
    if (!zone.isDirectory()) continue;

    const zoneDir = path.join(imageRoot, zone.name);
    const files = await readdir(zoneDir, { withFileTypes: true });
    const images = files
      .filter(file => file.isFile() && imageExt.has(path.extname(file.name).toLowerCase()))
      .map(file => file.name)
      .sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }));

    if (images.length) manifest[zone.name] = images;
  }

  await writeFile(output, `${JSON.stringify(manifest, null, 2)}\n`, 'utf8');
  console.log(`Generated ${path.relative(root, output)} with ${Object.keys(manifest).length} zone folders.`);
}

main().catch(error => {
  console.error(error);
  process.exitCode = 1;
});

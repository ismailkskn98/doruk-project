import sharp from 'sharp';
import toIco from 'to-ico';
import { writeFile, mkdir } from 'node:fs/promises';
import path from 'node:path';

const source = path.join(process.cwd(), 'public/images/vcard-logo-update.png');
const publicDir = path.join(process.cwd(), 'public');

async function makeSquareIcon(size) {
  return sharp(source)
    .flatten({ background: '#000000' })
    .resize(size, size, { fit: 'cover' })
    .png()
    .toBuffer();
}

await mkdir(publicDir, { recursive: true });

const sizes = [16, 32, 48, 180, 192];
const buffers = await Promise.all(sizes.map((size) => makeSquareIcon(size)));

await writeFile(path.join(publicDir, 'icon-48.png'), buffers[sizes.indexOf(48)]);
await writeFile(path.join(publicDir, 'icon-192.png'), buffers[sizes.indexOf(192)]);
await writeFile(path.join(publicDir, 'apple-touch-icon.png'), buffers[sizes.indexOf(180)]);

const ico = await toIco(buffers.slice(0, 3));
await writeFile(path.join(publicDir, 'favicon.ico'), ico);

console.log('Generated favicon.ico, icon-48.png, icon-192.png, apple-touch-icon.png');

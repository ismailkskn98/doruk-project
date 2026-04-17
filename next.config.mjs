/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  // output: 'standalone',
};

export default nextConfig;
/*
npm run build

# statik dosyaları ekle
cp -r public .next/standalone/
cp -r .next/static .next/standalone/.next/

# çalıştır
node .next/standalone/server.js

*/

/*
PwerShell ile build

npm run build

# statik dosyaları ekle
Copy-Item public -Destination .next/standalone/public -Recurse
Copy-Item .next/static -Destination .next/standalone/.next/static -Recurse

# çalıştır
node .next/standalone/server.js

*/

/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  output: 'standalone',
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

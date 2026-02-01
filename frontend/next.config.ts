import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,

  //reactStrictMode: true, // a été enlevé pour ne pas avoir de doublon en log

images: {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'images.unsplash.com',
    },
  ],
},
};

export default nextConfig;



import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  //reactStrictMode: true, // enlever pour ne pas avoir de doublon en log

    images: {
    domains: ["images.unsplash.com"],
  },
};

export default nextConfig;

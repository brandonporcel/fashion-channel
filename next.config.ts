import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      { hostname: "i.pinimg.com" },
      { hostname: "assets.vogue.com" },
      { hostname: "img.youtube.com" },
      { hostname: "res.cloudinary.com" },
      { hostname: "**" },
    ],
  },
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Build to plain HTML/CSS/JS in `out/` — no server needed.
  output: "export",
  // The default image optimizer needs a server, so serve images as-is.
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

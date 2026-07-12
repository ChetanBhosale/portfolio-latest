import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  images: {
    // Only local, hand-vetted SVGs (public/image/*) are served
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
}

export default nextConfig

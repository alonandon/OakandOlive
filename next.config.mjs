/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [],
    // Long-lived cache for the on-demand image optimizer's responses
    // (PageSpeed: "Use efficient cache lifetimes"). Paired with the
    // matching Cache-Control override in netlify.toml, since Netlify's
    // Next.js Runtime otherwise serves these as max-age=0.
    minimumCacheTTL: 31536000,
  },
}

export default nextConfig

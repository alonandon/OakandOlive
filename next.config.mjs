/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [],
  },
  experimental: {
    // Inlines above-the-fold CSS into <style> tags and loads the rest
    // asynchronously, removing the 6.8 KiB stylesheet from the critical
    // rendering path (PageSpeed: "Render-blocking requests, est. 150ms savings").
    optimizeCss: true,
  },
}

export default nextConfig

import path from 'node:path'
import { fileURLToPath } from 'node:url'

const polyfillStub = path.join(path.dirname(fileURLToPath(import.meta.url)), 'polyfill-stub.js')

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
  webpack(config, { isServer, webpack }) {
    if (!isServer) {
      // Next ships a feature-detected polyfill bundle (Array.prototype.at,
      // flat/flatMap, Object.fromEntries, Object.hasOwn, trimStart/End,
      // Promise.finally, Symbol.description, URL.canParse) in every client
      // build. Everything but URL.canParse is native at this site's
      // browserslist floor (Chrome 93 / Safari 15.4 / Firefox 92), and
      // URL.canParse is only called by Next's Pages Router client, which this
      // App Router site does not load. Dropping it removes the "legacy
      // JavaScript" PageSpeed finding (~11 KiB).
      config.plugins.push(
        new webpack.NormalModuleReplacementPlugin(
          /[\\/]polyfills[\\/]polyfill-module(\.js)?$/,
          polyfillStub
        )
      )
    }
    return config
  },
}

export default nextConfig

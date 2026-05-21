import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  tanstackStart: {
    server: {
      entry: "./src/server.ts"
    },
  },
  vite: {
    base: '/',
    plugins: [

      VitePWA({
        registerType: 'autoUpdate',
        includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'mask-icon.svg'],
        manifest: {
          name: 'RN.BMK Healthcare Portfolio',
          short_name: 'RN B.Muthomi k',
          description: 'Brian Muthomi Kinyua - Nurse, Healthcare provider, Innovator & Digital Health Builder',
          theme_color: '#0a1020',
          background_color: '#0a1020',
          display: 'standalone',
          icons: [
            {
              src: 'icon-192.png',
              sizes: '192x192',
              type: 'image/png'
            },
            {
              src: 'icon-512.png',
              sizes: '512x512',
              type: 'image/png'
            }
          ]
        },
        workbox: {
          // This tells the PWA Robot to save your files for offline use
          globPatterns: ['**/*.{js,css,html,ico,png,svg,woff2}'],
          runtimeCaching: [
            {
              // This tells the Robot to save your Supabase data for 1 day
              urlPattern: /^https:\/\/.*\.supabase\.co\/.*/,
              handler: 'NetworkFirst',
              options: {
                cacheName: 'supabase-data',
                expiration: {
                  maxEntries: 50,
                  maxAgeSeconds: 60 * 60 * 24
                }
              }
            }
          ]
        }
      })
    ]
  }
});
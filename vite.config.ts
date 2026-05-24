import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import { VitePWA } from "vite-plugin-pwa";
import { TanStackRouterVite } from "@tanstack/router-vite-plugin";
export default defineConfig({
  base: "/",

  plugins: [
    react(),
    tsconfigPaths(),
    TanStackRouterVite(),

    VitePWA({
      registerType: "autoUpdate",

      includeAssets: ["favicon.ico", "apple-touch-icon.png"],

      manifest: {
        name: "RN.BMK Healthcare Portfolio",
        short_name: "RN B.Muthomi k",
        description:
          "Brian Muthomi Kinyua - Nurse, Healthcare provider & Digital Health Builder",

        theme_color: "#0a1020",
        background_color: "#0a1020",
        display: "standalone",

        icons: [
          {
            src: "icon-192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "icon-512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },

      workbox: {
        globPatterns: ["**/*.{js,css,html,ico,png,svg,mp3,woff2}"],

        runtimeCaching: [
          {
            urlPattern: /^https:\/\/.*\.supabase\.co\/.*/,
            handler: "NetworkFirst",

            options: {
              cacheName: "supabase-data",

              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 60 * 60 * 24,
              },
            },
          },
        ],
      },
    }),
  ],
});
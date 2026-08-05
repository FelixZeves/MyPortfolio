import { fileURLToPath, URL } from 'node:url'

import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

import { quasar, transformAssetUrls } from '@quasar/vite-plugin'

// https://vite.dev/config/

export default defineConfig(({ mode }) => {

  const env = loadEnv(mode, process.cwd(), "")

  return {

    base: env.VITE_BASE,

    plugins: [
      vue({
        template: {
          transformAssetUrls
        }
      }),
      quasar()
    ],

    server: {
      proxy: {
          "/api": {
              target: "http://localhost:3000",
              changeOrigin: true
          }
      }
    },

    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    
  }

})
  

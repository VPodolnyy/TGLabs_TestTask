import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import viteCompression from 'vite-plugin-compression'
import Path from 'path'

const pathPrefix = 'assets/vue_test/static'
const timestamp = `${+new Date}`
// https://vitejs.dev/config/
const config = {
  base: './',
  runtimeCompiler: true,
  plugins: [
    vue(),
    viteCompression()
  ],
  build: {
    chunkSizeWarningLimit: 2000,
    sourcemap: true,
    minify: true,
    compact: true,
    cssCodeSplit: false,
    rollupOptions: {
      output: {
        entryFileNames: `${pathPrefix}/js/[name]-${timestamp}.js`,
        chunkFileNames: `${pathPrefix}/js/[name]-[hash].js`,
        assetFileNames: (info) => {
          const isStyle = info.name.includes('.css')
          const isIMG = ['.svg', '.png', '.jpg'].some(extension => info.name.includes(extension))
          const isFont = info.name.includes('.woff')
          if (isStyle) {
            return `${pathPrefix}/css/[name]-${timestamp}.[ext]`
          }
          if (isIMG) {
            return `${pathPrefix}/img/[name].[ext]`
          }
          if (isFont) {
            return `${pathPrefix}/fonts/[name].[ext]`
          }
          return `${pathPrefix}/[name].[hash].[ext]`
        }
      },
    },
  },
  resolve:{
    alias:{
      '@' : Path.resolve(__dirname, './src')
    },
  },
  css: {
    preprocessorOptions: {
       stylus: {
         imports: [Path.resolve(__dirname, 'src/styles/Global/colors.styl')]
       }
    }
  },
  server: {}
}
export default defineConfig(config)

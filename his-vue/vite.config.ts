import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// 导入ElementPlus相关依赖库
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// 配置SVG依赖库
import path from 'path'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'


// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // 配置按需自动加载element-plus控件
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    // 引用element-plus控件
    Components({
      resolvers: [ElementPlusResolver()],
    }),
    // 引入SVG图标素材文件
    createSvgIconsPlugin({
      // 指定需要缓存的图标文件夹
      iconDirs: [path.resolve(process.cwd(), 'src/icons/svg')],
      // 指定symbolId格式
      symbolId: '[name]',
    })
  ],
  server: {
    host: "localhost",
    port: 7600
  }
})

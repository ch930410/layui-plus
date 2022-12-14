import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import markdown from 'vite-plugin-md';
// markdown()
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/],
    }),
    vueJsx({}),
  ],
  build:{
    rollupOptions: {
        // 请确保外部化那些你的库中不需要的依赖
        external: ['vue', 'vue-router'],
        output: {
          // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
          globals: {
            vue: 'Vue'
          }
        }
      },
      lib: {
        entry: 'layui/vue-layui.ts',
        name: 'layui-plus',
        fileName: 'layui-plus',
        formats: ['es', 'umd']
      }
  }
})

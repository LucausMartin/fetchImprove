/** @type {import('vite').UserConfig} */
import { defineConfig } from 'vite';
export default defineConfig({
  root: './src',
  base: '',
  build: {
    outDir: './src/dist', // 确保这个路径和你的 HTML 文件中引用的路径一致
  },
});

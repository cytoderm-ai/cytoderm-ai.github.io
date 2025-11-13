import { fileURLToPath, URL } from 'node:url'
import { copyFileSync } from 'node:fs'
import { resolve } from 'node:path'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import mdx from '@mdx-js/rollup'
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import remarkGfm from 'remark-gfm';

// 自定义插件：在构建完成后复制 404.html
function copy404Plugin() {
  return {
    name: 'copy-404',
    closeBundle() {
      const src404 = resolve(__dirname, 'src/404.html')
      const dist404 = resolve(__dirname, '.cache/dist/404.html')
      try {
        copyFileSync(src404, dist404)
        console.log('✓ Copied 404.html to dist')
      } catch (err) {
        console.error('Failed to copy 404.html:', err)
      }
    }
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    mdx({
      jsxImportSource: 'vue',
      remarkPlugins: [
        remarkMath,
        remarkGfm,
      ],
      rehypePlugins: [
        rehypeKatex,
      ],
    }),
    copy404Plugin(),
  ],
  base: '/',
  build: {
    outDir: '.cache/dist',
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
})

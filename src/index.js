import { createRouter, createWebHistory } from 'vue-router'

// 在这里集中管理可用页面。默认页面始终是数组的第一个元素。
// 添加新的页面时：
// 1. 在 src 目录下创建自己的页面模块（参考 src/chunkflow）。
// 2. 在此文件顶部引入组件。
// 3. 把页面对象添加到 PAGES 数组（放在第一位即可成为默认页）。
import ChunkflowPage from './chunkflow/components/chunkflow.vue'

const PAGES = [
  {
    path: '/chunkflow',
    name: 'Chunkflow',
    component: ChunkflowPage
  }
  // 示例：
  // {
  //   path: '/newpaper',
  //   name: 'NewPaper',
  //   component: () => import('./newpaper/components/pages/newpaper.vue')
  // }
]

if (PAGES.length === 0) {
  throw new Error('至少需要在 PAGES 中注册一个页面。')
}

const [defaultPage, ...otherPages] = PAGES

const routes = [
  { path: '/', redirect: defaultPage.path },
  defaultPage,
  ...otherPages
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router

import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from '.'

const app = createApp(App)

app.use(ElementPlus)
app.use(router)

function handleHistoryFallback() {
  if (typeof window === 'undefined') {
    return Promise.resolve()
  }

  let redirectPath = null

  try {
    redirectPath = window.sessionStorage.getItem('spa-fallback-path')
    if (redirectPath) {
      window.sessionStorage.removeItem('spa-fallback-path')
    }
  } catch (error) {
    redirectPath = null
  }

  if (!redirectPath) {
    return Promise.resolve()
  }

  const currentFullPath = `${window.location.pathname}${window.location.search}${window.location.hash}`

  if (redirectPath === currentFullPath) {
    return Promise.resolve()
  }

  // Preserve the originally requested route after GitHub Pages fallback.
  return router.replace(redirectPath).catch(() => undefined)
}

// 路由导航守卫 - 动态修改网页标题
router.beforeEach((to, from, next) => {
  // 根据路由路径设置标题
  if (to.path === '/chunkflow' || to.path.startsWith('/chunkflow/')) {
    document.title = 'ChunkFlow'
  } else {
    document.title = 'Cytoderm AI'
  }
  next()
})

handleHistoryFallback().finally(() => {
  app.mount('#app')
})


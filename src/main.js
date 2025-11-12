import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from '.'

const app = createApp(App)

app.use(ElementPlus)
app.use(router)

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

app.mount('#app')
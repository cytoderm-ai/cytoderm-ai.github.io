<script>

import '@/chunkflow/assets/font.css'
import Header from './Header.vue'
import Main from './Main.vue'
import Footer from './Footer.vue'

export default {
  components: {
    Header,
    Main,
    Footer,
  }
}

</script>

<template>
    <div>

      <el-container>
        <el-header><Header/></el-header>
        <el-main><Main/></el-main>
        <el-footer><Footer/></el-footer>
      </el-container>

      <!-- 回到顶部 -->
      <el-backtop :right="40" :bottom="80" />
    </div>
</template>

<style scoped>
/* Chunkflow 页面专属样式可以放这里 */
</style>

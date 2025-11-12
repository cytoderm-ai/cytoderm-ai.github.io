<script lang="ts" setup>

// 公司主页
const logo = {
    name: "/main/logo_lang.png",
    link: "https://cytoderm.ai/",
}

// 右侧菜单项
const right_items = {
    About: {
        link: "https://cybopal.com/pages/contact",
        name: "About Us"
    },
}

</script>

<template>
    <!-- 设置页首始终悬浮顶部 -->
    <el-affix :offset="0" :style="{width: '100%'}">

    <!-- 水平导航目录 -->
    <el-menu
        default-active="0"
        class="el-menu-demo"
        mode="horizontal"
        :ellipsis="false"
    >
        <!-- 公司 Logo -->
        <el-menu-item index="1">
            <a :href="logo.link">
                <el-icon class="company-icon">
                    <el-image :src="logo.name" alt="Company Logo" />
                </el-icon>
            </a>
        </el-menu-item>

        <!-- 关于我们 -->
        <el-menu-item index="2">
            <a :href="right_items.About.link" style="font-size: clamp(12px, 0.8vw, 50px)">
                {{ right_items.About.name }}
            </a>
        </el-menu-item>

    </el-menu>
    </el-affix>
</template>

<style>

/* 导航背景 */
.el-menu {
    background: none;
}

.el-menu-item {
    font-family: "MyFont", Verdana, sans-serif;
    letter-spacing: 2px;
    font-size: 16px;
}

/* 下拉菜单宽度 */
.el-menu--popup {
    min-width: 100%;
}

/* 导航背景特效和阴影 */
.el-affix--fixed {
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
    background-image: radial-gradient(#ffffffca 1px,#ffffff 1px);
    background-size: 3px 3px;
}

/* 水平导航高度 */
.el-header {
    --el-header-height: 0px;
}

</style>

<style scoped>

/* 水平导航左右分区 */
.el-menu--horizontal > .el-menu-item:nth-child(1) {
    margin-right: auto;
}

/* 水平导航高度 */
.el-menu--horizontal {
    --el-menu-horizontal-height: 3vw;
}

/* 取消鼠标焦点悬浮在链接上的颜色装饰 */
a:hover {
    color: inherit;
    border-bottom: none;
}

/* 链接装饰，取消下划线和链接颜色 */
a {
    text-decoration: None;
    color: inherit;
}

/* 公司 Logo 图标响应式大小 */
@media (max-width: 1000px) {
    .company-icon {
        width: 20vw;
    }
}

@media (min-width: 1001px) {
    .company-icon {
        width: 12vw;
    }
}

</style>


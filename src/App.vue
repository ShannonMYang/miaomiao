<template>
  <keep-alive> <!-- 切换路由，导致重新渲染，影响性能，这里自带组件提供缓存 -->
    <router-view />
  </keep-alive>
</template>



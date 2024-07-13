<template>
  <el-container style="max-width: 1180px; margin: 0 auto;">
    <el-header>
      <el-menu mode="horizontal">
        <router-link
          activeClass="is-active"
          :to="{ name: 'home' }"
          class="el-menu-item"
        >Article List</router-link>
        <router-link
          activeClass="is-active"
          :to="{ name: 'create' }"
          class="el-menu-item"
        >Create Article</router-link>
      </el-menu>
    </el-header>
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
</template>

<script>
import { ElContainer, ElMenu, ElMain } from "element-plus"
export default {
  name: 'App',
  components: {
    ElContainer,
    ElMenu,
    ElMain,
  },
}
</script>
<template>
  <div class="common-layout">
    <el-container>
      <el-aside class="common-aside" width="200px">
        <router-link to="/">Home</router-link>
        |
        <router-link to="/about">About</router-link>
      </el-aside>
      <el-container>
        <el-header class="common-header">Header</el-header>
        <el-main>
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>

</script>

<style scoped>
.common-header {
  background: bisque;
}

.common-aside {
  background: #42b983;
}
</style>
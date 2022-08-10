<template>
  <div class="common-layout">
    <el-container>
      <el-header class="common-header flex-float">
        <div class="flex">
          <div>
            <img class="logo" src="../assets/logo.png">
          </div>
          <div>
            <h1 class="title">商铺后台管理系统</h1>
          </div>
        </div>
        <el-button type="danger">退出</el-button>
      </el-header>
      <el-container>
        <el-aside class="common-aside" width="200px">
          <el-menu
              background-color="#0066ff"
              router="true"
              text-color="#cc0066"
          >
            <el-sub-menu index="1">
              <template #title>
                <el-icon>
                  <Avatar/>
                </el-icon>
                <span>账号管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="/roles">账号列表</el-menu-item>
              </el-menu-item-group>
            </el-sub-menu>
            <el-sub-menu index="2">
              <template #title>
                <el-icon>
                  <Connection/>
                </el-icon>
                <span>角色管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="/user">角色列表</el-menu-item>
              </el-menu-item-group>
            </el-sub-menu>
          </el-menu>
          <!--          <router-link :to="{ name: 'rolesList' }">roles</router-link>-->
          <!--          <router-link :to="{ name: 'userList' }">user</router-link>-->
        </el-aside>
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
.title {
  color: coral;
}

.logo {
  width: 60px;
}

.el-container {
  height: 100vh;
  overflow: hidden;
}

.common-header {
  background: lightgray;
  display: flex;
}

.common-aside {
  background: lemonchiffon;
}
</style>
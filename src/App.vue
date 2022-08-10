<template>
  <div>
    <!--  <router-link :to="{ name: 'layout' }">layout</router-link>-->
    <router-view></router-view>
  </div>
</template>

<style>
body, html {
  padding: 0;
  margin: 0;
}
/* flex 布局类名 */
.flex-float {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.flex {
  display: flex;
  align-items: center;
}
</style>

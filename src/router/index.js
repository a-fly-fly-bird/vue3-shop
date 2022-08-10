import {createRouter, createWebHashHistory} from 'vue-router'
import Layout from '../views/LayOut.vue'

const routes = [
  {
    path: '/',
    name: 'layout',
    component: Layout,
    children: [
      {
        path: 'roles',
        name: 'rolesList',
        component: () => import("../views/pages/rolesList")
      },
      {
        path: 'user',
        name: 'userList',
        component: () => import("../views/pages/userList")
      }
    ]
  },
  // 登陆页面
  {
    path: '/login',
    name: 'login',
    component: () => import("../views/pages/loginPage.vue")
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

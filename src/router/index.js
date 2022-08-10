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
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

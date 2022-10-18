import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login.vue'
import Index from '@/components/Index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/index',
      name: 'Index',
      component: Index,
      // redirect: '/roleList', 重定向
      children: [
        {
          path: '/roleList',
          name: 'RoleList',
          component: () => import('@/components/RoleList.vue')
        },
        {
          path: '/userList',
          name: 'UserList',
          component: () => import('@/components/UserList.vue')
        }
      ]
    }
  ]
})

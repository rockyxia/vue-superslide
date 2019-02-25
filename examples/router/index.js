import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      redirect: '/'
    },
    {
      path: '/',
      name: 'index',
      component: require('@/pages/index').default,
      meta: {
        requireAuth: true // 该路由项需要权限校验
      }
    },
    {
      path: '/demo/',
      name: 'demo',
      component: require('@/pages/demo').default,
      children: [
        {
          path: 'slideBox',
          name: 'slideBox',
          component: require('@/pages/2.slideBox').default
        },
        {
          path: 'slideTxtBox',
          name: 'slideTxtBox',
          component: require('@/pages/1.slideTxtBox').default
        },
        {
          path: 'picScrollLeft',
          name: 'picScrollLeft',
          component: require('@/pages/3.picScrollLeft').default
        }
      ]
    }

    // {
    //   path: '/course/:course_id',
    //   name: 'course',
    //   component: require('@/pages/course/course').default,
    //   meta: {
    //     requireAuth: true // 该路由项需要权限校验
    //   }
    // },
    // {
    //   path: '/course/:course_id/:video_id',
    //   name: 'video',
    //   component: require('@/pages/course/course').default,
    //   meta: {
    //     requireAuth: true // 该路由项需要权限校验
    //   }
    // },
    // {
    //   path: '/admin',
    //   name: 'admin',
    //   component: require('@/pages/admin/index').default,
    //   meta: {
    //     requireAuth: true // 该路由项需要权限校验
    //   },
    //   children: [
    //     {
    //       path: 'add',
    //       component: require('@/pages/admin/index').default
    //     }
    //   ]
    // }
  ]
})

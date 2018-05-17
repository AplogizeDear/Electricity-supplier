import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: resolve => require(['@/pages/index/index'], resolve),
      redirect: '/index/page1'
    },
    {
        path: '/index',
        component: resolve => require(['@/pages/index/index'], resolve),
        meta: {keepAlive: true},
        children: [
            {
                path: '',
                component: resolve => require(['@/pages/index/index'], resolve)
            },
            {
                path: 'page1',
                name: 'page1',
                component: resolve => require(['@/pages/index/page1'], resolve)
            },
            {
                path: 'page2',
                name: 'page2',
                component: resolve => require(['@/pages/index/page2'], resolve)
            },
            {
                path: 'page3',
                name: 'page3',
                component: resolve => require(['@/pages/index/page3'], resolve)
            },
            {
                path: 'page4',
                name: 'page4',
                component: resolve => require(['@/pages/index/page4'], resolve)
            },
            {
                path: 'page5',
                name: 'page5',
                component: resolve => require(['@/pages/index/page5'], resolve)
            },
            {
                path: 'page6',
                name: 'page6',
                component: resolve => require(['@/pages/index/page6'], resolve)
            },
            {
                path: 'page7',
                component: resolve => require(['@/pages/index/page7'], resolve)
            },
        ]

    },
   {
       path:'/brandsale',
       name:'brandsale',
       component:resolve => require(['@/pages/brandsale/index'], resolve)
   },
  {
      path:'/livecommunity',
      name:'livecommunity',
      component:resolve => require(['@/pages/livecommunity/index'], resolve)
  },
  {
      path:'/shopcart',
      name:'shopcart',
      component:resolve => require(['@/pages/shopcart/index'],resolve)
  },
  {
      path:'/myself',
      name:'myself',
      component:resolve => require(['@/pages/myself/index'],resolve)
  }
  ]
})

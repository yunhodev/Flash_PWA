import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/flashes',
    name: 'flashes',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "flashes" */ '../views/FlashesView.vue')
  },
  {
    path: '/flashplayer',
    name: 'flashplayer',
    component: () => import('../views/FlashPlayerView.vue')
    // props: (route) => ({ query: route.query })
  },
  {
    path: '/siteinfo',
    name: 'siteinfo',
    component: () => import('../views/SiteInfoView.vue')
  }
]

/*
const router = new VueRouter({
  routes: [
    {
      path: '/user',
      component: User,
      props: (route) => ({ query: route.query })
    }
  ]
})
*/

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

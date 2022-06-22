import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/Home.vue'
Vue.use(VueRouter)

export const routes = [
  {
    path: '/home',
    name: 'home',
    component: Home
  }, {
    path: '/wishlist',
    name: 'wishlist',
    component: () =>
        import('../pages/Wunschpizza')
  },{
    path: '/shop',
    name: 'shop',
    component: () =>
        import('../pages/Shop'),
    /* Passing the Content */
    props: true
  },{
    path: '/faq',
    name: 'faq',
    component: () =>
        import('../pages/FAQ'),
    /* Passing the Content */
    props: true
  },{
    path: '/single',
    name: 'singlemessage',
    component: () =>
        import('../pages/SingleMessage'),
    /* Passing the Content */
    props: true
  }
]

//Setting up the Router Instance
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.replace({path:'home', redirect: '/'})
export default router


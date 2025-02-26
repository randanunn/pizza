// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/pizza',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        redirect: '/pizza'
      },
      {
        path: 'pizza',
        name: 'Pizza',
        component: () => import(/* webpackChunkName: "pizza" */ '@/views/Pizza.vue'),
      },
      {
        path: 'tottis',
        name: 'Tottis',
        component: () => import(/* webpackChunkName: "tottis" */ '@/views/Tottis.vue'),
      },
    ],
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router

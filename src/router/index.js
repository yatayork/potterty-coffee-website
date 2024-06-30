import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/about',
      name: 'about',

      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/ContactMail',
      name: 'ContactMail',
      component: () => import('../views/ContactView.vue')
    },
    {
      path: '/News',
      name: 'news',
      component: () => import('../views/NewsView.vue')
    },
    {
      path: '/preOrder',
      name: 'preOrder',
      component: () => import('../views/PreOrderView.vue')
    }
  ]
})

export default router

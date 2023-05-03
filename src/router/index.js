import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Capture from '../views/clients/Capture.vue'
import ReadAll from '../views/clients/ReadAll.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/capture',
      name: 'capture',
      component: Capture,
    },
    {
      path: '/clients',
      name: 'clients',
      component: ReadAll,
      children: [
        {
          path: 'client/:id',
          name: 'profile',
          component: () => import('../views/clients/ReadOne.vue'),
        },
        {
          path: 'client/:id/profile',
          name: 'update',
          component: () => import('../views/clients/Update.vue'),
        },
      ],
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router

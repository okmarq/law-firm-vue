import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ReadAll from '../views/clients/ReadAll.vue'
import ReadOne from '../views/clients/ReadOne.vue'
import UpdateView from '../views/clients/UpdateView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/clients',
      name: 'clients',
      component: ReadAll,
      children: [
        {
          path: '/:id',
          name: 'client',
          component: ReadOne,
          children: [
            {
              path: '/profile',
              name: 'update',
              component: UpdateView
            },
          ]
        },
      ]
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router

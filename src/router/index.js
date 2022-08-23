import { createRouter, createWebHistory } from 'vue-router'
import PersonalView from '../views/Personal.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Personal',
      component: PersonalView
    },
    {
      path: '/skill',
      name: 'skill',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/SkillView.vue')
    },
  ]
})

export default router

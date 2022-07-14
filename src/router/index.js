import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Nieuws from '../views/Nieuws.vue';
import Over from '../views/Over.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/bibliotheek',
      name: 'bibliotheek',
      component: () => import('../views/Bibliotheek.vue')
    },
    {
      path: '/nieuws',
      name: 'nieuws',
      component: Nieuws,
    },
    {
      path: '/over',
      name: 'over',
      component: Over
    },
  ]
})

export default router

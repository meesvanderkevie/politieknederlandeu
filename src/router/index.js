import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Nieuws from '../views/Nieuws.vue';
import Over from '../views/Over.vue';
import StemWijzer from '../views/StemWijzer.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/bibiotheek',
      name: 'bibiotheek',
      component: () => import('../views/Bibiotheek.vue')
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
    {
      path: '/stemwijzer',
      name: 'stemwijzer',
      component: StemWijzer
    }
  ]
})

export default router

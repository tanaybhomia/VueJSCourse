import { createRouter, createWebHistory } from 'vue-router';
import addReceipe from '@/components/addReceipe.vue';
import FavouritesView from '@/components/FavouritesView.vue';
import HomeView from '@/components/HomeView.vue';
import ReceipeView from '@/components/ReceipeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/favoutires',
      name: 'favourites',
      component: FavouritesView,
    },
    {
      path: '/addReceipe',
      name: 'addReceipe',
      component: addReceipe,
    },
    {
      path: '/receipe/:id',
      name: 'receipe',
      component: ReceipeView,
    },
  ],
});

export default router;

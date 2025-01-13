<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import HomeView from './components/HomeView.vue';
import FavouritesView from './components/FavouritesView.vue';
import ReceipeView from './components/ReceipeView.vue';
</script>

<template>
  <header>
    <nav>
      <ul>
        <li>
          <RouterLink
            :to="{
              name: 'home',
            }"
            >Home</RouterLink
          >
        </li>
        <li>
          <RouterLink
            :to="{
              name: 'favourites',
            }"
          >
            favourites</RouterLink
          >
        </li>
        <li>
          <RouterLink
            :to="{
              name: 'receipe',
              params: { id: 123 },
            }"
          >
            Receipe</RouterLink
          >
        </li>
      </ul>
    </nav>
  </header>
  <RouterView />
</template>

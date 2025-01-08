<template>
  <main class="max-w-2xl mx-auto px-4">
    <nav class="font-medium text-center text-gray-500 border-b border-gray-200 mb-4">
      <ul class="flex flex-wrap -mb-px">
        <!-- Loop through the tabs array and render TabLink for each -->
        <li v-for="tab in tabs" :key="tab.key">
          <TabLink :tab="tab" :isActive="tab.key === currentTab" @click="currentTab = tab.key" />
        </li>
      </ul>
    </nav>
    <Transition mode="out-in">
      <component :is="currentTabComponent" />
    </Transition>
  </main>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import TabLink from './components/TabLink.vue';
import NotificationsSettings from './components/NotificationsSettings.vue';
import GeneralSettings from './components/GeneralSettings.vue';
import PrivacySettings from './components/PrivacySettings.vue';

// Define the tabs array
const tabs = [
  { key: 'General', label: 'General', component: GeneralSettings },
  { key: 'Notifications', label: 'Notifications', component: NotificationsSettings },
  { key: 'Privacy', label: 'Privacy', component: PrivacySettings },
];

// The currently active tab
const currentTab = ref('General');
const currentTabComponent = computed(
  () => tabs.find((tab) => tab.key === currentTab.value)?.component,
);
console.log(currentTabComponent.value);
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.1s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>

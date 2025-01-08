<template>
  <!-- Button with dynamic classes -->
  <button
    @click="$emit('click')"
    :class="{
      'p-4 border-b-2': true,
      'border-transparent': !isActive,
      'border-b-blue-600 text-blue-600': isActive,
    }"
  >
    {{ tab.label }}
  </button>
</template>

<script setup lang="ts">
// Props for the tab and whether it’s active
const props = defineProps({
  tab: { type: Object, required: true }, // Tab object with key and label
  isActive: { type: Boolean, required: true }, // Whether this tab is active
});

// Emit click events
defineEmits(['click']);
</script>

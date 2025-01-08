<template>
  <div>Name: {{ name }}</div>
  <div>Age: {{ age }}</div>
</template>
<script setup lang="ts">
defineProps({
  name: String,
  age: { String, default: 10 },
  height: {
    type: String,
    required: true,
  },
  // here I can pass a different prop to the checkUser but as it does not use it the error will not be there or their will just be a prompt
});
</script>

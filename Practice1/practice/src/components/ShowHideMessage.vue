<template>
    <button @click="togglefunc()">Toggle Message</button>
    <p :class="{ Hide: isHidden }">{{ message }}</p>
</template>
<script setup>
import { ref } from "vue";

const message = ref("Hello this is a message");
const isHidden = ref(false);
function togglefunc() {
    isHidden.value = !isHidden.value;
}
</script>
<style scoped>
.Hide {
    display: none !important;
}
</style>

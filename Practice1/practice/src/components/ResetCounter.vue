<template>
    <button @click="increaseCounter()">Increase</button>
    <button @click="resetCounter()">Reset</button>
    <p>{{ counter }}</p>
</template>
<script setup>
import { ref } from "vue";
const counter = ref(0);
function increaseCounter() {
    counter.value += 1;
}
function resetCounter() {
    counter.value = 0;
}
</script>

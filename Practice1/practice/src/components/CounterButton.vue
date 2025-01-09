<template>
    <button @click="updateCounter()">Update Counter</button>
    <p>{{ count }}</p>
</template>
<script setup>
import { ref } from "vue";

const count = ref(0);

function updateCounter() {
    count.value += 1;
}
</script>

<template>
    <form>
        <input v-model="name" />
    </form>
    <p v-if="name !== ''">{{ message }}</p>
</template>
<script setup>
import { ref } from "vue";

const name = ref("");
const message = "Hello User";
</script>

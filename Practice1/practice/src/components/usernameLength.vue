<template>
    <form>
        <input v-model="username" />
    </form>
    <p>{{ usernameLength }}</p>
</template>
<script setup>
import { computed, ref } from "vue";

const username = ref("");
const usernameLength = computed(() => {
    console.log(usernameLength.value);
    return username.value.length;
});
</script>

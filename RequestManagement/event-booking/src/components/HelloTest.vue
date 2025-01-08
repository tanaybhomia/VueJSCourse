<template>
    <div>
        <h1 class="text-lg bg-blue-300">Hello {{ name }}</h1>
    </div>
    <button class="flex justify-end p-4" @click="$emit('sayHello', name)">Say Hello</button>
</template>

<script setup>
defineProps({
    name: String,
})

defineEmits(['sayHello'])
</script>

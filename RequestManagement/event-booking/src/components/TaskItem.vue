<template>
    <div class="border border-gray-300 shadow-sm bg-white rounded-lg p-6 flex flex-col items-start">
        <slot name="title">Description of the task</slot>
        <slot name="completed"></slot>
    </div>
</template>

<script setup>
defineProps({
    title: String,
    completed: Boolean,
})
</script>

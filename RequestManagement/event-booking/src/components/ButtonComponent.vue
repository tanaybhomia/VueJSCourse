<template>
    <button
        :class="[
            'px-4 py-2 font-medium rounded-md transition mx-8',
            variant === 'primary'
                ? 'bg-blue-500 hover:bg-blue-600 text-white'
                : variant === 'secondary'
                  ? 'bg-gray-500 hover:bg-gray-600 text-white'
                  : 'bg-red-500 hover:bg-red-600 text-white',
        ]"
        v-bind="$attrs"
    >
        <slot />
    </button>
</template>

<script setup>
defineProps({
    variant: {
        type: String,
        default: 'primary', // Default to the primary button style
    },
})
</script>

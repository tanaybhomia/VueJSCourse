<template>
    <div
        class="bg-gray-100 border border-gray-200 rounded-lg p-4 flex flex-col gap-4 items-center shadow-sm"
    >
        <p class="text-lg font-semibold text-gray-700">Counter Controls</p>
        <div class="flex gap-2">
            <button
                @click="$emit('increment')"
                class="px-4 py-2 bg-blue-500 text-white font-medium rounded-lg shadow hover:bg-blue-600 transition"
            >
                Increment: {{ Inccount }}
            </button>
            <button
                @click="$emit('decrement')"
                class="px-4 py-2 bg-red-500 text-white font-medium rounded-lg shadow hover:bg-red-600 transition"
            >
                Decrement: {{ Deccount }}
            </button>
        </div>
    </div>
</template>

<script setup>
defineProps({
    Inccount: Number,
    Deccount: Number,
})
defineEmits(['increment', 'decrement'])
</script>

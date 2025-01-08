<template>
    <div class="flex justify-between items-center border p-4 rounded-md bg-white shadow-sm">
        <!-- Booking Details -->
        <div class="flex gap-4">
            <div class="text-gray-700 font-medium">
                <slot name="eventname"></slot>
            </div>
            <div class="text-gray-700 font-medium">
                <component :is="icon" :class="{ 'animate-spin': pending }" />
            </div>
        </div>
        <!-- Cancel Button -->
        <button
            :class="[
                'text-sm font-medium px-3 py-1 rounded-md',
                variants[variant] ?? variants.default,
            ]"
            @click="$emit('cancel')"
        >
            Cancel
        </button>
    </div>
</template>

<script setup>
import { LoaderCircle, Check } from 'lucide-vue-next'
import { computed } from 'vue'

const variants = {
    default: 'border border-gray-200 bg-gray-100 text-gray-700 hover:bg-gray-200',
    danger: 'border border-red-200 bg-red-100 text-red-700 hover:bg-red-200',
}

const props = defineProps({
    status: {
        type: String,
        required: true,
    },
    variant: {
        type: String,
        default: 'default',
    },
})
const pending = computed(() => props.status === 'pending')
const icon = computed(() => (pending.value ? LoaderCircle : Check))
defineEmits(['cancel'])
</script>

<style scoped>
/* Add any additional styling here if needed */
</style>

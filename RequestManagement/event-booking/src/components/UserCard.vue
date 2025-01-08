<template>
    <div
        class="border border-gray-300 shadow-sm bg-white rounded-lg p-6 flex flex-col gap-3 items-start"
    >
        <!-- User Avatar (Optional) -->
        <div
            class="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 text-lg font-bold"
        >
            <slot name="avatar">U</slot>
        </div>

        <!-- User Details -->
        <div class="text-left">
            <h3 class="text-2xl font-semibold text-gray-800">
                <slot name="username">Default Username</slot>
            </h3>
            <p class="text-sm text-gray-600">
                <slot name="email">Default Email</slot>
            </p>
        </div>

        <!-- Action Buttons -->
        <div class="flex flex-row gap-2 mt-4">
            <slot name="actions">
                <button
                    :class="[
                        'px-4 py-2 bg-blue-500 text-white rounded-lg text-sm shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300',
                        variants[variant] ?? variants.default,
                    ]"
                >
                    Default Action
                </button>
            </slot>
        </div>
    </div>
</template>

<script setup>
const variants = {
    default: 'border broder-gray-200 hover:bg-gray-100',
    danger: 'border border-gray-200 hover:bg-red-200 text-red-900',
}
defineProps({
    variant: {
        type: String,
        default: 'default',
    },
})
</script>

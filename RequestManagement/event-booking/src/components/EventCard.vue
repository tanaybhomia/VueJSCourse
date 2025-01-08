<template>
    <div class="border border-gray-200 bg-white rounded-md">
        <!-- Title slot with fallback -->
        <h3 class="p-4 font-medium text-xl border-b border-gray-200">
            <slot name="title"></slot>
        </h3>

        <!-- When slot with fallback -->
        <p class="p-4 border-gray-200 border-b">
            <slot name="when"></slot>
        </p>

        <!-- Description slot with fallback -->
        <p class="p-4 border-gray-200 border-b">
            <slot name="description"></slot>
        </p>

        <!-- Actions slot with fallback -->
        <section class="flex justify-end p-4">
            <slot name="actions">
                <button
                    class="text-sm font-medium border-2 border-gray-200 rounded-full px-3 py-1 hover:bg-gray-100"
                    @click="$emit('register')"
                ></button>
            </slot>
        </section>
    </div>
</template>

<script setup>
defineProps({
    title: String,
    when: String,
    description: String,
})
defineEmits(['register'])
</script>

<template>
    <div class="border border-gray-200 rounded-md animate-pulse">
        <!-- Title slot with fallback -->
        <h3 class="p-4 border-b border-gray-200 h-6 bg-gray-300">
            <slot name="title"></slot>
        </h3>

        <!-- When slot with fallback -->
        <p class="p-4 border-b border-gray-200 h-6 bg-gray-300">
            <slot name="when"></slot>
        </p>

        <!-- Description slot with fallback -->
        <p class="p-4 border-b border-gray-200 h-6 bg-gray-300">
            <slot name="description"></slot>
        </p>

        <div class="flex justify-end p-4">
            <div class="h-8 w-24 bg-gray-300 rounded-full"></div>
        </div>
    </div>
</template>

<script setup></script>

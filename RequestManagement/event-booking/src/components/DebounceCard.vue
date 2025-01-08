<template>
    <div>
        <input v-model="inputValue" type="text" placeholder="Type here..." />
        <p>Debounced Value: {{ debouncedValue }}</p>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import useDebounce from '/src/composables/useDebounce'

const { value: inputValue, debouncedValue } = useDebounce('', 2000)
</script>

import { ref, watch } from 'vue'
export default function useDebounce(initialValue, delay) {
    const value = ref(initialValue)
    const debouncedValue = ref(initialValue)
    let timeout

    watch(value, (newValue) => {
        clearTimeout(timeout) // Clear the previous timeout after every time their is change in the input
        timeout = setTimeout(() => {
            debouncedValue.value = newValue // and then sets the pours that changed value after delay
        }, delay)
    })

    return { value, debouncedValue }
}

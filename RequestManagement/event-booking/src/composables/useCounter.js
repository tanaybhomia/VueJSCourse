import { ref } from 'vue'

let count = ref(0)
const increment = () => {
    count.value += 1
    console.log(count.value)
    return count.value
}
const decrement = () => {
    count.value -= 1
    console.log(count.value)
    return count.value
}

export default function useCounter() {
    return { count, increment, decrement }
}

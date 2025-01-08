<template>
    <section class="grid grid-cols-2 gap-4">
        <template v-if="!loading">
            <EventCard v-for="event in events" :key="event.id" @register="$emit('register', event)">
                <!-- Named Slots -->
                <template #title>{{ event.title }}</template>
                <template #when>{{ event.date }}</template>
                <template #description>{{ event.description }}</template>
                <template #actions>
                    <button
                        class="text-sm font-medium border-2 border-gray-200 bg-blue-500 text-white px-3 py-1 rounded-md"
                        @click="$emit('register', event)"
                    >
                        Register Now
                    </button>
                </template>
            </EventCard>
        </template>
        <template v-else> <LoadingEventCard v-for="i in 4" :key="i"></LoadingEventCard></template>
    </section>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import EventCard from './EventCard.vue'
import LoadingEventCard from './LoadingEventCard.vue'

defineEmits(['register'])

const events = ref([])
const loading = ref(false)

const fetchEvents = async () => {
    loading.value = true
    try {
        const response = await fetch('http://localhost:3001/events')
        events.value = await response.json()
    } finally {
        loading.value = false
    }
}
onMounted(() => fetchEvents())
</script>

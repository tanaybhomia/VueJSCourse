<template>
    <main class="container mx-auto my-8 space-y-8">
        <h1 class="text-4xl">Event Booking App</h1>

        <!-- All Events -->
        <h2 class="text-2xl font-medium">All events</h2>
        <EventList @register="handleRegisteration($event)" />

        <!-- Your Bookings -->
        <h2 class="text-2xl font-medium">Your Bookings</h2>
        <section class="grid grid-cols-1 gap-4">
            <template v-if="!bookingsLoading">
                <BookingCard
                    v-for="booking in bookings"
                    :key="booking.id"
                    :eventname="booking.eventTitle"
                    :status="booking.status"
                    :variant="'danger'"
                    @cancel="cancelBooking(booking.id)"
                >
                    <template #eventname>{{ booking.eventTitle }}</template>
                    <template #status>{{ booking.status }}</template>
                </BookingCard>
            </template>
            <template v-else> Loading Bookings... </template>
        </section>
        <section class="flex flex-rows-1 gap-4">
            <button class="border-2 rounded-xl bg-red-200 p-2" @click="increment">Increment</button>
            <button class="border-2 rounded-xl bg-red-200 p-2" @click="decrement">Decrement</button>
            <p>{{ count }}</p>
        </section>
        <h1>Form Section</h1>
        <section class="flex flex-col items-center p-4">
            <form
                class="w-full max-w-sm space-y-4 p-6 bg-white shadow-lg rounded-lg"
                @submit.prevent="sendData()"
            >
                <div>
                    <label for="username" class="block text-sm font-medium text-gray-700"
                        >Username</label
                    >
                    <input
                        v-model="username"
                        id="username"
                        type="text"
                        placeholder="Enter your username"
                        class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div>
                    <label for="password" class="block text-sm font-medium text-gray-700"
                        >Password</label
                    >
                    <input
                        v-model="password"
                        id="password"
                        type="password"
                        placeholder="Enter your password"
                        class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div class="flex justify-center">
                    <button
                        type="submit"
                        class="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </section>
        <DebounceCard></DebounceCard>
    </main>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import BookingCard from './components/BookingsCard.vue'
import EventList from './components/EventList.vue'
import useBookings from './composables/useBookings'
import useCounter from './composables/useCounter'
import useForm from './composables/useForm'
import DebounceCard from './components/DebounceCard.vue'

const { bookings, bookingsLoading, fetchBookings, handleRegisteration } = useBookings()
const { count, increment, decrement } = useCounter()
const { sendData, username, password } = useForm()

// responsible for finding the id of the booking done
const findBookingsById = (id) => bookings.value.findIndex((b) => b.id === id)

// removes the booking immediatly and then syncs with the db
const cancelBooking = async (bookingId) => {
    const index = findBookingsById(bookingId)
    const originalBooking = bookings.value[index]
    bookings.value.splice(index, 1)

    try {
        const response = await fetch(`http://localhost:3001/bookings/${bookingId}`, {
            method: 'DELETE',
        })
        if (!response.ok) {
            throw new Error('Booking could not be cancelled')
        }
    } catch (e) {
        console.error(e)
        bookings.value.splice(index, 0, originalBooking)
    }
}

onMounted(() => fetchBookings())
</script>

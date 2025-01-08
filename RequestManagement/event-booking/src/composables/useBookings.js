import { ref } from 'vue'

// global components
const bookings = ref([])
const bookingsLoading = ref(false)
const fetchBookings = async () => {
    bookingsLoading.value = true
    try {
        const response = await fetch('http://localhost:3001/bookings')
        bookings.value = await response.json()
        console.log(bookings.value)
    } finally {
        bookingsLoading.value = false
    }
}
const handleRegisteration = async (event) => {
    console.log(bookings)
    if (bookings.value.some((booking) => booking.eventId === event.id && booking.userId === 1)) {
        alert('Booking already present')
        return
    }
    const newBooking = {
        id: Date.now().toString(), // Ensure this generates a unique ID
        userId: 1,
        eventId: event.id,
        eventTitle: event.title,
        status: 'pending',
    }

    bookings.value.push(newBooking)
    // when this is pushed the status is pending as this is directly pushed to the local bookings array

    try {
        const response = await fetch('http://localhost:3001/bookings', {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({ ...newBooking, status: 'confirmed' }),
        })

        if (response.ok) {
            const index = bookings.value.findIndex((b) => b.id === newBooking.id)
            // locates the newly added booking from the local variable using the bookingid
            bookings.value[index] = await response.json()
            // changes the booking.value with that index with the correct POST with status confirmed from the server but still updates the local ref variable
        } else {
            console.error('Failed to register booking')
        }
    } catch (error) {
        console.error('Error registering booking:', error)
        bookings.value = bookings.value.filter((b) => b.id !== newBooking.id)
    }
}

export default function useBookings() {
    return { bookings, bookingsLoading, fetchBookings, handleRegisteration }
}

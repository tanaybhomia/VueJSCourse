import { ref } from 'vue'
const username = ref('')
const password = ref('')

const sendData = async () => {
    const newUser = {
        username: username.value,
        password: password.value,
        status: 'offline',
    }
    try {
        const response = await fetch('http://localhost:3001/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newUser),
        })
        if (response.ok) {
            console.log('New User Submitted', newUser)
        } else {
            console.log('An error occured')
        }
    } catch (error) {
        console.error('Their is an error', error)
    }
    username.value = null
    password.value = null
}
export default function useForm() {
    return { sendData, username, password }
}

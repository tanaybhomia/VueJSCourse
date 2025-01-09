<template>
    <div class="form-container">
        <h2 class="form-title">Login</h2>
        <form class="login-form">
            <div class="input-container">
                <label for="username">Username</label>
                <input
                    id="username"
                    v-model="username"
                    type="text"
                    placeholder="Enter your username"
                />
            </div>

            <div class="input-container">
                <label for="password">Password</label>
                <input
                    id="password"
                    v-model="password"
                    type="password"
                    placeholder="Enter your password"
                />
            </div>

            <button @click="handleSubmit" class="submit-btn" type="button">
                Login
            </button>
        </form>
    </div>
</template>

<script setup>
import { ref } from "vue";

const username = ref("");
const password = ref("");
const checkUsername = "Tanay";
const checkPassword = "cacdam123";

// A simple method to handle form submission (you can replace it with your actual logic)
function handleSubmit() {
    if (username.value === checkUsername && password.value === checkPassword) {
        alert("Login successful");
    } else {
        alert("Invalid credentials");
    }
}
</script>

<style scoped>
/* Container for the whole form */
.form-container {
    width: 100%;
    max-width: 400px;
    margin: 50px auto;
    padding: 20px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    text-align: center;
}

/* Form Title */
.form-title {
    font-size: 24px;
    margin-bottom: 20px;
    font-weight: bold;
    color: #333;
}

/* Style for the form inputs */
.login-form {
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.input-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

input {
    width: 100%;
    padding: 10px;
    margin-top: 5px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 14px;
    outline: none;
    transition: border-color 0.3s ease;
}

input:focus {
    border-color: #007bff;
}

/* Button styling */
.submit-btn {
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    font-size: 16px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.submit-btn:hover {
    background-color: #0056b3;
}

/* Responsive Design */
@media (max-width: 500px) {
    .form-container {
        padding: 15px;
        max-width: 90%;
    }

    .submit-btn {
        font-size: 14px;
    }
}
</style>

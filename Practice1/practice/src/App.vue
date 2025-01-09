<script setup>
import CounterButton from "./components/CounterButton.vue";
import ResetCounter from "./components/ResetCounter.vue";
import ShowHideMessage from "./components/ShowHideMessage.vue";
import UserEnterGreeting from "./components/UserEnterGreeting.vue";
import LoginForm from "./components/LoginForm.vue";
import usernameLength from "./components/usernameLength.vue";
</script>

<template>
    <h2>V-on</h2>
    <h3>Level 1</h3>
    <CounterButton />
    <h3>Level 2</h3>
    <ResetCounter />

    <h2>V-if</h2>
    <h3>Level 1</h3>
    <ShowHideMessage />
    <h3>Level 2</h3>
    <UserEnterGreeting />
    <h3>Level 3</h3>
    <LoginForm />

    <h2>Computed</h2>
    <h3>Level 1</h3>
    <usernameLength />
</template>

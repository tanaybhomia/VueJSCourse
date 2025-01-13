<template>
    <p>{{ title }}</p>
    <p>{{ phonenumber }}</p>
</template>
<script setup>
defineProps({
    title: String,
    phonenumber: Number,
});
</script>

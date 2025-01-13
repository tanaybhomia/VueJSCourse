<template>
    <ol>
        <li
            v-for="(item, index) in itemlist"
            :key="index"
            :class="{ selected: selectedItem === index }"
            @click="selectItem(index)"
        >
            {{ item }}
        </li>
    </ol>
</template>
<script setup>
import { ref } from "vue";

const itemlist = ref(["Item1", "Item2", "Item3", "Item4", "Item5"]);
const selectedItem = ref(null);
function selectItem(index) {
    selectedItem.value = index;
}
</script>
<style scoped>
.selected {
    color: purple;
    font-style: underline;
}
</style>

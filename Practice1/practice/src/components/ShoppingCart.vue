<template>
    <div>
        <h1>Shopping Cart</h1>
        <table>
            <thead>
                <tr>
                    <th>Item Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Subtotal</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in cart" :key="index">
                    <td>{{ item.name }}</td>
                    <td>{{ item.price }}</td>
                    <td>
                        <input type="number" v-model="item.quantity" min="0" />
                    </td>
                    <td>{{ item.quantity * item.price }}</td>
                    <td>
                        <button @click="removeItem(index)">Remove</button>
                    </td>
                </tr>
            </tbody>
        </table>
        <p>Price: {{ totalprice }}</p>
    </div>
</template>

<script setup>
import { computed, ref } from "vue";
const cart = ref([
    {
        name: "banana",
        quantity: 0,
        price: 10,
    },
    {
        name: "apple",
        quantity: 0,
        price: 30,
    },
    {
        name: "coconut",
        quantity: 0,
        price: 20,
    },
]);
function removeItem(index) {
    cart.value.splice(index, 1);
}
const totalprice = computed(() => {
    return cart.value.reduce(
        (total, item) => total + item.price * item.quantity,
        0,
    );
});
</script>

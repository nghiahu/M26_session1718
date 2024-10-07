<template>
    <div v-if="product">
        <img :src="product.image" alt="product image" width="200" />
        <h1>{{ product.name }}</h1>
        <p>Price: {{ product.price }} VND</p>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const productId = route.params.id;
const product = ref(null);

onMounted(() => {
    const storedProducts = JSON.parse(localStorage.getItem('products') || '[]');
    product.value = storedProducts.find(p => p.id == productId);
});
</script>

<style scoped>
img {
    display: block;
    margin-bottom: 20px;
}
</style>
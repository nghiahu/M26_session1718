<template>
    <div>
        <input v-model="keySearch" type="text" placeholder="Search for a product" />
        <button @click="handleSearch">Tìm kiếm</button>

        <ul>
            <li v-for="product in filteredProducts" :key="product.id">
                <img :src="product.image" alt="product image" width="100" />
                <h3>{{ product.name }}</h3>
                <p>{{ product.price }} VND</p>
                <router-link :to="`/product-detail/${product.id}`">Xem chi tiết</router-link>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const products = [
    { id: 1, name: 'iPhone', price: '30000000', image: 'https://cdn.ipadizate.com/2023/09/iphone-15-pro.png?width=768&format=nowebp' },
    { id: 2, name: 'Samsung', price: '25000000', image: 'https://th.bing.com/th/id/OIP.v3b6Wn7k7GP7MGVB8xzLPAAAAA?rs=1&pid=ImgDetMain' },
    { id: 3, name: 'Vivo', price: '20000000', image: 'https://th.bing.com/th/id/OIP.-qXWwMXWuHqTWWkSpkqTGQHaHO?rs=1&pid=ImgDetMain' },
];

onMounted(() => {
    if (!localStorage.getItem('products')) {
        localStorage.setItem('products', JSON.stringify(products));
    }
});

const route = useRoute();
const router = useRouter();
const keySearch = ref(route.query.q || '');

const storedProducts = JSON.parse(localStorage.getItem('products') || '[]');

const filteredProducts = computed(() => {
    return storedProducts.filter(product =>
        product.name.toLowerCase().includes(keySearch.value.toLowerCase())
    );
});

const handleSearch = () => {
    router.push({ path: '/list-product', query: { q: keySearch.value } });
};

</script>

<style scoped>
ul {
    list-style: none;
    padding: 0;
}

li {
    margin-bottom: 20px;
}
</style>
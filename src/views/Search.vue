<template>
    <div style="padding: 5px;">
        <input type="text" v-model="inputValue">
        <button @click="searchVal">Search</button>
        <br>
        <h2>Value: {{ valueUrl }}</h2>
    </div>
</template>

<script setup>
import { ref,computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';

    const route =  useRoute();
    const router = useRouter()    
    const inputValue = ref(); 
    const valueUrl = computed(()=>{
        return route.query.nameSearch
    })
    function searchVal(){
        router.push({path:'search',query: {nameSearch:inputValue.value}})
    }
</script>

<style>

</style>
<script setup>
  import {provide, reactive} from 'vue';
  import ShoppingCart from './components/ShoppingCart.vue';
  import products from './static/products';

  const state = reactive({
    shoppingCard: [
      {
        id: 1,
        image: 'https://picsum.photos/200',
        name: 'Mona Lisa',
        description: 'The real Mona Lisa',
        price: 20,
        quantity: 1,
      }
    ],
    products,
  });

  provide('state', state);
</script>

<template>
  <header>
    <p>Logo</p>
    <router-link to="/">Go to Home</router-link>
    <router-link to="/products"> Go to Products</router-link>
    <ShoppingCart />
  </header>
  <router-view></router-view>
</template>

<style scoped>
</style>

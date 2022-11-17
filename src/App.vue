<script setup>
  import {provide, reactive} from 'vue';
  import ShoppingCart from './components/ShoppingCart.vue';
  import products from './static/products';

  const state = reactive({
    shoppingCard: [],
    products,
  });

  provide('state', state);
</script>

<template>
  <header>
    <strong><span>TS</span> TinyStore</strong>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/products">Products</router-link>
    </nav>
    <ShoppingCart />
  </header>
  <router-view></router-view>
  <footer>
    Copyright ©TinyStore
  </footer>
</template>

<style scoped>
</style>

<script setup>
import { inject, computed } from 'vue';

const state = inject('state');

const itemsOnCart = computed(() => {
  return state.shoppingCard.length;
})

function updateQuantity({index, decrease = false} = {}) {
  if (decrease) {
    state.shoppingCard[index].quantity--;
    if (!state.shoppingCard[index].quantity) {
      state.shoppingCard.splice(index, 1);
    }
  } else {
    state.shoppingCard[index].quantity++;
  }
}
</script>

<template>
  <h1>{{ itemsOnCart }}</h1>
  <ul v-if="state.shoppingCard.length">
    <li v-for="(item, index) in state.shoppingCard" :key="index">
      {{ item }}
      <button @click="updateQuantity({index, decrease: true})">-</button>
      {{ item.quantity }}
      <button @click="updateQuantity({index})">+</button>
    </li>
  </ul>
  <p v-else>No items</p>
</template>

<style scoped>
</style>

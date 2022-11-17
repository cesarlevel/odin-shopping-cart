<script setup>
import { inject, computed, ref } from 'vue';
import { useFormatCurrency } from '../composables/format';

const state = inject('state');

const showShoppingCart = ref(false);

const itemsOnCart = computed(() => {
  return state.shoppingCard.length;
})

const totalOnCart = computed(() => {
  return state.shoppingCard.reduce((acc, val) => acc + (val.price * val.quantity), 0);
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
  <button class="shoping-cart-button" :class="{'is-active': showShoppingCart}" @click="showShoppingCart = !showShoppingCart">Your Cart <span>{{ itemsOnCart }}</span></button>
  <Transition>
    <div v-show="showShoppingCart" class="shopping-cart">
      <div v-if="state.shoppingCard.length">
        <ul>
          <li v-for="(product, index) in state.shoppingCard" :key="index">
            <div class="shopping-cart-item-title">
              <p>{{product.name}}</p>
              <small>{{product.description}}</small>
            </div>
            <div class="shopping-cart-item-price">
              <p>{{useFormatCurrency(product.price)}}</p>
            </div>
            <p class="text-muted">x</p>
            <div class="shopping-cart-item-actions">
              <button @click="updateQuantity({index, decrease: true})">-</button>
              <span>
                {{ product.quantity }}
              </span>
              <button @click="updateQuantity({index})">+</button>
            </div>
          </li>
        </ul>
        <h3>Total {{useFormatCurrency(totalOnCart)}}</h3>
        <button>Proceed to checkout</button>
      </div>
      <p v-else>No items in your cart</p>
    </div>
  </Transition>
</template>

<style>
  .v-enter-active,
  .v-leave-active {
    transition: all 0.2s ease;
  }

  .v-enter-from {
    opacity: 0;
    translate: 0 -10px;
  }

  .v-leave-to {
    opacity: 0;
    translate: 0 10px;
  }
</style>

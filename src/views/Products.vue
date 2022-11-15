<template>
    <h1>This is Products</h1>
    <ul>
        <li v-for="(product, index) in state.products" :key="index">
            {{product}}
            <button @click="addToCart(product)">Add to cart</button>
            <br />
            <br />
        </li>
    </ul>
</template>

<script>
    import { inject, computed } from 'vue';
    import ProductModel from '../models/product-model';
    
    export default {
        setup() {
            const state = inject('state');

            function addToCart(product) {
                const inShoppingCartIndex = state.shoppingCard.findIndex(({id}) => product.id === id);

                if (inShoppingCartIndex > -1) {
                    state.shoppingCard[inShoppingCartIndex].quantity++;
                } else {
                    state.shoppingCard.push(new ProductModel(product));
                }
            }

            return {
                state,
                addToCart
            };
        }
    };
</script>
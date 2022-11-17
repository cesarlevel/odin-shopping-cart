<template>
    <h1>Our full catalog.</h1>
    <ul class="product-list">
        <li v-for="(product, index) in state.products" :key="index">
            <figure>
                <img loading="lazy" :src="product.image"/>
            </figure>
            <h2>{{product.name}}</h2>
            <p>{{product.description}}</p>
            <h3>{{useFormatCurrency(product.price)}}</h3>
            <button @click="addToCart(product)">Add to cart</button>
        </li>
    </ul>
</template>

<script>
    import { inject,  } from 'vue';
    import ProductModel from '../models/product-model';
    import { useFormatCurrency } from '../composables/format';

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
                addToCart,
                useFormatCurrency,
            };
        }
    };
</script>
import Home from '../views/Home.vue';
import Products from '../views/Products.vue' ;

export default [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/products',
        name: 'Products',
        component: Products,
    },
];

import ProductModel from '../models/product-model';

const products = [
    {
        name: 'Interesting Concept',
        description: 'A really interesting concept',
        price: 20,
        quantity: 1,
    },
    {
        name: 'Interesting Concept',
        description: 'A really interesting concept',
        price: 20,
        quantity: 1,
    },
    {
        name: 'Interesting Concept',
        description: 'A really interesting concept',
        price: 20,
        quantity: 1,
    },
    {
        name: 'Interesting Concept',
        description: 'A really interesting concept',
        price: 20,
        quantity: 1,
    },
    {
        name: 'Interesting Concept',
        description: 'A really interesting concept',
        price: 20,
        quantity: 1,
    },
    {
        name: 'Interesting Concept',
        description: 'A really interesting concept',
        price: 20,
        quantity: 1,
    },
];

export default products.map((product, index) => new ProductModel({
    id: index + 1,
    ...product
}));
import ProductModel from '../models/product-model';

const products = [
    {
        name: 'Interesting Concepts Vol. 1',
        description: 'A really interesting series of concepts',
        price: 15,
        quantity: 1,
    },
    {
        name: 'Interesting Concepts Vol. 2',
        description: 'A really interesting series of concepts',
        price: 12,
        quantity: 1,
    },
    {
        name: 'Interesting Concepts Vol. 3',
        description: 'A really interesting series of concepts',
        price: 20,
        quantity: 1,
    },
    {
        name: 'Interesting Concepts Vol. 4',
        description: 'A really interesting series of concepts',
        price: 18,
        quantity: 1,
    },
    {
        name: 'Interesting Concepts Vol. 5',
        description: 'A really interesting series of concepts',
        price: 14,
        quantity: 1,
    },
    {
        name: 'Interesting Concepts Vol. 6',
        description: 'A really interesting series of concepts',
        price: 26,
        quantity: 1,
    },
];

export default products.map((product, index) => new ProductModel({
    id: index + 1,
    ...product
}));
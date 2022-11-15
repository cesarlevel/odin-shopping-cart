export default class Product {
    constructor({
        id,
        image = 'https://picsum.photos/400',
        name,
        description,
        price,
        quantity
    } = {}) {
        this.id = id;
        this.image = image;
        this.name = name;
        this.description = description;
        this.price = price;
        this.quantity = quantity;
    }
};

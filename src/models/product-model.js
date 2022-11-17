let t = 1;
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
        t++;
        this.image = image.replace(/\d+/g, m => +m + t);
        this.name = name;
        this.description = description;
        this.price = price;
        this.quantity = quantity;
    }
};

import { products } from "./products.js";

const container = document.createElement('div');
container.classList.add('container');
document.body.appendChild(container);

const cart = document.createElement('div');
cart.classList.add('cart');
container.appendChild(cart);

const productList = document.createElement('div');
productList.classList.add('productList');
productList.textContent = 'Product List';
container.appendChild(productList);




const elements = {
    container,
    cart,
    productList
}

export default elements;
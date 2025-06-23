import elements from './ui.js';
import { products } from './products.js';
import {cart, addToCart, removeFromCart, renderCart } from './cart.js'; 

const renderProducts = () => {
    elements.productList.innerHTML = '';

    products.forEach(product => {
        const item = document.createElement('div');
        item.classList.add('product');

        const name = document.createElement('span');
        name.classList.add('product-name');
        name.textContent = product.name;

        const price = document.createElement('span');
        price.classList.add('product-price');
        price.textContent = '$' + product.price.toFixed(2);

        const button = document.createElement('button');
        button.textContent = 'Add to Cart';
        button.addEventListener('click', () => {
            addToCart(product)
        })

        item.appendChild(name);
        item.appendChild(price);
        item.appendChild(button);
        elements.productList.appendChild(item)
    })
}

renderProducts();
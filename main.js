import elements from './ui.js';
import { products } from './products.js';
import {cart, addToCart, removeFromCart, renderCart } from './cart.js'; 

const renderProducts = () => {
    elements.productList.innerHTML = '';

    products.forEach(product => {
        const item = document.createElement('div');
        item.classList.add('product');

        const name = document.createElement('p');
        name.textContent = product.name;

        const button = document.createElement('button');
        button.textContent = 'Add to Cart';
        button.addEventListener('click', () => {
            addToCart(product)
        })

        item.appendChild(name);
        item.appendChild(button);
        elements.productList.appendChild(item)
    })
}

renderProducts();
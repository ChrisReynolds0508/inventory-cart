import elements from "./ui.js";
import { products } from "./products.js";

export const cart = {};

export const addToCart = (product) => {
const id = product.id;
 
if(cart[id]){
    cart[id].quantity += 1;
}else {
    cart[id] = {
        name : product.name,
        quantity :1
    };
};
renderCart();
};

export const removeFromCart = (item) => {
    if(cart[item]){
        cart[item].quantity -= 1
        if(cart[item].quantity <= 0){
            delete cart[item];
        }
    }
    renderCart();
}

export const renderCart = () => {
    elements.cart.innerHTML = '';
    for(const id in cart){
        const item = cart[id];
        const cartText = document.createElement('p');
        cartText.textContent = `${item.name}: ${item.quantity}`;
        elements.cart.appendChild(cartText);
    }
}

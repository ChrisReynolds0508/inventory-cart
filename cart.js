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

        const cartItem = document.createElement('div');
    cartItem.style.display = 'flex';
    cartItem.style.alignItems = 'center';
    cartItem.style.gap = '8px';

        const cartText = document.createElement('p');
        cartText.textContent = `${item.name}: ${item.quantity}`;
        cartItem.appendChild(cartText);

        const removeButton = document.createElement('button');
   removeButton.textContent = item.quantity > 1 ? '-':'Remove from Cart';

   removeButton.addEventListener('click', () => {
removeFromCart(id);
   })
   cartItem.appendChild(removeButton);
   elements.cart.appendChild(cartItem)
    }
}

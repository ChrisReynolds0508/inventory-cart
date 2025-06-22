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
        cartItem.classList.add('cart-item');

        const cartText = document.createElement('p');
        cartText.textContent = `${item.name}:`;
        cartItem.appendChild(cartText);

        const removeButton = document.createElement('button');
        removeButton.textContent = item.quantity > 1 ? '-':'Remove';
        removeButton.addEventListener('click', () => {
        removeFromCart(id);
   })
        cartItem.appendChild(removeButton);

        const quantityDisplay = document.createElement('span');
        quantityDisplay.classList.add('quantity');
        quantityDisplay.textContent = item.quantity;
        cartItem.appendChild(quantityDisplay);


     const addButton = document.createElement('button');
    addButton.textContent = '+'
    addButton.addEventListener('click' , () => {
        const product = products.find(p => p.id == id);
        if(product) addToCart(product)
    })
    cartItem.appendChild(addButton);
    elements.cart.appendChild(cartItem);
    }

  
}

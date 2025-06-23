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
        price: product.price,
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

        const itemPrice = document.createElement('span');
        itemPrice.classList.add('itemPrice');
        itemPrice.textContent = `$${(item.quantity * item.price).toFixed(2)}`;
        cartItem.appendChild(itemPrice)

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
  let total = 0;

    for (const id in cart) {
    const item = cart[id];
    total += item.price * item.quantity;
}
        const totalPrice = document.createElement('div');
        totalPrice.classList.add('totalPrice');
        totalPrice.textContent = `Total: $${total.toFixed(2)}`
        elements.cart.appendChild(totalPrice)
  
    const clearCartButton = document.createElement('button');
    clearCartButton.textContent = 'Clear Cart';
    clearCartButton.addEventListener('click', () => {
        Object.keys(cart).forEach(key => delete cart[key])
        renderCart();
    })
    elements.cart.appendChild(clearCartButton)

    let itemTotal = 0;
    for(const id in cart){
        const item = cart[id]
        itemTotal += item.quantity
    }
    const itemCount = document.createElement('div');
    itemCount.textContent = `Items in Cart: ${itemTotal}`
    elements.cart.appendChild(itemCount)
}

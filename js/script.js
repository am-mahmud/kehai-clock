function getElement(id) {
    return document.getElementById(id);
}

let cart = [];

// Card container listener
getElement('card-container').addEventListener('click', function(e) {
    if (e.target.classList.contains('order-btn')) {
        const orderButton = e.target;
        const productImg = orderButton.parentNode.children[0].src;
        const productTitle = orderButton.parentNode.children[1].children[0].innerText;
        const productPrice = orderButton.parentNode.children[1].children[1].innerText;
      
        // Check if the item already exists in the cart
        let quantity = 1;
        let foundItem = false;
        

        for (let i = 0; i < cart.length; i++) {
            if (cart[i].title === productTitle) {
                cart[i].quantity++;
                foundItem = true;
                break;
            }
        }

        if (!foundItem) {
            cart.push({
                title: productTitle,
                price: Number(productPrice),
                quantity: 1,
                img: productImg
            });
        }
        
        // Re-render the cart and update the total price
        fullCart();
        updateTotalPrice();
    }
});

function fullCart() {
    const cartContainer = getElement('cart');
    cartContainer.innerHTML = ''; 

    
    for (let i = 0; i < cart.length; i++) {
      
        const item = cart[i]; 
    
        const newCartItem = document.createElement("div");

        newCartItem.classList.add("grid", "grid-col-1", "grid-cols-2", "items-center", "text-center");
        newCartItem.innerHTML = `
            <div class="flex flex-col md:flex-row gap-1 md:gap-3 items-center justify-center">
                <img class="h-20 w-20 object-contain" src="${item.img}" alt="${item.title}">
                <div class="text-center md:text-left">
                    <h1 class="font-medium text-sm mb-2 md:mb-0 md:text-base">${item.title}</h1>
                    <p class="text-sm md:text-base">$${item.price}</p>
                </div>
            </div>
            <div class="flex flex-col md:flex-row items-center justify-center gap-5 md:gap-2">
                <span id="quantity" class="px-3">${item.quantity}</span>
            </div>
        `;
      
        cartContainer.appendChild(newCartItem);
    }
}

function updateTotalPrice() {
    let totalPrice = 0;
    for (let i = 0; i < cart.length; i++) {
        const item = cart[i];
      
        totalPrice += item.price * item.quantity;
    }

    getElement('total-price').children[0].innerText = totalPrice.toFixed(2);
}
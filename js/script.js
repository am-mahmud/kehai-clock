function getElement(id) {
  return document.getElementById(id);
}

let i = 0;

// Card container listener
getElement('card-container').addEventListener('click', function(e) {
    if (e.target.classList.contains('order-btn')) {
        console.log('Order button clicked');
        i++;

        const orderButton = e.target;

        const productImg = orderButton.parentNode.children[0].src;
        const productTitle = orderButton.parentNode.children[1].children[0].innerText;
        const productPrice = orderButton.parentNode.children[1].children[1].innerText.replace('$','');
        const totalQuantity = i; // default 1, you can modify later

        const currentTotal = Number(productPrice) * Number(i);

        // Create new cart item
        const cartContainer = getElement('shop-container');
        const newCart = document.createElement("div");

        newCart.classList.add("grid", "grid-col-1", "grid-cols-3", "items-center", "text-center", "mb-3");
        newCart.innerHTML = `
            <!-- Cart - child 1-->
            <div class="flex flex-col md:flex-row gap-1 md:gap-3 items-center justify-center">
                <img class="h-20 w-20 object-contain" src="${productImg}" alt="${productTitle}">
                <div class="text-center md:text-left">
                    <h1 class="font-medium text-sm mb-2 md:mb-0 md:text-base">${productTitle}</h1>
                    <p class="text-sm md:text-base">$${productPrice}</p>
                </div>
            </div>

            <!-- Cart - child - 2 -->
            <div class="flex flex-col md:flex-row items-center justify-center gap-5 md:gap-2">
                <span class="px-3 quantity">${totalQuantity}</span>
            </div>

            <!-- Cart - child - 3-->
            <div>
                <h1>$ <span class="total-price">${currentTotal}</span></h1>
            </div>
        `;

        // Append new cart to container
        cartContainer.append(newCart);
    }
});
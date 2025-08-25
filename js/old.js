// Reusable element ID

function getElement(id) {
  const element = document.getElementById(id);
  return element;
}

// Card container
getElement('card-container').addEventListener('click', function(e){
    if(e.target.className.includes('order-btn')){

        console.log('Order button clicked')

        const orderButton = e.target;

        const productImg = orderButton.parentNode.children[0].src;
        const productTitle = orderButton.parentNode.children[1].children[0].innerText;
        const productPrice = orderButton.parentNode.children[1].children[1].innerText;


        // const totalQuantity = getElement("quantity").innerText;
       
        const totalQuantity = 10;
        console.log(totalQuantity);
        

        // const currentTotal = Number(productPrice) * Number(10);
        // getElement("total-price").innerText = currentTotal;

        // console.log(currentTotal)

        const cartContainer = getElement('shop-container');

        const newCart = document.createElement("div");
        newCart.innerHTML = `
         <div id="cart"  class="grid grid-col-1 grid-cols-3 items-center text-center">
                <!-- Cart - child 1-->
                <div class="flex flex-col md:flex-row gap-1 md:gap-3 items-center justify-center">
                    <img class="h-20 w-20 object-contain" src="${productImg}" alt="Kehai Clock">
                    <div class="text-center md:text-left">
                        <h1 class="font-medium text-sm mb-2 md:mb-0 md:text-base">${productTitle}</h1>
                        <p class="text-sm md:text-base">$130</p>
                    </div>
                </div>

                <!-- Cart - child - 2 -->
                <div class="flex flex-col md:flex-row items-center justify-center gap-5 md:gap-2">
                    <span id="quantity" class="px-3">${totalQuantity}</span>
                </div>

                <!-- Cart - child - 3-->
                <div>
                   <h1>$ <span id="total-price">${currentTotal}</span></h1>
                </div>
            </div>

        `;

        cartContainer.append(newCart);
    }
})



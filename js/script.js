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
        
        console.log('Image found')

        const productTitle = orderButton.parentNode.children[1].children[0].innerText;

        console.log(productTitle)

        const productPrice = orderButton.parentNode.children[1].children[1].innerText;

        console.log(productPrice)
    }
})


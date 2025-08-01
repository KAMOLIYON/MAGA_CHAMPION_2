// Show and hide cart
let cartIcon = document.querySelector("#cart-icon");
let cart = document.querySelector(".cart");
let closeCart = document.querySelector("#close-cart");

cartIcon.onclick = () => {
    cart.classList.add("active");
};

closeCart.onclick = () => {
    cart.classList.remove("active");
};

// Wait for the DOM to be ready
if (document.readyState == "loading") {
    document.addEventListener("DOMContentLoaded", ready);
} else {
    ready();
}

function ready() {
    // Remove items from cart
    var removeCartButtons = document.getElementsByClassName("cart-remove");
    for (var i = 0; i < removeCartButtons.length; i++) {
        var button = removeCartButtons[i];
        button.addEventListener("click", removeCartItem);
    }

    // Quantity changes
    var quantityInputs = document.getElementsByClassName("cart-quantity");
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i];
        input.addEventListener("change", quantityChanged);
    }

    // Add to cart
    var addCart = document.getElementsByClassName("add-cart");
    for (var i = 0; i < addCart.length; i++) {
        var button = addCart[i];
        button.addEventListener("click", addCartClicked);
    }

    // Buy button
    document
        .getElementsByClassName("btn-buy")[0]
        .addEventListener("click", buyButtonClicked);
}

// Buy button function
function buyButtonClicked() {
    alert("Your Order is placed");
    var cartContent = document.getElementsByClassName("cart-content")[0];
    while (cartContent.hasChildNodes()) {
        cartContent.removeChild(cartContent.firstChild);
    }
    updateTotal();
}

// Remove item
function removeCartItem(event) {
    var buttonClicked = event.target;
    buttonClicked.closest(".cart-box").remove();
    updateTotal();
}

// Quantity change
function quantityChanged(event) {
    var input = event.target;
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1;
    }
    updateTotal();
}

// Add to cart
function addCartClicked(event) {
    var button = event.target;
    var shopProduct = button.parentElement;
    var title = shopProduct.getElementsByClassName("product-title")[0].innerText;
    var price = shopProduct.getElementsByClassName("price")[0].innerText;
    var productImg = shopProduct.getElementsByClassName("product-img")[0].src;
    addProductToCart(title, price, productImg);
    updateTotal();
}

// Add product
function addProductToCart(title, price, productImg) {
    var cartItems = document.getElementsByClassName("cart-content")[0];
    var cartItemNames = cartItems.getElementsByClassName("cart-product-title");
    for (var i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText === title) {
            alert("You have already added this item to the cart");
            return;
        }
    }

    var cartShopBox = document.createElement("div");
    cartShopBox.classList.add("cart-box");

    var cartBoxContent = `
        <img src="${productImg}" alt="" class="cart-img">
        <div class="detail-box">
            <div class="cart-product-title">${title}</div>
            <div class="cart-price">${price}</div>
            <input type="number" value="1" class="cart-quantity">
        </div>
        <div>
            <i class="bx bxs-trash-alt cart-remove"></i>
        </div>
    `;
    cartShopBox.innerHTML = cartBoxContent;
    cartItems.append(cartShopBox);

    // Add event listeners again for the new item
    cartShopBox
        .getElementsByClassName("cart-remove")[0]
        .addEventListener("click", removeCartItem);
    cartShopBox
        .getElementsByClassName("cart-quantity")[0]
        .addEventListener("change", quantityChanged);
}

// Update total
function updateTotal() {
    var cartContent = document.getElementsByClassName("cart-content")[0];
    var cartBoxes = cartContent.getElementsByClassName("cart-box");
    var total = 0;
    for (var i = 0; i < cartBoxes.length; i++) {
        var cartBox = cartBoxes[i];
        var priceElement = cartBox.getElementsByClassName("cart-price")[0];
        var quantityElement = cartBox.getElementsByClassName("cart-quantity")[0];
        var price = parseFloat(priceElement.innerText.replace("$", ""));
        var quantity = quantityElement.value;
        total += price * quantity;
    }

    total = Math.round(total * 100) / 100;
    document.getElementsByClassName("total-price")[0].innerText = "$" + total;
}


























// Optional: Handle Quick View (future feature)
const quickViewButtons = document.querySelectorAll('.featured-btn');
quickViewButtons.forEach(button => {
    button.addEventListener('click', () => {
        alert("Quick View feature coming soon! 😉");
    });
});































// let cartIcon = document.querySelector("#cart-icon");
// let cart = document.querySelector(".cart");
// let closeCart = document.querySelector("#close-cart");

// cartIcon.onclick = () => {
//     cart.classList.add("active");
// };

// closeCart.onclick = () => {
//     cart.classList.remove("active");
// };




// if (document.readyState == "loading") {
//     document.addEventListener("DOMContentLoaded", ready);
// } else {
//     ready();
// }

// function ready() {
//     var reomveCartButtons = document.getElementsByClassName('cart-remove');
//     console.log(reomveCartButtons);
//     for (var i = 0; i < reomveCartButtons.length; i++) {
//         var button = reomveCartButtons[1];
//         button.addEventListener('click', removeCartButtons);
//     }

//     var quantityInputs = document.getElementsByClassName('cart-quantity');
//     for (var i = 0; i < quantityInputs.length; i++) {
//         var input = quantityInputs[i];
//         input.addEventListener("change", quantityChanged);
//     }
//     var addCart = document.getElementsByClassName('add-cart');
//     for (var i = 0; i < addCart.length; i++) {
//         var button = addCart[i];
//         button.addEventListener("click", addCartClicked);
//     }

//     document
//         .getElementsByClassName("btn-buy")[0]
//         .addEventListener("click", buyButtonClicked);
// }

// function buyButtonClicked() {
//     alert('Your Order is placed');
//     var cartContent = document.getElementsByClassName('cart-content')[0];
//     while (cartContent.hasChildNodes()) {
//         cartContent.removeChild(cartContent.firstChild);
//     }
//     updatetotal();
// }




// function removeCartItem(event) {
//     var buttonClicked = event.target;
//     buttonClicked.parentElement.remove();
//     updatetotal();
// }

// function quantityChanged(event) {
//     var input = event.target;
//     if (isNaN(input.value) || input.value <= 0) {
//         input.value = 1;
//     }
//     updatetotal();
// }

// function addCartClicked(event) {
//     var button = event.target;
//     var shopProducts = button.parentElement;
//     var title = shopProducts.getElementsByClassName('product-title')[0].innerText;
//     var price = shopProducts.getElementsByClassName('price')[0].innerText;
//     var productImg = shopProducts.getElementsByClassName('product-img')[0].src;
//     addProductToCart(title, price, productImg);
//     updatetotal();
// }

// function addProductToCart(title, price, productImg) {
//     var cartShopBox = document.createElement('div');
//     cartShopBox.classList.add('cart-box');
//     var cartItems = document.getElementsByClassName('cart-content')[0];
//     var cartItemsNames = cartItems.getElementsByClassName('cart-product-title');
//     for (var i = 0; i < cartItemsNames.length; i++) {
//         alert("You have already add this item to the cart");
//         return;
//     }
// }

// var cartBoxContent = `<img src="${productImg}" alt="" class="cart-img">
//                     <div class="detail-box">
//                         <div class="cart-product-title">${title}</div>
//                         <div class="cart-price">${price}</div>
//                         <input type="number" value="1" class="cart-quantity">
//                     </div>
//                     <div>
//                         <i class="bx bxs-trash-alt cart-remove"></i>`;
// cartShopBox.innerHTML = cartBoxContent;
// cartItems.append(cartShopBox);
// cartShopBox
//     .getElementsByClassName('cart-remove')[0]
//     .addEventListener('click', removeCartItem);
// cartShopBox
//     .getElementsByClassName('cart-quantity')[0]
//     .addEventListener('change', quantityChanged);



// function updatetotal() {
//     var cartContent = document.getElementsByClassName('cart-content')[0];
//     var cartBoxes = cartContent.getElementsByTagName('cart-box');
//     var total = 0;
//     for (var i = 0; i < cartBoxes.length; i++) {
//         var cartBox = cartBoxes[i];
//         var priceElement = cartBox.getElementsByClassName('cart-price')[0];
//         var quantityElement = cartBox.getElementsByClassName('cart-quantity')[0];
//         var price = parseFloat(priceElement.innerText.replace("$", ""));
//         var quantity = quantityElement.value;
//         total = total + (price * quantity);
//     }

//     total = Math.round(total * 100) / 100;


//     document.getElementsByClassName('total-price')[0].innerText = '$' + total;

// }
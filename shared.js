// Shared JavaScript file for managing cart

var cartItems = [];
var total = 0;

function addToCart(productName, price) {
    console.log('Adding to cart:', productName, price);

function addToCart(productName, price) {
    cartItems.push({ name: productName, price: price });
    updateCart(); }
}

function updateCart() {
    var cartList = document.getElementById('cart-items');
    var totalElement = document.getElementById('total');

    cartList.innerHTML = '';
    total = 0;

    cartItems.forEach(item => {
        var listItem = document.createElement('li');
        listItem.textContent = item.name + ' - Php ' + item.price;
        cartList.appendChild(listItem);

        total += item.price;
    });

    totalElement.textContent = total;
}

function checkout() {
    // Simulate the checkout process (you can replace this with your actual checkout logic)
    if (cartItems.length === 0) {
        alert('Your cart is empty. Add items before checking out.');
    } else {
        alert('Checkout Successful!\nTotal: Php ' + total);
        cartItems = [];
        updateCart();
    }
}

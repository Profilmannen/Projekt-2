function myFunction(){
    document.getElementById("kategorier").classList.toggle("show");
}

window.addEventListener('click', function(event){
    if (!event.target.matches('.knapp2')){
        var dropdowns = document.getElementsByClassName("ämnen");
        var i;
        for (i = 0; i < dropdowns.length; i++){
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')){
                openDropdown.classList.remove('show');
            }
        }

    }

})


function cartFunction(){
    document.getElementById("cart").classList.toggle("show");
}

window.addEventListener('click', function(event){
    if (!event.target.matches('.knapp1')){
        var dropdowns = document.getElementsByClassName("varukorg");
        var i;
        for (i = 0; i < dropdowns.length; i++){
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')){
                openDropdown.classList.remove('show');
            }
        }

    }

})

var products = [
    { name: 'Fellowship of the ring', price: 100 },
    { name: 'Hunger games', price: 100 },
    { name: 'Harry Potter 1', price: 100 },
    { name: 'Silmarillion', price: 100 },
    { name: 'IT', price: 100 },
    { name: 'The Maze Runner', price: 100 },
];

var cart = [];

function add_to_cart(productName, productPrice){
    var existingProduct = cart.find(item => item.name === productName);

    if (existingProduct){
        existingProduct.quantity += 1;
    } 

    else{
        var product = { name: productName, price: productPrice, quantity: 1 };
        cart.push(product);

    }

    updateCart();
}

function updateCart(){
    var cartItemsList = document.getElementById('cart-items');
    var totalElement = document.getElementById('total');
    var total = 0;

    cartItemsList.innerHTML = '';
    cart.forEach(function (item){
        var listItem = document.createElement('li');
        listItem.textContent = `${item.name} - ${item.quantity} st - ${item.price * item.quantity} kr`;
        cartItemsList.appendChild(listItem);

        total += item.price * item.quantity;
    });

    totalElement.textContent = 'Totalt: ' + total + ' kr';
}

function checkout(){
    alert('Tack för ditt köp! Totalt belopp: ' + calculateTotal() + ' kr');
    cart = [];
    updateCart();
}

function calculateTotal(){
    var total = 0;
    cart.forEach(function (item){
        total += item.price * item.quantity;
    });

    return total;
}

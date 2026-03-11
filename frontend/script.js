const API = "http://localhost:8080/api/products";

let products = [];
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function registerUser(){

let email = document.getElementById("registerEmail").value;
let password = document.getElementById("registerPassword").value;

let users = JSON.parse(localStorage.getItem("users")) || [];

let userExists = users.find(u => u.email === email);

if(userExists){
document.getElementById("authMessage").innerText = "User already registered";
return;
}

users.push({
email:email,
password:password
});

localStorage.setItem("users", JSON.stringify(users));

document.getElementById("authMessage").innerText = "Registration successful!";
}

function loginUser(){

let email = document.getElementById("loginEmail").value;
let password = document.getElementById("loginPassword").value;

let users = JSON.parse(localStorage.getItem("users")) || [];

let validUser = users.find(u => u.email === email && u.password === password);

if(validUser){

localStorage.setItem("loggedUser",email);

alert("Login successful");

closeLogin();

showUser();

}
else{

document.getElementById("authMessage").innerText = "Invalid credentials";

}

}
function showUser(){

let validUser = localStorage.getItem("loggedUser");

if(validUser){

document.getElementById("userAccount").innerText = "Hello, " + validUser;

}

}

showUser();

/* LOGIN MODAL */
function openLogin() {
    document.getElementById("loginModal").classList.add("active");
}

function closeLogin() {
    document.getElementById("loginModal").classList.remove("active");
}

window.onclick = function(e) {
    const modal = document.getElementById("loginModal");
    if (e.target === modal) modal.classList.remove("active");
};

function goToCart() {
    window.location.href = "cart.html";
}

/* LOAD PRODUCTS */
function loadProducts() {
    fetch(API)
        .then(res => res.json())
        .then(data => {
            products = data;
            displayProducts();
        });
}

/* DISPLAY PRODUCTS */
function displayProducts() {
    const div = document.getElementById("products");
    div.innerHTML = "";

    products.forEach(p => {
        div.innerHTML += `
        <div class="card">
            <img src="${p.imageUrl}" class="product-img">
            <h4>${p.name}</h4>
            <p>${p.description}</p>
            <p><b>Rs ${p.price}</b></p>
            <button id="btn-${p.id}" onclick="addToCart(${p.id})" class="add-btn">Add to Cart</button>
        </div>`;
    });
}

/* ADD TO CART */
function addToCart(id) {

    const item = cart.find(i => i.id === id);

    if(item){
        item.qty++;
    }else{
        const product = products.find(x => x.id === id);
        cart.push({ ...product, qty: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    const btn = document.getElementById("btn-" + id);

    btn.innerHTML = "✓ Added";
    btn.style.background = "green";
    btn.disabled = true;

    setTimeout(() => {
        btn.innerHTML = "Add to Cart";
        btn.style.background = "#0f306d";
        btn.disabled = false;
    }, 2000);
    updateCartCount();
}

/* UPDATE CART COUNT */
function updateCartCount(){
    document.getElementById("cartCount").innerText = cart.length;
}

updateCartCount();
loadProducts();

function loadCheckout(){

let cart = JSON.parse(localStorage.getItem("cart")) || [];

const orderDiv = document.getElementById("orderItems");

let subtotal = 0;

cart.forEach(item => {

subtotal += item.price * item.qty;

orderDiv.innerHTML += `
<p>${item.name} x ${item.qty}
<span>Rs.${item.price * item.qty}</span>
</p>
`;

});

document.getElementById("subtotal").innerText = "Rs." + subtotal;

document.getElementById("total").innerText =
"Rs." + (subtotal + 350);

}

loadCheckout();

function placeOrder(){

alert("Order placed successfully!");

localStorage.removeItem("cart");

window.location.href="index.html";

}

function goToCheckout(){
window.location.href="checkout.html";
}

function validateCheckout(){

const fname = document.getElementById("fname").value.trim();
const lname = document.getElementById("lname").value.trim();
const phone = document.getElementById("phone").value.trim();
const email = document.getElementById("email").value.trim();

if(!fname || !lname || !phone || !email){

alert("Please fill required fields (*)");

return;

}

const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

if(!email.match(emailPattern)){
alert("Please enter valid email");
return;
}

alert("Order placed successfully!");

localStorage.removeItem("cart");

window.location.href="index.html";

}
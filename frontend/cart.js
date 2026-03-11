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

/* LOAD CART ITEMS */
function loadCart(){

const tbody = document.getElementById("cartItems");

tbody.innerHTML = "";

let total = 0;

cart.forEach(item=>{

total += item.price * item.qty;

tbody.innerHTML += `
<tr>

<td>
<button onclick="removeItem(${item.id})">✖</button>
</td>

<td class="product-info">
<img src="${item.imageUrl}" width="60">
${item.name}
</td>

<td>Rs.${item.price}</td>

<td>
<input type="number" value="${item.qty}" min="1"
onchange="updateQty(${item.id}, this.value)">
</td>

<td>Rs.${item.price * item.qty}</td>

</tr>
`;

});

document.getElementById("cartSubtotal").innerText = total;

const delivery = 350;
const finalTotal = total + delivery;

document.getElementById("cartTotal").innerText = finalTotal;

document.getElementById("cartCount").innerText = cart.length;

}

/* UPDATE QUANTITY */

function updateQty(id,qty){

const item = cart.find(i=>i.id===id);

if(item){

item.qty = parseInt(qty);

}

localStorage.setItem("cart",JSON.stringify(cart));

loadCart();

}

/* REMOVE ITEM */

function removeItem(id){

cart = cart.filter(i=>i.id!==id);

localStorage.setItem("cart",JSON.stringify(cart));

loadCart();

}

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

function goToShop(){
window.location.href = "index.html#shop";
}

function goToCart() {
    window.location.href = "cart.html";
}

function goToCheckout(){
window.location.href="checkout.html";
}

/* START */

loadCart();
import './style.scss';
import 'bootstrap';
import Modal from "bootstrap/js/src/modal";
import 'jquery';
import 'lightbox2';

let add = document.getElementById('add');
let minus = document.getElementById('minus');
// let price = document.getElementById('price');
// let qty = document.getElementById('qty');
let addCart = document.getElementById('btn-add-cart');
let modal = document.getElementById('exampleModal');
add.addEventListener('click', function () {
    let  qty = document.getElementById('qty').innerText;
    let quantity =  parseInt(qty)+1;
    document.getElementById('qty').innerText = quantity;
    document.getElementById('cart-list').innerText = "";
});

minus.addEventListener('click', function () {
    let  qty = document.getElementById('qty').innerText;
    if ( qty >= 1){
        let quantity =  parseInt(qty)-1;
        document.getElementById('qty').innerText = quantity;
    }
});

addCart.addEventListener('click', function () {
    if ( document.getElementById('qty').innerText > 0 ){
        let total = (parseInt(document.getElementById('qty').innerText)*125.00).toFixed(2);
        let qty = document.getElementById('qty').innerText;
        let price = document.getElementById('price').innerText;
        document.getElementById('cart-list').innerHTML = `<div class="d-flex"><img src="img/image-product-1-thumbnail.jpg" alt=""> <p class="text-black-50 px-3">Fall Limited Edition Sneakers<br>
                                                                        <span class="text-black-50">${price} x ${qty} </span><span class="fw-bold"> $${total} </span></p> 
                                                                        <a href="" class=""><img src="img/icon-delete.svg" alt="" class="del mt-3"></a>
                                                                      </div>
                                                                    <button class="btn w-100 text-white ">Checkout</button> `;
    }
    else {
        document.getElementById('cart-list').innerHTML = `<p class="text-black-50 text-center">Your cart is empty.</p>`
    }

});

document.getElementById('btn-cart').addEventListener('click', function () {
    if ( document.getElementById('qty').innerText > 0 ){
        let total = (parseInt(document.getElementById('qty').innerText)*125.00).toFixed(2);
        let qty = document.getElementById('qty').innerText;
        let price = document.getElementById('price').innerText;
        document.getElementById('cart-list').innerHTML = `<div class="d-flex"><img src="img/image-product-1-thumbnail.jpg" alt=""> <p class="text-black-50 px-3">Fall Limited Edition Sneakers<br>
                                                                        <span class="text-black-50">${price} x ${qty} </span><span class="fw-bold"> $${total} </span></p> 
                                                                        <a href="" class=""><img src="img/icon-delete.svg" alt="" class="del mt-3"></a>
                                                                      </div>
                                                                    <button class="btn w-100 text-white ">Checkout</button> `;
    }
    else {
        document.getElementById('cart-list').innerHTML = `<p class="text-black-50 text-center">Your cart is empty.</p>`
    }

});


document.getElementById('btn-avatar').addEventListener('click', function () {
    if ( document.getElementById('qty').innerText > 0 ){
        let total = (parseInt(document.getElementById('qty').innerText)*125.00).toFixed(2);
        let qty = document.getElementById('qty').innerText;
        let price = document.getElementById('price').innerText;
        document.getElementById('cart-list').innerHTML = `<div class="d-flex"><img src="img/image-product-1-thumbnail.jpg" alt=""> <p class="text-black-50 px-3">Fall Limited Edition Sneakers<br>
                                                                        <span class="text-black-50">${price} x ${qty} </span><span class="fw-bold"> $${total} </span></p> 
                                                                        <a href="" class=""><img src="img/icon-delete.svg" alt="" class="del mt-3"></a>
                                                                      </div>
                                                                    <button class="btn w-100 text-white ">Checkout</button> `;
    }
    else {
        document.getElementById('cart-list').innerHTML = `<p class="text-black-50 text-center">Your cart is empty.</p>`
    }

});


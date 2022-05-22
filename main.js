import './style.scss';
import 'bootstrap';
import Modal from "bootstrap/js/src/modal";
import 'jquery';

let add = document.getElementById('add');
let minus = document.getElementById('minus');
let cartModal = document.getElementById('exampleModal');
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
"use strict";

let shop = document.createElement('div');
shop.id = 'shop';
document.body.insertAdjacentElement('afterbegin', shop);

let shopBasket = document.createElement('div');
shopBasket.className = 'basket';
shop.appendChild(shopBasket);

let catalogue = document.createElement('div');
catalogue.className = 'catalogue';
shop.appendChild(catalogue);

let productsCatalog = [
    { name: 'apple', price: 10 },
    { name: 'banana', price: 15 },
    { name: 'pineapple', price: 20 },
    { name: 'cherry', price: 25 },
    { name: 'tomato', price: 30 },
    { name: 'lemon', price: 25 }
];

for (let i = 0; i < productsCatalog.length; i++) {
    let productCard = document.createElement('div');
    productCard.className = 'card';
    productCard.insertAdjacentHTML('afterbegin', `Название: ${productsCatalog[i].name}, цена: ${productsCatalog[i].price}`);
    catalogue.appendChild(productCard);
    let buyButton = document.createElement('button');
    buyButton.className = 'buyButton';
    buyButton.insertAdjacentHTML('afterbegin', 'Купить');
    buyButton.setAttribute('type', 'button');
    buyButton.setAttribute('data-id', productsCatalog[i]['name']);
    productCard.appendChild(buyButton);
}


let basket = [];

function addToBasket(name) {
    for (let i = 0; i < productsCatalog.length; i++) {
        if (productsCatalog[i]['name'] == name) {
            basket.push(productsCatalog[i]);
        }
    }
}

function deleteFromBasket(name) {
    if (basket.length == 0) {
        pass;
    } else {
        for (let i = 0; i < basket.length; i++) {
            if (basket[i].name == name) {
                basket.splice(i, 1);
            }
        }
    }
}

function countBasketPrice(basket, sum = 0) {
    for (let i = 0; i < basket.length; i++) {
        sum += basket[i].price;
    }
    return sum;
}


function drawBasket() {
    shopBasket.innerHTML = '';
    if (basket.length == 0) {
        shopBasket.insertAdjacentHTML("afterbegin", 'Корзина пуста');
    } else {
        shopBasket.insertAdjacentHTML("afterbegin", `В корзине: ${basket.length} товаров на ${countBasketPrice(basket)} рублей`);
    }
}


drawBasket();
document.onclick = event => {
    if (event.target.classList.contains('buyButton')) {
        addToBasket(event.target.dataset.id);
        drawBasket();
    }
}
"use strict";
//Задания 2 и 3

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
}


let basket = [];

function addToBasket(name, price) {
    let product = {};
    product.name = name;
    product.price = price;
    basket.push(product);
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
    if (basket.length == 0) {
        shopBasket.insertAdjacentHTML("afterbegin", 'Корзина пуста')
    } else {
        shopBasket.insertAdjacentHTML("afterbegin", `В корзине: ${basket.length} товаров на ${countBasketPrice(basket)} рублей`);

    }
}

//drawBasket();
addToBasket('apple', 10);
addToBasket('banana', 15);
addToBasket('pineapple', 20);
//drawBasket();
deleteFromBasket('apple');
deleteFromBasket('banana');
addToBasket('pineapple', 20);
deleteFromBasket('pineapple');
//deleteFromBasket('pineapple');
drawBasket();
console.log(basket);
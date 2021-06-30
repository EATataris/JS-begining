"use strict";

let shop = document.createElement('div');
shop.id = 'shop';
document.body.insertAdjacentElement('afterbegin', shop);

let shopBasket = document.createElement('div');
shopBasket.className = 'basket';
shop.appendChild(shopBasket);

let basketText = document.createElement('p');
basketText.className = 'basketText';
shopBasket.appendChild(basketText);

let basketLink = document.createElement('a');
basketLink.className = 'basketLink';
basketLink.insertAdjacentHTML('beforeend', 'Корзина');
shopBasket.appendChild(basketLink);

let catalogue = document.createElement('div');
catalogue.className = 'catalogue';
shop.appendChild(catalogue);


let basketPopup = document.createElement('div');
basketPopup.id = 'popup';
shop.appendChild(basketPopup);

let basketContent = document.createElement('div');
basketContent.className = 'basketContent';
basketPopup.appendChild(basketContent);

let basketH1 = document.createElement('h1');
basketH1.className = 'basketH1';
basketContent.appendChild(basketH1);
basketH1.insertAdjacentHTML('afterbegin', 'Корзина');

let closeButton = document.createElement('button');
closeButton.className = 'closeButton';
basketContent.appendChild(closeButton);
closeButton.insertAdjacentHTML('afterbegin', 'х');
closeButton.setAttribute('type', 'button');

let modalProducts = document.createElement('p');
modalProducts.className = 'modalProducts';
basketContent.appendChild(modalProducts);

let nextButton = document.createElement('button');
nextButton.className = 'deleteButton';
nextButton.id = 'next';
basketContent.appendChild(nextButton);
nextButton.insertAdjacentHTML('afterbegin', 'Далее');


let modalText = document.createElement('p');
modalText.className = 'modalText';
basketContent.appendChild(modalText);

/*let basketContent2 = document.createElement('div');
basketContent2.className = 'basketContent2';
basketContent2.id = 'basket_content2';
basketPopup.appendChild(basketContent2);

let closeButton2 = closeButton;
basketContent2.appendChild(closeButton2);*/

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
            modalProducts.insertAdjacentHTML('beforeend', `<p class='productName' id="p-${productsCatalog[i]['name']}">${name} <button class="deleteButton" type="button" data-id="${productsCatalog[i]['name']}">Удалить</button> <br/></p>`);
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
                let product = document.getElementById(`p-${name}`);
                product.remove();
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
    basketText.innerHTML = '';
    modalText.innerHTML = '';
    if (basket.length == 0) {
        basketText.insertAdjacentHTML("afterbegin", 'Корзина пуста');
        modalText.insertAdjacentHTML("afterbegin", 'Корзина пуста');
    } else {
        basketText.insertAdjacentHTML("afterbegin", `В корзине: ${basket.length} товаров на ${countBasketPrice(basket)} рублей`);
        modalText.insertAdjacentHTML("afterbegin", `В корзине: ${basket.length} товаров на ${countBasketPrice(basket)} рублей`);
    }
}

drawBasket();
document.onclick = event => {
    if (event.target.classList.contains('buyButton')) {
        addToBasket(event.target.dataset.id);
        drawBasket();
    }
    if (event.target.classList.contains('deleteButton')) {
        deleteFromBasket(event.target.dataset.id);
        drawBasket();
    }
}


function closeModal() {
    let modal = document.getElementById('popup');
    modal.style.display = 'none';
}

function showModal() {
    let modal = document.getElementById('popup');
    modal.style.display = 'flex';
}

closeButton.onclick = closeModal;
basketLink.onclick = showModal;

let count = 1;
function nextSlide() {
    count++;
    basketH1.innerHTML = '';
    basketH1.insertAdjacentHTML('afterbegin', 'Адрес доставки');
    modalProducts.remove();
    modalText.remove();
}


function nextSlide2() {
    basketH1.innerHTML = '';
    basketH1.insertAdjacentHTML('afterbegin', 'Комментарии');
    nextButton.innerHTML = '';
    nextButton.insertAdjacentHTML('afterbegin', 'Оставить заявку');
}

/*nextButton.addEventListener('click', nextSlide);*/

if (count == 1) {
    /*nextButton.addEventListener('click', nextSlide);*/
    nextButton.onclick = nextSlide;
} else if (count > 1) {
    /*nextButton.addEventListener('click', nextSlide2);*/
    nextButton.onclick = nextSlide2;
}
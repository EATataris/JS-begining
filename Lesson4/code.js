// №1

// реализация через строки
function digitToHungreds(digit) {
    digit = '' + digit;
    digit_object = {};

    if (digit.length < 1 || digit.length > 3 || Number(digit) == false) {
        console.log('Ошибка! Передайте на вход число от 0 до 999!');
    } else {
        if (digit.length == 3) {
            digit_object.units = Number(digit[2]);
            digit_object.tens = Number(digit[1]);
            digit_object.hundreds = Number(digit[0]);
        } else if (digit.length == 2) {
            digit_object.units = Number(digit[1]);
            digit_object.tens = Number(digit[0]);
        } else if (digit.length == 1) {
            digit_object.units = Number(digit[0]);
        }
    }
    return digit_object;
}

console.log(digitToHungreds(245));

// математическая реализация
function digitToHungredsMath(digit) {
    digit_object = {};

    if (digit > 999 || digit < 0 || typeof (digit) != 'number') {
        console.log('Ошибка! Передайте на вход число от 0 до 999!');
    } else {
        digit_object.units = digit % 10;
        digit_object.tens = Math.floor((digit % 100) / 10);
        digit_object.hundreds = Math.floor(digit / 100);
    }
    return digit_object
}

console.log(digitToHungredsMath(540));

// №2
let products = [
    { name: 'apple', price: 10 },
    { name: 'banana', price: 15 },
    { name: 'pineapple', price: 20 }
];

function countBasketPrice(basket, sum = 0) {
    for (let i = 0; i < basket.length; i++) {
        sum += basket[i].price;
    }
    return sum;
}

console.log(countBasketPrice(products));
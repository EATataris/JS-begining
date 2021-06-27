// №1
let i = 0;
while (i < 100) {
    isPrime = true;
    let j = 2;
    while (j < i) {
        if (i % j == 0) {
            isPrime = false;
        }
        j++;
    }
    if (isPrime == true) console.log(i);
    i++;
}

// №2-3
function countBasketPrise(basket, sum = 0) {
    //sum = 0;
    for (let i = 0; i < basket.length; i++) {
        sum += basket[i]
    }
    return sum;
}

let products = [10, 200, 15000, 800, 750, 850];

console.log(countBasketPrise(products));

// №4
for (let i = 0; i <= 9; console.log(i++)) { }

//№5

let x = '';
for (let i = 0; i < 20; i++) {
    x += 'x'
    console.log(x)
}


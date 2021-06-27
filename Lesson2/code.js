// №1
var a = 1, b = 1, c, d;
c = ++a; alert(c);           // 2 - переменной "а" присвоено значение 1, затем выполнен префиксный инкремент. При таком инкремеировании значение переменной "а" сперва изменяется, 
// а затем присвается переменной "с", из-за этого ответ 2 = 1 + 1.


d = b++; alert(d);           // 1 - переменной "а" присвоено значение 1, затем выполнен постфиксный инкремент. При таком инкремеировании значение переменной "а" сперва  
// присвается переменной "с", а затем изменяется, из-за этого ответ 1, потому что применно не инктемированное значение, то есть 1.
c = (2 + ++a); alert(c);      // 5 - переменная "а" уже была инкремирована(значение 2), затем опять применне префиксный инкремент, значение изменилось на 3, и затем прибавили 2, итого 5
d = (2 + b++); alert(d);      // 4 - переменная "b" уже была инкремирована(значение 2), хоть и постфиксным инкрементов, но значение поменялось, но не присвоилось переменно "d". Затем
// постфиксным инкрементом увеличили значение b на 1, но значение не присвоилось как и в случае номер 2. Затем прибавление 2, итого ответ 4.
alert(a);                    // 3 - Значение переменной "а" было проинкремировано дважды в примерах выше
alert(b);                    // 3 - - Значение переменной "b", так же было проинкремировано дважды в примерах выше

// №2
var a = 2;
var x = 1 + (a *= 2); // Значение х будет равно 5. Потому что переменной "а" сперва присваивают значение 2, а затем переписывают ее значение умноженное на 2. 2*2=4.
//Затем идет сложение с 1, и присваивание финального значение переменной "х", итого 5

//№3
let a = -5, b = -10;

if (a >= 0 && b >= 0) {
    alert(a - b);
} else if (a < 0 && b < 0) {
    alert(a * b);
} else {
    alert(a + b);
}

// №4
let a = Number(prompt('Введиет число от 0 до 15: '));

switch (a) {
    case 1:
        alert('Число 1');
        break;
    case 2:
        alert('Число 2');
        break;
    case 3:
        alert('Число 3');
        break;
    case 4:
        alert('Число 4');
        break;
    case 5:
        alert('Число 5');
        break;
    case 6:
        alert('Число 6');
        break;
    case 7:
        alert('Число 7');
        break;
    case 8:
        alert('Число 8');
        break;
    case 9:
        alert('Число 9');
        break;
    case 10:
        alert('Число 10');
        break;
    case 11:
        alert('Число 11');
        break;
    case 12:
        alert('Число 12');
        break;
    case 13:
        alert('Число 13');
        break;
    case 14:
        alert('Число 14');
        break;
    case 15:
        alert('Число 15');
        break;
}

// №5

function add(x, y) {
    return x + y;
}

function sub(x, y) {
    return x - y;
}

function mul(x, y) {
    return x * y;
}

function div(x, y) {
    return x / y;
}

//alert(add(5, 10));
//alert(sub(5, 10));
//alert(mul(5, 10));
//alert(div(5, 10));

// №6
let operation = prompt('Введите операцию, которую хотите выполнить: ');

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case 'add':
            return add(arg1, arg2);
        case 'sub':
            return sub(arg1, arg2);
        case 'mul':
            return mul(arg1, arg2);
        case 'div':
            return div(arg1, arg2);
    }
}

alert(mathOperation(10, 30, operation));

// №8
let val = Number(prompt('Введите число для возведения в степень: '));
let pow = Number(prompt('Введите необходимую степень для возведения числа: '))
function power(val, pow) {
    if (pow == 0) {
        return 1;
    } else if (pow > 0) {
        return val * power(val, pow - 1);
    } else {
        return 1 / power(val, -pow);
    }
}
alert(power(val, pow));
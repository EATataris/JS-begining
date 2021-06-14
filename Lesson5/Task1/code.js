"use strict";

let chessPlate = document.createElement('div');
chessPlate.id = 'chessplate';
document.body.insertAdjacentElement('afterbegin', chessPlate);

let letterRow = document.createElement('div');
letterRow.className = 'row';


function createLetters(letterRow) {
    let letters = [' ', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    for (let i = 0; i < letters.length; i++) {
        let letter = document.createElement('div');
        letter.className = 'square';
        letter.insertAdjacentHTML("afterbegin", letters[i]);
        letter.style.border = 'none';
        letterRow.appendChild(letter);
    }
    return letterRow;
}

chessplate.appendChild(createLetters(letterRow));

for (let i = 0; i < 8; i++) {

    let row = document.createElement('div');
    row.className = 'row';
    let digits = document.createElement('div');
    digits.className = 'square';

    function createDigits(digits) {
        digits.insertAdjacentHTML("afterbegin", 8 - i);
        digits.style.border = 'none';
        row.appendChild(digits);
        return digits
    }

    row.appendChild(createDigits(digits));

    for (let j = 0; j < 8; j++) {

        let square = document.createElement('div');
        square.className = 'square';

        if (j % 2 == 0 && i % 2 == 0) {
            square.style.backgroundColor = '#000';
        }
        if (j % 2 != 0 && i % 2 != 0) {
            square.style.backgroundColor = '#000';
        }

        row.appendChild(square);
    }

    let digits2 = document.createElement('div');
    digits2.className = 'square';
    row.appendChild(createDigits(digits2));
    chessplate.appendChild(row);
}

let letterRow2 = document.createElement('div');
letterRow2.className = 'row';


chessplate.appendChild(createLetters(letterRow2));
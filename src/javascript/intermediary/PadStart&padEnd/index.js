/* CASO PRÁTICO */

let card = '1234567891012131';

let lastDigits = card.slice(-4);

let maskedCard = lastDigits.padStart(16,'*');

console.warn(`Este é o seu cartão : ${maskedCard}`);

//Funciona como uma mascara, antes(padStart) e depois(padEnd)


let nome ='Gabriel';

let sobrenome = 'rodrigues';
//adiciona a mascara depois
console.log(nome.padEnd(17,' rodrigues'))
//adiciona a mascara antes
console.log(sobrenome.padStart(17,'Gabriel '))
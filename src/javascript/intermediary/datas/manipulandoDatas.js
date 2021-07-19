let d = new Date();
//altera o ano 
d.setFullYear(2023);

let newYear = d;

console.log(`Ano alterado para ${newYear.getFullYear()} \n`);

/* Trocando o mês */

d.setMonth(11);

let newMonth = d;

console.log(`Mês alterado para ${newMonth.getMonth() + 1} \n`)


/* Trocando a data */


d.setDate(15);

let newDay = d;

console.log(`Dia alterado para ${newDay.getDate()} \n`)


// TROCANDO AS HORAS


d.setHours(d.getHours() + 12);

let newHour = d;

console.log(`Hora alterada para ${newHour.getHours()}h`)

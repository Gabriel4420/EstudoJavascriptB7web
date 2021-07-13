let d = new Date();

console.log(`\n Data atual: ${d} \n`);
// formatando datas ==> data resumida 
console.log(`\n Data resumida (toDateString): ${d.toDateString()} \n`);

// data sem fuso horario ==> hora de GMT 

console.log(`\n Data sem fuso (toUTCString): ${d.toUTCString()}`);

// toString ==> converte data em texto

console.log(`\n Data em formato de texto (toString) : ${d.toString()} \n`)


/* PARAMETROS DA CLASSE DATA 
   
   mês começa a partir do 0 
   
   Date(2020,0,1,12,30,12) =>> 1 de janeiro de 2020 12h 30min 12seg
   


*/

//dateString

let dateString = new Date('2020-01-01 15:42:23')

console.log(`\n dateString: ${dateString}`);

// o minimo necessario para gerar uma data é o ano e o mês \u{2757}

let aleatoryDate = new Date(2022,2);

console.log(`\n entendendo o minimo necessario para gerar uma data: ${aleatoryDate}`);

// Curiosidade 

/* 
    Quando definimos a classe date com o valor 0 apenas em GMT, é retornado o \u{2666}
    1º de janeiro de 1970
*/

//Timestamp ==> basta colocar em milisegundos

let dataAula2 = d;

let novoValor = dataAula2.getFullYear();

let mes = dataAula2.getMonth();

let day = dataAula2.getDate();

let hours = dataAula2.getHours();

let minutes = dataAula2.getMinutes();

let seconds = dataAula2.getSeconds();

let Time = dataAula2.getTime();





console.log(`\n ano atual : ${novoValor}`);

console.log(`\n mês atual : ${mes+1}`);

console.log(`\n dia atual : ${day}`);

console.log(`\n Hora atual : ${hours}`);

console.log(`\n Minuto atual : ${minutes}`);

console.log(`\n segundo atual : ${seconds}`);

console.log(`\n quantidade de milisegundos que se passaram de 1970 até hoje: \n ${Time}`)


console.log(`\n Timestamp do momento atual : ${Date.now()} ms`)
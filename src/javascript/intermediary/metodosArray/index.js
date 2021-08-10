let lista = [45, 4,9,16,25];

let lista2 = [];

console.log(`lista normal: ${lista}`)
//Função MAP => mapeia e gera um novo array

lista2 = lista.map((item) => {
 return item * 2;
});

let res = lista2;

console.log(`Dobro: ${res}`);


//Filter array
lista2 = lista.filter((item) =>{
    return item < 20 ? true : false;
})

res = lista2;

console.log(`Items menores que 20 : ${res}`);

lista2 = lista.filter((item) =>{
    return item > 20 ? true : false;
})

res = lista2;

console.log(`Items maiores que 20 : ${res}`);

//Função every ==> verifica em cada um dos items uma dada condição, aonde todos
//os items devem estar de acordo com a condição para dar TRUE.

lista2 = lista.every((item) =>{
    return item > 20 ? true : false;
});

res = lista2;

console.log(`todos os items são maiores que 20 : ${res}`);


//Função some ==> verifica em cada um dos items se alguns correspondem a uma dada condição

lista2 = lista.some((item) =>{
    return item > 20 ? true : false;
});

res = lista2;

console.log(`Alguns são maiores que 20 : ${res}`);

// função find => procura algo no array 


lista2 = lista.find((item) =>{
    return item == 16 ? true : false;
})

res = lista2;

console.log(`busca: ${res}`);

//retorna a posição do item procurado

lista2 = lista.findIndex((item) =>{
    return item == 16 ? true : false;
})

res = lista2;

console.log(`busca posição do item: ${res}`);


/* 
   =============================================== 
                    EXEMPLO PRÁTICO     
   ===============================================
*/

let users  = [
    {id:1, username:'Gabriel442018', nome:'Gabriel Rodrigues', sobrenome:'Perez'},
    {id:2, username:'Vitinhodavila2020', nome:'Vitor Cesar', sobrenome:'Sales'},
    {id:3, username:'Vivi2607', nome:'Viviane Rodrigues', sobrenome:'Perez'},
    {id:4, username:'Roselinds1108', nome:'Roseli Vieira', sobrenome:'Rodrigues'},

];

let query = users.find((item) => {
    return (item.id == 3) ? true : false; 
});

let response = query;

console.log(`query = ${response}`);



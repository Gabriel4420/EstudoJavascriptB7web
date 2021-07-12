let lista = ['ovo','farinha','corante','massa'];
//transforma em string, (join separado pela virgula)
let res = lista.toString();
//transforma o array em uma string separando os items pelo parametro 
res = lista.join(' $ ');
//procurar um item especifico no array, retornando a posição do items
//caso não seja encontrado, é retornado o -1;
res = lista.indexOf('ovo')

console.log(res);

let res2 = lista;
// remove o ultimo item do array
lista.pop();
// remove o primeiro item do array
lista.shift();
// adiciona items no array
lista.push('prato')

//alterar array utilizando o indice do item

lista[3] = 'ovos'
lista[4] = 'liquidificador'

lista[lista.length] = 'galinha'

console.log(`Tamanho da lista : ${lista.length}`);

/* REMOVENDO ITENS DO ARRAY  */
// remove items do array
// lista.splice(0,6)

let lista2 = ['prato','Forno','Talheres']

res2 = lista.concat(lista2);

console.log(res2);
// ordenando array em ordem alfabetica
lista.sort();

//ordenando array em ordem alfabetica invertida
lista.reverse();


res = lista;

console.log(res);

let pessoa  = {
    nome:'Gabriel Rodrigues', 
    sobrenome:'Perez',
    idade: 28,
    social:{
        facebook:{
            uid:12356787,
            username:'Gabriel442018'
        },
        instagram: {
            uid:12356787,
            username:'Gabriel442018',
            tagName:'@Gabriel442018',
            followers: 1000
        }
    },
    nomeCompleto: function (){
        return `${this.nome} ${this.sobrenome}`;
    }

}




//deconstructuring 

let { nome, sobrenome, idade , social:{instagram}} = pessoa;


const res = ({nome, sobrenome = 'Silva', social:{instagram}}) => {
    return [console.log(`${nome} ${sobrenome}`),
console.log(`Follow in ${instagram.tagName} on insta`),console.log(`I have ${instagram.followers} followers on insta`)]
}

res(pessoa);

// ** Desconstruindo Arrays 

let arr = ['Bonieky Lacerda', 'Gabriel Rodrigues', '@Gabriel442018'];

let [professor, nomeCompleto, insta] = arr;

console.log(`${professor} ${nomeCompleto}, ${insta}`);

const criar = () => {let [a,b,c] = [1,2,3]; console.log(a,b,c);} 

criar()

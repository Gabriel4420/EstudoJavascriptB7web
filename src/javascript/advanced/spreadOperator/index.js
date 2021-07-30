let people = [{
    nome:'Gabriel Rodrigues',
    sobrenome:'perez',
    idade: 21,
    socialMedia:{
        facebook:true,
        instagram:true,
        pinterest:true
    }
}]

let otherPeople = [...people,{
    nome:'Viviane Rodrigues',
    sobrenome:'perez',
    idade: 19,
    socialMedia:{
        facebook:true,
        instagram:true,
        pinterest:false
    }
} ]

console.log(otherPeople);
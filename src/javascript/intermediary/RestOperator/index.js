function adicionar(...nums){
    console.log(nums);
}

adicionar(4,5,6,7,8,9,10);

function newNames(names,...newNames){
    let novos = [...names,...newNames];
    
    return novos;
}


let names  = ['gabriel','viviane'];

let others = newNames(names, "Bonieky","Paulo", "Antonio");

console.log(others);


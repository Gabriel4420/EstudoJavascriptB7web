/* document.getElementById('titulo').innerHTML = "SARVE"

document.write("algum texto");
 */
const mudaCor = (cor) => {
    if(cor == "verde"){
        document.querySelector('#exemplo').classList.remove('vermelho');
        document.querySelector('#exemplo').classList.remove('azul');
        document.querySelector('#exemplo').classList.add('verde')
    }
    if(cor == "vermelho"){
        document.querySelector('#exemplo').classList.remove('verde');
        document.querySelector('#exemplo').classList.remove('azul');
        document.querySelector('#exemplo').classList.add('vermelho')
    }
    if(cor == "azul"){
        document.querySelector('#exemplo').classList.remove('vermelho');
        document.querySelector('#exemplo').classList.remove('verde');
        document.querySelector('#exemplo').classList.add('azul')
    }
       
}

mudaCor();
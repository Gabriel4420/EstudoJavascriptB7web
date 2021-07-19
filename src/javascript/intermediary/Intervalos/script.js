let timer;

const started = () => {
     timer = setInterval(showTime, 1000);
}

const stoped = () => {
    clearInterval(timer);
}

// Função para mostrar o tempo 

const showTime = () => {
    let d = new Date();

    let h = d.getHours();

    let m = d.getMinutes();
    
    let s = d.getSeconds();

    let horario = `Agora são : ${h}:${m}:${s}`;
    
    document.querySelector('.demo').innerHTML = horario;

}

let timer2;
 
const Run = () =>{
    timer2 = setTimeout(() =>{
        document.querySelector('.demo').innerHTML = 'Rodou';
    },2000)
}

const stoping = () =>{
    clearTimeout(timer2)
}

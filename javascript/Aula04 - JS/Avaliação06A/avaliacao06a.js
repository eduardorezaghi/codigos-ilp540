function relogio(){
    let dataAtual = new Date();         // Hora do Sistema.
    let hora     = dataAtual.getHours();
    let minutos  = dataAtual.getMinutes();
    let segundos = dataAtual.getSeconds();
    setInterval(relogio, 1000);
    clock.innerHTML =  `${hora}:${minutos}:${segundos}`;
}

relogio();
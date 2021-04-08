function moveu( ) {
    visor_a.innerHTML= "Coords: X= " + event.x + 
            " Y= " + event.y;
  }
  
function escrever( ) {
    let letra= String.fromCharCode(event.keyCode);
    visor_b.innerHTML=letra;
}   // event.keyCode captura o código da tecla pressionada.

function redimensionar(){
    let w = window.outerWidth;
    let h = window.outerHeight;
    let txt = "Altura: " + h + ", Largura: " + w;
    document.getElementById("demo").innerHTML = txt;
}

//  TRATADORES DE EVENTO USANDO FUNÇÕES INTEGRADAS AO JS
function msg(){
    alert("Clicou na Página!");
}
/* document.onclick=msg; // msg sem parênteses! */
// Tratadores de evento no JavaScript devem ser escritos com letras minúsculas.
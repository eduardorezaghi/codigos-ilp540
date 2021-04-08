var lampOn = true
interruptor.onclick=function(){
    imag.src = (lampOn)?"acesa.jpg":"apagada.png"; // Muda o atributo src (source) contido na tag HTML.
    lampOn= !lampOn;
}

escrever.onclick=function(){
    for (let d = 0; d <= 10; d++) { // Enquanto d for menor ou igual a 10, execute...
        var elem =  document.createElement("H5") // Criação do elemento de título H5;
        var text =  document.createTextNode(d)   // Criar texto (variável d que possui o valor da iteração)
        elem.appendChild(text)                   // Anexar o texto criado na tag H5;   
        document.body.appendChild(elem);         // Escreva a tag com conteúdo na página.
    }
}

// Listener (escutador) de Eventos: click
bt_tit4.addEventListener("click", function(){    // Declaração da função dentro do EventListener;
    let tit4 = document.getElementsByTagName("H4")[1]; "Array de títulos (H4),correspondente ao segundo elemento, de índice 1"                       // getElementsByTagName acessa todas as tags de mesmo nome;
    tit4.innerHTML = "Texto novo!!!";            // Modifica o conteúdo contido na tag H4 de id tit4. 
});

// Uso do this (Orientação a Objetos)
p4.addEventListener("click", function(){
    this.style.fontFamily = "Verdana, sans-serif"; // this se refere ao elemento p4 (elemento no qual o método addEventListener está se referenciando);
})
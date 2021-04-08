entrada.onchange=function() {
    userInput = entrada.value; // value: propriedade que armazena o conteúdo atual do campo input.
    switch (userInput) {
        case "A":window.location="https://www.vestibularfatec.com.br/home/";
            
            break;
        case "B": window.location="https://www.google.com.br/";
            break;

        case "C": window.location="https://www.w3schools.com/";
        
            break;

        default: alert("Opção inválida! Digite novamente.");
            break;
    }
  }
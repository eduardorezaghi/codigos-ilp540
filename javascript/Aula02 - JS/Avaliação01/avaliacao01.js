/* 
Calcule a média aritmética entre duas notas informadas pelo usuário      e exiba o resultado junto com o seu respectivo conceito. 
Utilize DOM para as entradas e saídas, use campos input e tags de texto.

        Conceitos:   	   E – Maior ou igual a 9,0;
                           A – De 7,5 até 9,0 (exclusive);
                           B – De 6,0 até 7,5 (exclusive);
                           C – Menor que 6,0.
      Dica: Atenção aos tipos dos operandos...
*/
var inputNota1 = 0.0;
var inputNota2 = 0.0;

nota1.onchange = function(){
    inputNota1 = parseFloat(nota1.value);
}
nota2.onchange = function(){
    inputNota2 = parseFloat(nota2.value)
}

let conceito =  document.createElement("p");
let resultado = document.createElement("p");

calcula.onclick = function(){
    let resultValue = (inputNota1+inputNota2)/2;

    if (isNaN(resultValue)){
        resultado.textContent = "Não foi possível calcular a média, pois os valores não são válidos.";
        document.body.appendChild(resultado);
    } else {
        resultado.textContent = "A média obtida é igual a " + String(resultValue.toFixed(2));
        document.body.appendChild(resultado);

        switch (true) {
            case (resultValue >= 9.0 ): conceito.textContent = "Conceito E";
            document.body.appendChild(conceito);
                break;
            case (resultValue >= 7.5 && resultValue < 9.0 ): conceito.textContent = "Conceito A";
            document.body.appendChild(conceito);
                break;    
            case (resultValue >= 6.0 && resultValue < 7.5 ): conceito.textContent = "Conceito B";
            document.body.appendChild(conceito);
                break;
            default: conceito.textContent = "Conceito C"
            document.body.appendChild(conceito);
                break;
        }
    } 
}

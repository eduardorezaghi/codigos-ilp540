/*
Desenvolva uma função, com retorno de valor, que Calcule o IMC (Índice de Massa Corporal)     do usuário e exiba o resultado (índice) com duas casas e a descrição, conforme a tabela fornecida.
Utilize DOM para imprimir o resultado na página. 
*/
var altura = 0.0
var massa  = 0.0

function calcIMC(x, y) {
    return (y/Math.pow(x,2)).toFixed(2);
}

let    IMC    = document.createElement("p");
let resultado = document.createElement("p");

calcula.addEventListener("click", function(){
    altura = parseFloat(altr.value);
    massa = parseFloat(peso.value);
    let resultValue = calcIMC(altura, massa);

    if (isNaN(resultValue)){
        resultado.textContent = "Não foi possível calcular o IMC, pois os valores não são válidos.";
        document.body.appendChild(resultado);
    } else {
        resultado.textContent = "Seu IMC é " + String(resultValue);
        document.body.appendChild(resultado);

        switch (true) {
            case (resultValue >= 40.0 ):                        IMC.textContent = "Obesidade grau III (mórbida)";
            document.body.appendChild(IMC);
                break;
            case (resultValue >= 35.0 && resultValue <= 39.9 ): IMC.textContent = "Obesidade grau II (severa)";
            document.body.appendChild(IMC);
                break; 
            case (resultValue >= 30.0 && resultValue <= 34.9 ): IMC.textContent = "Obesidade grau I";
            document.body.appendChild(IMC);
                break;            
            case (resultValue >= 25.0 && resultValue <= 29.9 ): IMC.textContent = "Levemente acima do peso";
            document.body.appendChild(IMC);
                break;    
            case (resultValue >= 18.6 && resultValue <= 24.9 ): IMC.textContent = "Peso ideal (parabéns) ";
            document.body.appendChild(IMC);
                break;
            default: IMC.textContent = "Abaixo do peso";
            document.body.appendChild(IMC);
                break;
        }
    }
});
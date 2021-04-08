/* 
    Solicite ‘n’ nomes ao usuário através de um campo input (do form). 
    Imprima, através de uma lista em ordem ascendente de nomes, o resultado em letras maiúsculas.
   Exemplo:  			
   						ANTONIO
                        FERNANDO
                        HENRIQUE
                        LARISSA

Utilize: Tratadores de Eventos, Loop, Array, DOM...
*/

exibir.onclick = function () {
    let inputNames = nomes.value;
    console.log(inputNames);
    let namesArray = ((inputNames.toUpperCase()).split(',')).sort();
    console.log(namesArray);
    console.log("Tamanho do vetor namesArray[] = "+namesArray.length)

    for (let i = 0; i < namesArray.length; i++) {
        n = document.createElement('p');
        n.textContent = namesArray[i];
        document.body.appendChild(n)
    }
    nomes.value = "";   
}
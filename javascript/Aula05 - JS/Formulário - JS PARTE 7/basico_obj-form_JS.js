// ACESSO AO FORMULÁRIO ATRAVÉS DO ID
// EXEMPLO 
// (Id do formulário exemplo)

console.log(form1.length);   

// .length exibe o número de elementos do formulário.        


document.getElementById("btn").addEventListener("click",  () => {
        console.log(document.forms[0].method);            // Acessa o método do primeiro formulário do documento.
        console.log(document.forms[0].elements[1].value); // Acessa o valor do segundo elemento do primeiro formulário.
        // O fieldset é o primeiro elemento do formulário.  Arrow functions:  () => {}
    });                   


btEnviar.addEventListener("click", () => {
    form1.submit( ) })   
 btLimpar.addEventListener("click", () => {
    form1.reset( ) }) 

// Exemplo: Uso de id (form.id.value)
console.log(form1.user.value); // Exibe o conteúdo do campo 'user' do form1.

// PROPRIEDADES 
// .id           – Contém o id do elemento.
// .value        – Contém o valor atual do elemento, preenchido pelo usuário.
// .defaultValue – Contém o valor inicial (padrão) definido pelo programador.
// .name         – Contém o nome do elemento.


form1.email.focus()
form1.email.select()
// .focus()  - Posiciona o cursor sobre um elemento text ou textarea.
// .select() - Seleciona o conteúdo inserido no elemento.
// .blur()   - Retira o foco (cursor) do elemento.

user.addEventListener("input", () => {
    idTexto.innerText = form1.user.value // Pega o valor do campo user e escreve dentro da div;
})


console.log(pref.checked)
// .id             – Contém o id do elemento.
// .value          – Contém o valor do elemento, que será enviado ao servidor.
// .checked        – Contém true ou false, de acordo com a manipulação do usuário.
// .defaultChecked – Contém o valor true ou false, de acordo com a situação inicial do campo.

console.log("Valor do elemento de número 2, com id 'cor': " + document.getElementsByName("cor")[2].value) 
console.log(`Checa se o elemento de número 2, com id 'cor', está checado: ${document.getElementsByName("cor")[2].checked}`)         


console.log(form1.sel.options[2].value); 
// Exibe a opção armazeanada dentro do Array options[] da caixa select.


/* preventDefault() */
//      Cancela o comportamento padrão de um evento, 
//      se for cancelável...

function clique(event){
    event.preventDefault(); // Previne o comportamento padrão (clique).
}

idExemplo.addEventListener("click", clique) 


// Remove/cancela o addEventListener() criado.

// idExemplo.removeEventListener("click", clique)
// Descomente a instrtução acima após testar sem o remove…     


// Cancela o evento 'click' adicionado ao botão.     
    // Ao testar, primeiramente clique várias vezes no botão Start…
    function escrever(){
         idTexto.innerText += `Escrevendo...\n`
    }
    btStart.addEventListener("click", escrever)
    // Cancelamento/remoção do evento 'click' adicionado ao botão 'btStart'.    
    btStop.addEventListener("click", () => {
       btStart.removeEventListener("click", escrever)
    }) 
    // Depois clicque no botão ‘Stop’; o evento adicionado ao botão ‘Start’ será removido…

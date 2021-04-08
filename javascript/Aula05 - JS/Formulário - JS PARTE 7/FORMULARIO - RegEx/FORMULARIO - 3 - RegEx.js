let formulario3 = document.getElementById("form3")
let msgUser3 = document.getElementById("msgUser3") 
let msgEmail3 = document.getElementById("msgEmail3") 
let msgNews3 = document.getElementById("msgNews3") 
let msgNasc3 = document.getElementById("msgNasc3") 
let err3 

 // EXPRESSÃO REGULAR (Regex)
// Determinação dos Padrões para o nome, e-mail e data, respectivamente:

let userRegex3 = /^([a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)/
let emailRegex3 = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
let nascRegex3 = /^([0-9]{4}-[0-9]{2}-[0-9]{2})/
// O método .test() testa uma correspondência em uma string com o padrão. 
// Retorna true (ok) ou false.

// Preparação do CSS e variáveis para as mensagens de erro…
btEnviar3.addEventListener("click", function() {
    // Adição inicial da classe 'inválido' para os campos com CSS...
    user3.classList.add("invalido")
    email3.classList.add("invalido")  
    nasc3.classList.add("invalido")

    // Limpa campos de mensagem ok (a mensagem é opcional)... 
    msgUser3.innerText = msgEmail3.innerText = msgNews3.innerText =
    msgNasc3.innerText = msgGeral3.innerText = ""
    err3 = 0

    let userStr3 = document.getElementById("user3").value; 
            
    // Testa o nome e sobrenome (se está de acordo com o padrão definido)…
    if (userRegex3.test(userStr3)) {
        msgUser3.innerText = "✓"
        // remove classe 'invalido' se campo estiver ok.   
        user3.classList.remove("invalido")      
    }
    else {
    err3++   
    }

    // Testes dos exemplos com o operador ternário... 
    let emailStr3 = document.getElementById("email3").value;
    emailRegex3.test(emailStr3) 
        ? (msgEmail3.innerText = "✓", email3.classList.remove("invalido")) 
        : err3++
    let news3 = document.getElementById("news3").checked;
    news3 ? msgNews3.innerText = "✓" : err3++  
    let nascDt3 = document.getElementById("nasc3").value;
    nascRegex3.test(nascDt3) 
        ? (msgNasc3.innerText = "✓", nasc3.classList.remove("invalido")) 
        : err3++

    // Envio do formulário, se ok...
    if (!err3) {
        formulario3.action="mailto:email@domain.com"
        formulario3.method="post"
        formulario3.enctype="text/plain"
        // Uso do método 'submit()' para enviar o formulário...       
        formulario3.submit(); 
        }
        else {
            msgGeral3.innerText = "Dados incorretos ou incompletos!"
        }
}) 
 

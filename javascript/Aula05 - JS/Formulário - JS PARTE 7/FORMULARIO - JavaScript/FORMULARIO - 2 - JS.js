// Acesso ao formulário, mensagens e declaração de variáveis... 
let formulario2 = document.getElementById("form2")
let msgUser = document.getElementById("msgUser") 
let msgEmail = document.getElementById("msgEmail") 
let msgSel = document.getElementById("msgSel")
let msgRad = document.getElementById("msgRad")
let userStr2, emailStr2, sel2, err 


formulario2.addEventListener("submit", function(event) {
    // Limpeza das mensagens de erro...
    err = 0
    msgUser.innerText = msgEmail.innerText = msgRad.innerText = msgSel.innerText = ""

    // Acesso ao campo do nome...
    userStr2 = document.getElementById("user2")
    // Validação do campo nome (mínimo 3 caracteres e não pode estar em 'branco'...
    if (userStr2.value.length <= 3 || userStr2.value == false) { 
        msgUser.innerText = "* Nome e sobrenome inválidos..."
        err++  
    }

    // Acesso ao campo de e-mail..
    emailStr2 = document.getElementById("email2").value;
    // Verificação do email (no mínimo a '@')... 
    if (emailStr2.indexOf("@") < 0) { 
        msgEmail.innerText = "* E-mail inválido..."
        err++
    }

    // Acesso aos botões radio (enquete) como array...
    let arr2 = document.getElementsByName('opcao2') 
    // Chamada da função 'radioValid()' para verificar o botão "radio" selecionado.
    let opcao2 = radioValid(arr2)  
    opcao2 = opcao2 || false 
    if (!opcao2) {
        msgRad.innerText = "* Selecione uma opção..."
        err++ 
    }  
    
    function radioValid(botoes) { 
        let n = botoes.length 
        // Verifica se um dos botões foi o escolhido, se sim, retorna o seu valor...    
        for(let i = 0; i < n; i++) { 
            if(botoes[i].checked) 
               return botoes[i].value 
        } 
    } 

    // Acesso ao valor da caixa de seleção (booleano - true/false)... 
    sel2 = document.getElementById("sel2").value;  
    if(!sel2) {
        msgSel.innerText = "* Selecione uma opção..."
        err++ 
    }


    // Envio do formulário, se não houver erro nos campos.
    if (!err) { 
        // Informação dos demais dados para a conclusão do envio padrão...
        formulario2.action="mailto:email@domain.com";
        formulario2.method="post";
        formulario2.enctype="text/plain";
    } 
    else {
        // Cancelamento do envio padrão se houver erro em algum campo.
        event.preventDefault()
    }
});



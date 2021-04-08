// Arquivo: dinamico.js

// CRIA TAG <div> COM O CONTEÚDO “TEXTO DINÂMICO” ANTES DA DIV DE ID “div1”.
document.body.onload = adcElemento;        // Chama função no onload **(Ao carregar a página)...
function adcElemento () {    
   divNova = document.createElement("div");  // Cria o novo elemento ‘div’ .
   let conteudoNovo = document.createTextNode("Texto dinâmico!!!");
   divNova.appendChild(conteudoNovo); // Adiciona o texto criado à nova ‘div’.
   // “conteudoNovo” é um ‘nó’ de texto. 

   let divAtual = document.getElementById("div1"); // Acessa a ‘div1’ do HTML.
   document.body.insertBefore(divNova, divAtual); 
   // Insere a “divNova” antes da “divAtual” (o novo elemento e seu conteúdo ao DOM). 
}

// CRIAÇÃO DE IMAGENS E OUTROS ELEMENTOS
bt_img.onclick= function() {
    let img = document.createElement("IMG"); // Atribuimos o elemento IMG a variável img;
    img.setAttribute("src", "imagem1.jpg"); // Atributo de "source" (pathname da img. criada)";
    img.setAttribute("width", "304");        // Atributo da largura;
    img.setAttribute("height", "228");       // Atributo da altura;
    img.setAttribute("alt", "Sexy boi");     // Atributo do txt. alternativo;
    document.body.appendChild(img);          // Incluimos o conteúdo criado no corpo da página.
}


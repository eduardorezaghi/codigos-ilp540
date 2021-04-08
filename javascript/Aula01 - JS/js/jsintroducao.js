/* alert('Arquivo externo!');                        //  Exibe um aviso de alerta */
//let nome = prompt('Informe seu nome: ');             /* Solicita uma entrada de dados */
//let resposta = confirm('Hoje é sexta-feira?');       /* Solicita uma resposta (s/n) */

//alert(nome);
//alert(resposta);

//console.log(nome);                      /* Emite uma saída no console */
//console.log(resposta);                  
console.log(Number.MIN_SAFE_INTEGER);   /* Emite o valor mínimo seguro de um num. inteiro */
console.log(Number.MAX_SAFE_INTEGER);   /* Emite o valor máximo seguro de um num. inteiro */
console.log(Number.MIN_VALUE);          /* Emite o valor mínimo de um num. inteiro */
console.log(Number.MAX_VALUE);          /* Emite o valor máximo de um num. inteiro */
console.log(typeof(nome));              /* typeof(variavel) mostra o tipo da variável (nesse caso, string) */
console.log(typeof(resposta));          /* typeof(variavel) mostra o tipo da variável (nesse caso, boolean)*/


/* Por questão de segurança é melhor escrever com DOM. Alterar       
*  um conteúdo é mais seguro que incluir através do document.write().
*  document.write() cria um novo fluxo de documento.
*/
document.write("Hoje é sexta-feira.")               /* Escrever em sites(documentos) com JavaScript. */
document.write("<h1>Javascript com HTML!</h1>");    /* Escrever em sites(documentos) com JavaScript. */
document.write("Hoje é sexta-feira " + Date() )      /* Escrever em sites(documentos) com JavaScript. */

// Operações básicas de atribuição no JavaScript
let a = 2+3
let b = 2*4
b += 4;
++b;
a-- + 2;
console.log("Resultado de 'a-- + 2': " + a);
let c = b % a;
console.log("Resultado da operação: " + c);

let x = 30;
let w = 3 * 2;
let y = x / w;
let z = y++ +2;
--z;
resp = (z==7) ? "S" : "N";
console.log(resp);

a = "2" + 3;    // "23" (string)
b = "2a" + 3;   // "2a3" (string)
c = +"2" + 3;   // 5 (number)
d = +"2a" + 3;  // NaN
e = "2" * 3;    // 6 (number)
f = "3" - 1;    // 2 (number)
g = "6" / 3;    // 2 (number)
h = 1 + true;   // 2 (number)

/*
s = String(variável) 
b = Boolean(variável)
n = parseInt(variável,10)
n = parseFloat(variável)
n = Number(variável) 
Obs.: ‘n’ pode retornar como NaN.
A função isNaN(n) verifica se o conteúdo da "variável” não é um número (NaN). 
Atenção: 
4 e “4” são números para a função! 
*/

let a1 = "15 de outubro";
console.log("Tipo de a1: " + typeof(a1));
a1 = parseInt(a1);
console.log("Tipo de a1: " + typeof(a1));
let b1 = 2020;
//alert( typeof(String(b1))); 
var c1 = (a1 + b1);             // 15 + 2020
console.log(c1);                // Resultado: 2035


// Valor.toFixed(num_casas) arredonda as casas decimais de um número real.
let n = 12.3764;
/* Faça a atribuição a ‘n’ para salvar a alteração efetuada. */
n = n.toFixed(2);           /* Arredonda valor. */
console.log(n);


// Condição if-else no JavaScript:
let n1=7;
if (n1 > 5) {
    if (n1 % 2 == 0) 
        alert("Variável 'n1' é maior que cinco e par.");

    else alert(" 'n1' é maior que cinco e ímpar."); 
    
} 
else alert(" 'n1' é menor ou igual a cinco.");


// Função Date
var Data = new Date(); // Retorna um valor para Data em mili-segundos (ms)
console.log(Data);
var novaData = new Date("");
//console.log(novaData);

// Quantos dias faltam para o próximo feriado e para o seu aniversário

var Feriado = new Date("Oct 12 2020");
console.log(Feriado);
var Hoje = new Date();
let Intervalo = Feriado - Hoje;
console.log("Intervalo em mili-segundos = " + Intervalo + "ms");
var IntervaloConv = parseInt(((((Intervalo/1000)/60)/60)/24));
console.log(IntervaloConv);



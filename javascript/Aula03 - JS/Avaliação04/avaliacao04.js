/* Escolha uma das formas de criação de objetos.
*  Crie um script que solicite o nome, a matrícula e a
*  nota final do aluno através de campos do tipo ‘input’;
*  Salve as informações em propriedades do objeto;
*  Imprima no documento os dados do aluno através de um método do objeto.  
*  Crie novos objetos para dados de outros alunos.
*  Utilize Objeto, Função, Loop, input do form, DOM… 
*/
class Aluno {
    constructor(nome, mat, nf) {
        this.Nome = nome;
        this.Matricula = mat;
        this.NotaFinal = nf;
        this.print = function (){
            return `Nome: ${this.Nome} <br> Matrícula: ${this.Matricula} <br> Nota Final: ${this.NotaFinal}`
        }
    }
}
let dados = document.createElement('p');
enviar.addEventListener("click", () => {
        let aluno1 = new Aluno(nome.value, matricula.value, nota_final.value);
        
        dados.textContent = aluno1.print();
        document.body.appendChild(dados);
        nome.value = "", matricula.value = "", nota_final.value = "";

        let aluno2 = new Aluno();
            aluno2.Nome = "Rogério";
            aluno2.Matricula = "178023-12";
            aluno2.NotaFinal = 10;
            for (i in aluno2) console.log(aluno2[i]);   
            
        let aluno3 = new Aluno ();
            aluno3.Nome = "Alana";
            aluno3.Matricula = "178023-13";
            aluno3.NotaFinal = 9.5;
            for (i in aluno3) console.log(aluno3[i]); 

        let aluno4 = new Aluno ();
            aluno4.Nome = "Douglas";
            aluno4.Matricula = "178023-14";
            aluno4.NotaFinal = 9.5;
            for (i in aluno4) console.log(aluno4[i]);
            
        let aluno5 = new Aluno();
                /* ... */
    })

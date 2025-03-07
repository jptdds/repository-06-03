// Crie um programa que receba o nome do aluno, o nome da UC. a nota do aluno e retorne seu desempenho Considere:
// 0 a 6 = BAIXO DESEMPENHO
// 6 A 8 = BOM DESEMPENHO
// 8 A 10 EXCELENTE DESEMPENHO

// var para nomes

var nome = "JP"
var uc = "SENAI"

let nota1 = 5;
let nota2 = 7;
let nota3 = 8;
let total = nota1 + nota2 + nota3;
let totalMedia = total /3

if(totalMedia <=6 ) {
    console.log(nome,"Sua nota foi pessima, você está reprovado!!!")

}
if(totalMedia >6.1 && totalMedia <8){
    console.log(nome , ",Sua nota está boa, mas poderia melhorar.")
}
if(totalMedia <=10 && totalMedia >=8.1){
    console.log(nome,",Parabéns a sua nota está execelnte.")
}

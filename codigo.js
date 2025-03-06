let num1 = 10;
let num2 = 23;
let str1 = "15";
let str2 = "55";
let str1ParaNum = parseInt(str1);
let num2ParaStr = num2.toString();


console.log(num1 + num2);
console.log(str1 + str2);
console.log(num1 + str1ParaNum);
console.log(num2ParaStr + str2);


//parseInt --> de String para inteiro
//parseFloat --> 


// for (expressaoInicial ; condicao; incremento){ declaracao ....>< }
// Exemplo 
// for (let i = 0; i < 5; i++){      }

// seuquenciia numeros.... loop

// mudando o ++ (++ É CALUCULADO SEGUIDO) mudando para = 10 pula linda calculando 10 em 10
for(let i=0;i<100;i+=10){
    console.log("O numero da vez é " ,i);
}
 let numeroSurpresa = 1;
 for(let i=0; i<6;i++){
    console.log(numeroSurpresa)
    numeroSurpresa = numeroSurpresa + 10;

 }

 //LACOS DE REPETICAO EXEMPLO VAR X = 5; WHOLE (X>0) { CONSOLE.LOG("CONTAGEM REGRESSIVA: " +x); X=L;}

 let contagem = 10;
 while(contagem>=0){
    console.log("Contagem REGRESSIVA: " +contagem);
    contagem -= 1;

 }
 console.log("CONGRAGULATIONS!!!!!");
//CONTAGEM PROGRESSIVA USANDO [FOR]

for(var i=0; i<10; i++){
    console.log(i);
    console.log("CONTAGEM EM FOR REGRESSIVA: " ,i);
}

// de 0 a 10

//if (condição) afirmação1 [else afirmação2]





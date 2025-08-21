let readline = require('readline-sync');

let nmr1 = Number( readline.question ("digite o primeiro numero: "))
let nmr2 = Number( readline.question ("digite o segundo numero: "))

console.log("opção 1 soma")
console.log("opção 2 divisão")
console.log("opção 3 multiplicação")
console.log("opção 4 subtração")

let opcao = readline.question ("digite uma das opções: ")
switch (opcao){
    case "1": 
    console.log ("o seu resultado foi: ", nmr1 + nmr2)
    break;
    case "2":
    console.log ("o seu resultado foi:", nmr1 / nmr2)
    break;
    case "3":
    console.log ("o seu resoltado foi:", nmr1 * nmr2)
    break;
    case "4":
    console.log  ("o seu resultado foi:" , nmr1 - nmr2)
    break;
}
















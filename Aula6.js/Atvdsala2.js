let readline = require('readline-sync');

let nmr1 = Number( readline.question ("digite o primeiro numero"))
let nmr2 = Number( readline.question ("digite o segundo numero"))

console.log("opção1 soma")
console.log("opção2 divisão")
console.log("opção3 multiplicação")
console.log("opção4 subtração")

let opcao = readline.question ("digite uma das opções")
switch (opcao){
    case "opção1": 
    console.log ("o seu resultado foi: ", nmr1 + nmr2)
    break;
    case "opção2":
    console.log ("o seu resultado foi:", nmr1 / nmr2)
    break;
    case "opção3":("o seu resoltado foi:", nmr1 * nmr2)
    break;
    case "opção4": ("o seu resultado foi:" , nmr1 - nmr2)
}
















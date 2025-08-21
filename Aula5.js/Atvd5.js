let readline = require('readline-sync');

console.log ("formulario perguntas")

let nome = readline.question("digite seu nome: ")
let dia = readline.question("dia do seu nascimento:")
let mês = readline.question("mês do seu nascimento: ")
let ano = readline.question("ano do seu nascimento: ")
let telefone = readline.question("qual o seu numero: ")
let idade = readline.question("você é maior de idade? ")
let temAnimal = readline.question("você tem animal em casa?" )
if (temAnimal=="sim"){
let qtAnimais = readline.question("quantos animais tem?")
}

console.log ("formulario dados") 

console.log ("Nome: ", nome)
console.log ("sua data de nascimento): ", ("dia"+ "/"+ "mês"+ "/"+ "ano")
console.log ("telefone: ", telefone)
console.log ("idade: ", idade)
console.log ("temAnimal: ", )


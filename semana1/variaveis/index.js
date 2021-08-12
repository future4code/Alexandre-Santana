/* Exercício 1

let a = 10 (Foi atribuída a variável "a" o valor de 10)

let b = (10 Foi atribuída a variável "b" o valor de 10)

console.log(b) (Irá imprimir o resultado 10)

b = 5 (Foi atribuído um novo valor para a variável "b", agora o valor é 5)

console.log(a, b) (Irá imprimir (10, 5))
*/

/* Exercício 2

let a = 10 (Foi atribuída a variável "a" o valor de 10)
let b = 20 (Foi atribuída a variável "b" o valor de 20)
c = a ( Foi atribuído a "c" o mesmo valor de "a")
b = c ( Foi atrabuído a "b" o mesmo valor de "c", que por sua vez é o mesmo valor de "a", conforme declarado acima)
a = b ( Foi atribuído ao "a" o valor de "b", que por sua vez já tinha o mesmo valor de "a" e "c")

console.log(a, b, c) ( Sendo assim, nessa linha será impresso (10, 10, 10))
*/

/* Exercício 3

let cargaHorariaDiaria = prompt("Quantas horas você trabalha por dia?")

let valorDaDiaria = prompt("Quanto você recebe por dia?")

alert("Você recebe ${cargaHorariaDiaria/valorDaDiaria} por hora") ( Irá informar por meio da divisão da carga horária diária pela quantidade de horas trabalhadas, quanto se recebe por hora trabalhada)
*/

/* Exercício de escrita de código

Exercício 1*/

let nome = undefined
let idade = undefined

console.log(typeof nome)
console.log(typeof idade)
/* Foi impresso "undefined" porque nenhum valor foi atribuido a variável. Se fosse uma palavra seria impresso "string", se fosse um valor numeral, seria impresso "numbers" e se fosse valores como "true or false" seria impresso como "booleans"
*/

nome = prompt("Qual o seu nome?")
idade = prompt("Qual a sua idade?")
console.log(nome)
console.log(idade)

console.log(typeof nome)
console.log(typeof idade)
/* Notei que ambas estão identificadas como strings*/

idade = Number(idade)

console.log(typeof idade)
/* Após fazer a conversão, no typeof idade, retorna como number.*/

console.log("Olá", nome, ", você tem", idade, "anos.")

/* Exercício 2*/

let pergunta1 = prompt("Hoje é Segunda-feira?")
let pergunta2 = prompt("Está gostando de JavaScript?")
let pergunta3 = prompt("Está pensando em desistir?")

let respostaPergunta1 = "Sim"
let respostaPergunta2 = "Sim"
let respostaPergunta3 = "Não"

console.log("Hoje é Segunda-feira? -", respostaPergunta1)

console.log("Está gostando de JavaScript? -", respostaPergunta2)

console.log("Está pensando em desistir? -", respostaPergunta3)

/* Exercício 3*/

let a = 10
let b = 25

console.log(a, b)

c = a
a = 25
b = c

console.log(a, b)

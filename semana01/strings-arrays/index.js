// Exercícios de interpretação de código

// let array
// console.log('a. ', array) // undefined - Porque não foi atribuído um valor para a let array.

// array = null
// console.log('b. ', array) // null - Porque o valor atribuído a let array foi "null".

// array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// console.log('c. ', array.length) // 11 - Porque dentro dessa array tem 11 números, e o comando length informa qual a quantidade de itens dentro de uma array.

// let i = 0
// console.log('d. ', array[i]) // 3 - Porque o "i" entre colchetes informa a posição informa a posição de um item na array, que no caso, como "i" vale 0, ele informa a primeira posição do array.

// array[i+1] = 19
// console.log('e. ', array) // 11 - Continua tendo 11 itens, uma vez que "i" é a posição 0, +1 é a próxima, no caso, a posição 1, que está o número 4, no entanto, para essa posição foi atribuído um novo valor (19), mudando a sequencia, mas mantendo o tamanho da array.

// const valor = array[i+6]
// console.log('f. ', valor) // 9 - "i" é a posição 0, onde está o 3, +6 números a direita dele, achamos o 9.

// 2. Leia o código abaixo com atenção 

// const frase = prompt("Digite uma frase")

// console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)

// Qual será o valor impresso no console se a entrada do usuário for: "Subi num ônibus em Marrocos"?

// SUBI NUM ÔNIBUS EM MIRROCOS - Porque o primeiro comando altera a frase toda para MAIÚSCULO e em seguida pede que substitua todas as letras "A" por "I", e posteriormente informe quantos itens tem a frase, no caso, 27.

// Exercícios de escrita de código

// 1. Faça um programa que pergunte ao usuário seu nome e seu e-mail. Em seguida, Imprima no console a seguinte mensagem:

// O e-mail `emailDoUsuario` foi cadastrado com sucesso. Seja bem-vinda(o), `nomeDoUsuario`!

const nomeDoUsuario = prompt("Qual o seu nome?")
const emailDoUsuario = prompt("Qual o seu e-mail?")

console.log(`O e-mail ${emailDoUsuario} foi cadastrado com sucesso. Seja bem-vinda(o), ${nomeDoUsuario}!`)

// 2. Faça um programa que contenha um array com 5 das suas comidas preferidas, armazenado em uma variável. 

const minhasComidasPreferidas = ["Churrasco", "Salmão", "Lasanha", "Batata", "Pizza"]

// Em seguida, siga os passos:

//     a) Imprima no console o array completo

console.log(minhasComidasPreferidas)

//     b) Imprima no console a mensagem "Essas são as minhas comidas preferidas: ", seguida por cada uma das comidas, **uma embaixo da outra**.

console.log(`Essas são as minhas comidas preferidas: 
${minhasComidasPreferidas[0]}
${minhasComidasPreferidas[1]}
${minhasComidasPreferidas[2]}
${minhasComidasPreferidas[3]}
${minhasComidasPreferidas[4]}`)

//     c) Aqui vai um desafio: pergunte ao usuário uma comida preferida. Troque a segunda comida da sua lista pela inserida pelo usuário. Imprima no console a nova lista

const comidaPreferidaUsuario = prompt("Qual a sua comida preferida?")

minhasComidasPreferidas[0+1] = comidaPreferidaUsuario

console.log(minhasComidasPreferidas)

// 3. Faça um programa, seguindo os passos:

// a) Crie um array vazio e guarde-o em uma variável, chamada `listaDeTarefas`

const listaDeTarefas = []

// b) Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array

const tarefa1 = prompt("Cite uma tarefa que você precisa realizar hoje")
const tarefa2 = prompt("Cite outra tarefa que você precisa realizar hoje")
const tarefa3 = prompt("Cite mais uma tarefa que você precisa realizar hoje")

// c) Imprima o array no console

console.log([tarefa1, tarefa2, tarefa3])

// d) Peça ao usuário que digite o **índice** de uma tarefa que ele já realizou: 0, 1 ou 2 

const tarefaRealizada = Number(prompt("Qual tarefa você já realizou hoje? Para primeira digite 0, para a segunda digite 1 e para teceira digite 2"))

listaDeTarefas.push(tarefa1, tarefa2, tarefa3)

// e) Remova da lista o item de índice que o usuário escolheu.

listaDeTarefas.splice(tarefaRealizada, 1)

// f) Imprima o array no console

console.log(listaDeTarefas)







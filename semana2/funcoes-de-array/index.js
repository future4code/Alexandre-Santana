// Exercícios de interpretação de código

// 1. Leia o código abaixo:

// const usuarios = [
//   { nome: "Amanda Rangel", apelido: "Mandi" },
//   { nome: "Laís Petra", apelido: "Laura" },
//   { nome: "Letícia Chijo", apelido: "Chijo" }
// ]

// const novoArrayA = usuarios.map((item, index, array) => {
//    console.log(item, index, array)
// })

// a) O que vai ser impresso no console?

// Será impresso toda a array, com nome, apelido e posição.

// 2. Leia o código abaixo:

// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" },
//   ]
  
//   const novoArrayB = usuarios.map((item, index, array) => {
//      return item.nome
//   })
  
//   console.log(novoArrayB)

  // a) O que vai ser impresso no console?

    // Será impresso os nomes [ "Amanda Rangel", "Laís Petra", "Letícia Chijo"]

  // 3. Leia o código abaixo:

//   const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" },
//   ]
  
//   const novoArrayC = usuarios.filter((item, index, array) => {
//      return item.apelido !== "Chijo"
//   })
  
//   console.log(novoArrayC)

  // a) O que vai ser impresso no console?  // Será impresso no console os apelidos diferentes de "Chijo", ou seja, ["Mandi", "Laura"].


// Exercícios de escrita de código

// 1. Dado o seguinte array de cachorrinhos que são clientes de um pet shop, realize as operações pedidas nos itens abaixo utilizando as funções de array map e filter:

const pets = [
   { nome: "Lupin", raca: "Salsicha"},
   { nome: "Polly", raca: "Lhasa Apso"},
   { nome: "Madame", raca: "Poodle"},
   { nome: "Quentinho", raca: "Salsicha"},
   { nome: "Fluffy", raca: "Poodle"},
   { nome: "Caramelo", raca: "Vira-lata"},
]

// a) Crie um novo array que contenha apenas o nome dos doguinhos
    const novoArrayNomes = pets.map((item, index, array) => {
        return item.nome
    })
        console.log(novoArrayNomes)

// b) Crie um novo array apenas com os [cachorros salsicha](https://www.youtube.com/watch?v=YQ404vwjzus)

    const novoArraySalsicha = pets.filter((item, index, array) => {
        return item.raca === "Salsicha"
    })
        console.log(novoArraySalsicha)

// c) Crie um novo array que possuirá mensagens para enviar para todos os clientes que são poodles. A mensagem deve ser: "Você ganhou um cupom de desconto de 10% para tosar o/a `[NOME]`!"

    const novoArrayMensagemPoodles = pets.filter((item, index, array) => {
        return item.raca === "Poodle"
        
    })
    
    console.log(`Você ganhou um cupom de desconto de 10% para tosar o/a `)
      
//Exercícios de interpretação de código

// 1. Leia o código abaixo:

// const filme = {
// 	nome: "Auto da Compadecida", 
// 	ano: 2000, 
// 	elenco: [
// 		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
// 		"Virginia Cavendish"
// 		], 
// 	transmissoesHoje: [
// 		{canal: "Telecine", horario: "21h"}, 
// 		{canal: "Canal Brasil", horario: "19h"}, 
// 		{canal: "Globo", horario: "14h"}
// 		]
// }

// console.log(filme.elenco[0])
// console.log(filme.elenco[filme.elenco.length - 1])
// console.log(filme.transmissoesHoje[2])

// a) O que vai ser impresso no console?

// console.log(filme.elenco[0]) - Irá imprimir a primeira posição da array elenco, no caso, "Matheus Nachtergaele".

// console.log(filme.elenco[filme.elenco.length - 1]) - Irá imprimir a última posição da array elenco, no caso, "Virginia Cavendish".

// console.log(filme.transmissoesHoje[2]) - Irá imprimir a terceira posição da array transmissoesHoje, no caso, {canal: "Globo", horario: "14h"}

// 2. Leia o código abaixo:

// const cachorro = {
// 	nome: "Juca", 
// 	idade: 3, 
// 	raca: "SRD"
// }

// const gato = {...cachorro, nome: "Juba"}

// const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

// console.log(cachorro)
// console.log(gato)
// console.log(tartaruga)

// a) O que vai ser impresso no console?

// // console.log(cachorro) - nome: "Juca", idade: 3, raca: "SRD"

// console.log(gato) - nome: "Juba", idade: 3, raca: "SRD"

// console.log(tartaruga) - nome: "Jubo", idade: 3, raca: "SRD"


// b) O que faz a sintaxe dos três pontos antes do nome de um objeto?

    // Ela copia um objeto desejado, permitindo alterações nas propriedades desejadas.

    // 3. Leia o código abaixo:

    // function minhaFuncao(objeto, propriedade) {
    //     return objeto[propriedade]
    // }
    
    // const pessoa = {
    //   nome: "Caio", 
    //   idade: 23, 
    //   backender: false
    // }
    
    // console.log(minhaFuncao(pessoa, "backender"))
    // console.log(minhaFuncao(pessoa, "altura"))

    // a) O que vai ser impresso no console?

    // console.log(minhaFuncao(pessoa, "backender")) - false

    // console.log(minhaFuncao(pessoa, "altura")) - Undefined

    // b) Explique o valor impresso no console. Você sabe por que isso aconteceu?

    // console.log(minhaFuncao(pessoa, "backender")) - Imprimiu "false" porque isso foi definido para propriedade "backender"

    // console.log(minhaFuncao(pessoa, "altura")) - Imprimiu Undefined porque a propriedade "altura" não foi definida e nem a ela tribuído um valor.

    // Exercícios de escrita de código

    // 1. Resolva os passos a seguir:

    // a) Crie um objeto. Ele deve conter duas propriedades: nome (string) e apelidos (um array que sempre terá exatamente três apelidos). Depois, escreva uma função que recebe como entrada um objeto e imprime uma mensagem no modelo abaixo: 

    const nomeApelido = {
        nome: "Alexandre",
        apelidos: ["Ale", "Alê", "Rafa"]
    }

    function imprimeNoConsole(nomeApelido){
        const mensagem = `Eu sou ${nomeApelido.nome}, mas pode me chamar de: ${nomeApelido.apelidos[0]}, ${nomeApelido.apelidos[1]} ou ${nomeApelido.apelidos[2]}.`
        return mensagem
    }
    console.log(imprimeNoConsole(nomeApelido))

    // b) Agora, usando o operador spread, crie um novo objeto mantendo o valor da propriedade nome, mas com uma nova lista de três apelidos. Depois, chame a função feita no item anterior passando como argumento o novo objeto

        const dados2 = {
            ...nomeApelido,
            apelidos: ["Xan", "Alê", "Ju"]
    }
    function imprimeNoConsole(dados2){
        const mensagem2 = `Eu sou ${dados2.nome}, mas pode me chamar de: ${dados2.apelidos[0]}, ${dados2.apelidos[1]} ou ${dados2.apelidos[2]}.`
        return mensagem2
    }
    console.log(imprimeNoConsole(dados2))

    // 2. Resolva os passos a seguir:

    // a) Crie dois objetos diferentes com as seguintes propriedades: nome, idade e profissão.

        const objetoUm = {
            nome: "Alexandre",
            idade: 37,
            profissao: "Dev"
        }
        const objetoDois = {
            nome: "Bruno",
            idade: 23,
            profissao: "Instrutor"
        }

        // b) Escreva uma função que receba esses objetos e retorne um array com as seguintes informações:

            function retornaArray(objetoUm){
                const dadosUm = 
                    [objetoUm.nome, objetoUm.nome.length, objetoUm.idade, objetoUm.profissao, objetoUm.profissao.length]
                return dadosUm
            }
            console.log(retornaArray(objetoUm))
            console.log(retornaArray(objetoDois))

    // 1. O valor de `nome`
    // 2. O numero de caracteres do valor `nome`
    // 3. O valor de `idade`
    // 4. O valor de `profissão`
    // 5. O numero de caracteres do valor `profissão`

    
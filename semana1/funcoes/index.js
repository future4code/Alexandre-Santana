// Exercícios de interpretação de código

// 1. Leia o código abaixo:

// function minhaFuncao(variavel) {
// 	return variavel * 5
// }

// console.log(minhaFuncao(2))
// console.log(minhaFuncao(10))

// a) O que vai ser impresso no console?

// Será impresso 10 e 50, respectivamente.

// b) O que aconteceria se retirasse os dois `console.log` e simplesmente invocasse a função `minhaFuncao(2)` e `minhaFuncao(10)`? O que apareceria no console?

// Nada. Não aparece nada no console ser que seja dado o comando "console.log".

// 2. Leia o código abaixo

    // let textoDoUsuario = prompt("Insira um texto");// Esse comando faz uma pergunta ao usuário

    // const outraFuncao = function(texto) {
    // 	return texto.toLowerCase().includes("cenoura") // Ele irá retornar o texto do prompt, tranformando todo o texto em letra minúscula e irá buscar a palavra "cenoura" dentro do texto, retornando "true" se a frase tiver essa palavra ou "false" se não tiver.
    // }

    // const resposta = outraFuncao(textoDoUsuario)
    // console.log(resposta)

//     a. Explique o que essa função faz e qual é sua utilidade

        // Respondi em forma de comentário ao lado do código.

//     b. Determine qual será a saída no console para cada uma das 3 entradas do usuário:
//          i.   `Eu gosto de cenoura` // true - Porque ele encontra a palavra cenoura
//          ii.  `CENOURA é bom pra vista` // true - Porque a palavra será transformada em minúscula e encontrará a palavra cenoura.
//          iii. `Cenouras crescem na terra` - true - Embora esteja no plural, ele consegue localizar a palavra.

// Exercícios de escrita de código

// Escreva as funções explicadas abaixo:

// a) A função não deve receber nenhum parâmetro e deve imprimir uma mensagem falando algumas informações sobre você, como: 

    const nome = "Alexandre"
    const idade = 37
    const endereco = "Curitiba"
    const profissao = "estudante"

    function informacoesSobreMim() {
    console.log(`Eu sou ${nome}, tenho ${idade}, anos, moro em ${endereco}, e sou ${profissao}.`)
    }

    informacoesSobreMim()

// b)  Agora escreva uma função que receba 4 parâmetros que correspondem às informações de uma pessoa: o nome (`string`), a idade (`number`), a cidade (`string`) e uma profissão (`string`). Ela deve retornar uma `string` que unifique todas as informações da pessoa em uma só mensagem com o template:

    function imprimeDadosPessoais(nome, idade, endereco, profissao) {
        return `Eu sou ${nome}, tenho ${idade} anos, moro em ${endereco} e sou ${profissao}.`
    }
        const minhaFrase = imprimeDadosPessoais("Alexandre", 37, "Curitiba", "estudante")
        console.log(minhaFrase)
        console.log(imprimeDadosPessoais("Alexandre", 37, "Curitiba", "estudante"))


// 2. Escreva as funções explicadas abaixo:

// a) Escreva uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas entradas e retorne o resultado. Invoque a função e imprima no console o resultado.

    function calculeDoisNumeros(numeroUm, numeroDois) {
        return numeroUm + numeroDois
    }
      const resultado = calculeDoisNumeros(5, 20)
      console.log(`2.a)`, resultado)


    // b) Faça uma função que recebe 2 números e retorne um booleano que informa se o primeiro número é maior ou igual ao segundo.

    function calculeMaiorIgual(numeroUm, numeroDois) {
        return numeroUm >= numeroDois
    }
        const primeiroNumero = calculeMaiorIgual(5, 20)
        console.log(`2.b)`, primeiroNumero)

        // c) Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não

    function verificaParOuImpar(numero) {
        return numero % 2 === 0
    }
        const seraQueEhPar = verificaParOuImpar(6)
        console.log(`2.c)`, seraQueEhPar)
        

        //d) Faça uma função que recebe uma mensagem (string) como parâmetro e imprima o tamanho dessa mensagem, juntamente com uma versão dela em letras maiúsculas.

    function tamanhoMensagemMaiuscula(aMensagem) {
        return `${aMensagem.length}, ${aMensagem.toUpperCase()}`
    }
        console.log(`2.d)`, tamanhoMensagemMaiuscula(`Não chore que é pior`))

        // 3. Crie uma função para cada uma das operações básicas (soma, subtração, multiplicação e divisão). Em seguida, peça para o usuário inserir dois números e chame essas 4 funções com esses valores inputados pelo usuário sendo o argumento. Por fim, mostre no console o resultado das operações:

    function some(numeroUm, numeroDois){
        return numeroUm + numeroDois
    }

    function subtraia(numeroUm, numeroDois) {
        return numeroUm - numeroDois
    }

    function multiplique(numeroUm, numeroDois) {
        return numeroUm * numeroDois
    }

    function divida(numeroUm, numeroDois) {
        return numeroUm / numeroDois
    }

    const primeiroNumeroUsuario = Number(prompt(`Insira um número`))
    const segundoNumeroUsuario = Number(prompt(`Insira mais um número`))

    console.log(`3.`, some(primeiroNumeroUsuario, segundoNumeroUsuario))
    console.log(`3.`, subtraia(primeiroNumeroUsuario, segundoNumeroUsuario))
    console.log(`3.`, multiplique(primeiroNumeroUsuario, segundoNumeroUsuario))
    console.log(`3.`, divida(primeiroNumeroUsuario, segundoNumeroUsuario))
    








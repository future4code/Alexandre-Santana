// Exercícios de interpretação de código

// 1. Leia o código abaixo:

// const respostaDoUsuario = prompt("Digite o número que você quer testar")
// const numero = Number(respostaDoUsuario)

// if (numero % 2 === 0) {
//   console.log("Passou no teste.")
// } else {
//   console.log("Não passou no teste.")
// }

    // a) Explique o que o código faz. Qual o teste que ele realiza? 

        // Ele pede que o usuário digite um número qualquer. Informado o número, será verificado se o mesmo é divisivel por 2, se for, retornará "Passou no teste", senão, retornará no console "Não passou no teste".

    // b) Para que tipos de números ele imprime no console "Passou no teste"? 

        // Todos os números que são divisíveis por 2, não tendo resto da divisão.

    // c) Para que tipos de números a mensagem é "Não passou no teste"?

        // Todos os números que divididos por 2, terão um resto da divisão, no caso, os números ímpares.


    // 2. O código abaixo foi feito por uma pessoa desenvolvedora, contratada para automatizar algumas tarefas de um supermercado:

    // let fruta = prompt("Escolha uma fruta")
    // let preco

    // switch (fruta) {
    // case "Laranja":
    //     preco = 3.5
    //     break;
    // case "Maçã":
    //     preco = 2.25
    //     break;
    // case "Uva":
    //     preco = 0.30
    //     break;
    // case "Pêra":
    //     preco = 5.5
    //     break; // BREAK PARA O ITEM c.
    // default:
    //     preco = 5
    //     break;
    // }
    // console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

    // a) Para que serve o código acima?

        // Para que cada fruta ao ser consultada, informe o respectivo preço.


    // b) Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?

        // O preço da fruta Maçã é R$ 2.25

    // c) Considere que um usuário queira comprar uma `Pêra`, qual seria a mensagem impressa no console se retirássemos o `break` que está logo acima do `default` (o `break` indicado pelo comentário "BREAK PARA O ITEM c.")?

        // O preço impresso seria o que foi definido para os demais itens não relacionados, no caso, R$ 5.00. Motivo é que sem o comando brack, a informação acima não fica retida.

    // 3. Leia o código abaixo:

    // const numero = Number(prompt("Digite o primeiro número."))

    // if(numero > 0) {
    // console.log("Esse número passou no teste")
	// let mensagem = "Essa mensagem é secreta!!!"
    // }

    // console.log(mensagem)

    // a) O que a primeira linha está fazendo?

        // Definindo uma constante de número que será informada pelo usuário.

    // b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?

        // A mensagem será ""Esse número passou no teste"".
        // Não trará mensagem nenhuma, pois essa condição não foi definida.

    // c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.

        // Sim. Dentro do escopo não foi definido nada além da primeira condição, sendo assim, ou ela retona a mensagem para numeros acima de 1, ou não retorna nada para números abaixo de 0, incluindo o próprio 0.

// Exercícios de escrita de código:

// 1. Faça um programa que pergunta ao usuário qual a idade dele e imprima no console se ele/ela pode dirigir (apenas maiores de idade).  

//     a) Faça um `prompt` para receber a idade do usuário e guarde em uma variável.
//     b) Garanta que essa variável é do tipo `Number`, você deve usar o cast para number para isso.
//     c) Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir. Se sim, imprima no console `"Você pode dirigir"`, caso contrário, imprima `"Você não pode dirigir."`

    const idade = Number(prompt("Qual a sua idade?"))

    if(idade >= 18) {
        console.log("Você pode dirigir")
    } else {
        console.log("Você não pode dirigir")
    }

// 2. Agora faça um programa que verifica que turno do dia um aluno estuda. Peça para digitar M (matutino) ou V (Vespertino) ou N (Noturno). Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". Utilize o bloco if/else

    const turno = prompt("Em que turno você estuda? Digite M para matutino, V para Vespertino ou N para Notuno").toUpperCase()

    if(turno === "M") {
        console.log("Bom dia!")
    } else if (turno === "V") {
        console.log("Boa tarde!")
    } else if (turno === "N") {
        console.log("Boa noite!")
    } else {
        console.log("Você digitou uma letra inválida. Insira M, V ou N.")
    }
    
// 3. Repita o exercício anterior, mas utilizando a estrutura de switch case agora.

    switch(turno) {
        case "M":
            console.log("Bom dia!")
        break
        case "V":
            console.log("Boa tarde!")
        break
        case "N":
            console.log("Boa noite!")
        break
        default:
            console.log("Você digitou uma letra inválida. Insira M, V ou N.")
        break
    }

    // 4. Considere a situação: você vai ao cinema com um amigo ou amiga, porém ele/ela só assistirá a um filme com você se ele for do gênero fantasia e se o ingresso está abaixo de 15 reais. Faça um código que pergunta ao usuário qual o gênero de filme que vão assistir e outra pergunta sobre o preço do ingresso, então verifique se seu amigo ou amiga vai topar assistir o filme. Caso positivo, imprima no console a mensagem: "Bom filme!", caso contrário, imprima "Escolha outro filme :("

        const generoDoFilme = prompt("Qual gênero de filme você vai assistir?").toLowerCase()
        const precoDoIngresso = Number(prompt("Qual o preço do ingresso?"))

        // if(generoDoFilme === "fantasia" && precoDoIngresso <= 15) {
        //     console.log("Bom filme!")
        // } else {
        //     console.log("Escolha outro filme")
        // }

    // DESAFIOS

    //1. Modifique o código do exercício 4 de escrita de código para, antes de imprimir a mensagem "Bom filme!", pergunte ao usuário, pelo prompt qual lanchinho ele vai comprar (pipoca, chocolate, doces, etc) e imprima no console as mensagens "Bom filme!" e "Aproveite o seu [LANCHINHO]", trocando [LANCHINHO] pelo que o usuário colocou no input.

    if(generoDoFilme === "fantasia" && precoDoIngresso <= 15) {
        const lanchinho = prompt("Qual lanchinho você vai comprar?").toLowerCase()
        console.log(`Bom filme!
Aproveite o seu ${lanchinho}`)
    } else {
        console.log("Escolha outro filme")
    }
   
    const nome = prompt("Digite seu nome")
    const tipo = prompt("INternacional ou DOméstico")
    const etapa = prompt("Semi-final SF, Decisão Terceito DT ou Final FI")
    const categoria = Number(prompt("Categoria 1, 2, 3 ou 4?"))
    const quantidade = Number(prompt("Quantidade de inressos?"))

    let precoUnitario
    switch (etapa) {
        case "SF":
            switch(categoria) {
                case 1:
                    precoUnitario = 1320
                    break
                case 2:
                    precoUnitario = 880
                    break
                case 3:
                    precoUnitario = 550
                    break
                case 4:
                    precoUnitario = 220
                    break
                default:
                    break
            }
            break
        case "DT":
            switch(categoria) {
                case 1:
                    precoUnitario = 660
                    break
                case 2:
                    precoUnitario = 440
                    break
                case 3:
                    precoUnitario = 330
                    break
                case 4:
                    precoUnitario = 170
                    break
                default:
                    break
            }
            break
        case "FI":
            switch(categoria) {
                case 1:
                    precoUnitario = 1980
                    break
                case 2:
                    precoUnitario = 1320
                    break
                case 3:
                    precoUnitario = 880
                    break
                case 4:
                    precoUnitario = 330
                    break
                default:
                    break
            }
            break
            default:
            break
    }

        if(tipo === "IN") {
            precoUnitario = precoUnitario * 4.1
        }


    console.log("---Dados da compra---")
    console.log("Nome do cliente:", nome)
    console.log("Tipo do jogo:", tipo)
    console.log("Etapa do jogo:", etapa)
    console.log("Categoria", categoria)
    console.log("---Valores---")
    console.log("Valor do Ingresso:", precoUnitario)
    console.log("Valor Total da Compra", precoUnitario*quantidade)

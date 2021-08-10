// Exercícios de interpretação de código

// 1.Leia o código abaixo. Indique todas as mensagens impressas no console, SEM EXECUTAR o programa.

// const bool1 = true
// const bool2 = false
// const bool3 = !bool2 // oposto da const bool2, no caso, true

// let resultado = bool1 && bool2
// console.log("a. ", resultado) // false && true = False

// resultado = bool1 && bool2 && bool3 // 
// console.log("b. ", resultado) // true && false && true = false

// resultado = !resultado && (bool1 || bool2) // oposto do resultado, no caso, true. Sendo assim, true && (true || true)

// console.log("c. ", resultado) // true && true = true

// console.log("d. ", typeof resultado) // o resultado é true, sendo um tipo de boolean

// 2. Seu colega se aproxima de você falando que o código dele não funciona como devia.  Vamos ajudá-lo: consegue perceber algum problema? O que será impresso no console? 

// Sim. O problema é que o sistema sempre irá ler como uma string, sendo assim, ele junta, e não soma. Desta for ele juntará os números, e não somar. Exemplo: 5 + 5 = 55.


// 3. Para o exercício anterior, sugira ao seu colega uma solução para que o valor impresso no console seja, de fato, a soma dos dois números.

    // let primeiroNumero = Number (prompt("Digite um numero!"))
    // let segundoNumero = Number (prompt("Digite outro numero!"))

    // const soma = primeiroNumero + segundoNumero

    // console.log(soma)

    // Para rodar é necessário converter de string para number. E foi o que fiz, incluindo o Number antes do prompt, seguido de (). Deste modo, ao inserir 5 + 5 irá retornar 10.

    // - **Exercícios de escrita de código**

    // 1. Faça um programa que:

    //     a) Pergunte a idade do usuário

            const idade = prompt("Qual a sua idade?")
            

    //     b) Pergunte a idade do seu melhor amigo ou da sua melhor amiga

            const idadeAmigo = prompt("Qual a idade do seu melhor amigo ou da sua melhor amiga?")
            

    //     c) **Imprima na console** a seguinte mensagem: "Sua idade é maior do que a do seu melhor amigo?", seguido pela resposta (`true` ou `false`)

            console.log("Sua idade é maior do que a do seu melhor amigo?")
            resposta = true
            console.log(resposta)

    //     d) **Imprima na console** a diferença de idade (não tem problema se sair um número negativo)

            const minhaIdade = 37
            const idadeAmiga = 36

            const resultado = minhaIdade - idadeAmiga

            console.log(resultado)

    // 2. Faça um programa que:

    //     a) Peça ao usuário que insira um número **par**

            const numeroPar = prompt("Insira um número par")

    //     b) Imprima na console **o resto da divisão** desse número por 2.

            const restoDaDivisao = numeroPar % 2
            console.log(restoDaDivisao) // O padrão se repete com qualquer número par inserido pelo usuário, uma vez que qualquer número par, dividido por 2 terá resto "zero".
            
    //     c) Teste o programa com diversos números pares. Você notou um padrão? Escreva em um comentário de código.

            // Resposta está em forma de comentário na questão anterior.

    //     d) O que acontece se o usuário inserir um número ímpar? Escreva em um comentário de código

            // Se o número inserido for ímpar, passamos a ter um resto da divisão.


    // 3. Faça um programa que pergunte ao usuário sua idade em anos. Depois, imprima no console 

            const idadeEmAnos = Number(prompt("Qual a sua idade?"))

    //     a) A idade do usuário em meses

            const idadeMeses = idadeEmAnos * 12
            console.log(idadeMeses)
            
    //     b) A idade do usuário em dias

            const idadeEmDias = idadeEmAnos * 365
            console.log(idadeEmDias)

    //     c) A idade do usuário em horas

            const idadeEmHoras = idadeEmAnos * 365 * 24
            console.log(idadeEmHoras)
            

    // 4. Faça um programa que pergunte ao usuário dois números. Em seguida, faça as operações e imprima no console as seguintes mensagens seguidas pelo `true` ou `false`:

            const numero1 = Number(prompt("Insira um número"))
            const numero2 = Number(prompt("Insira outro número"))

    //     O primeiro numero é maior que segundo? true

            const perguntaUm = numero1 > numero2
            console.log(numero1 > numero2)

    //     O primeiro numero é igual ao segundo? false

            const perguntaDois = numero1 === numero2
            console.log(numero1 === numero2)

    //     O primeiro numero é divisível pelo segundo? true

            const perguntaTres = numero1 % numero2
            console.log(numero1 % numero2 === 0)

    //     O segundo numero é divisível pelo primeiro? true

            const perguntaQuatro = numero2 % numero1
            console.log(numero2 % numero1 === 0)
            
    //     obs: O true ou false vai depender dos números inseridos e do resultado das operações.

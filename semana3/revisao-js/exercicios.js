// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    array.sort(function(a,b){
        return a - b
    })
    return array
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    let par = []
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            par.push(array[i])
        }
    }
    return par
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    let parElevadoDois = []
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            parElevadoDois.push(array[i] * array[i])
        }
    }
    return parElevadoDois
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let i = 0
    let maior = -Infinity

    while(i < array.length){
        if(array[i] > maior){
            maior = array[i]
        }
        i++
    }
    return maior
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    
    const [menor, maior] = retornaArrayOrdenado([num1, num2])

    return {
       maiorNumero: maior,
       maiorDivisivelPorMenor: maior % menor === 0,
       diferenca: maior - menor
    }
 }

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   
    const resultado = []

   for (let i = 0; i < n; i++) {
       resultado[i] = 2 * i
   }

   return resultado
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

    if (ladoA === ladoB && ladoB === ladoC)
    return "Equilátero"

    if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC)
    return "Isósceles"

     return "Escaleno"
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
    const arrayOrdenado = retornaArrayOrdenado(array)
    const indiceSegundoMenor = 1
    const indiceSegundoMaior = array.length - 2
 
    return [
       arrayOrdenado[indiceSegundoMaior],
       arrayOrdenado[indiceSegundoMenor]
    ]
 }

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
    return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores.join(", ")}.`
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
    return { ...pessoa, nome: "ANÔNIMO" }
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
    return pessoas.filter(validarPessoa)
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    return pessoas.filter(pessoa => !validarPessoa(pessoa))
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
    
    const somar = (num1, num2) => num1 + num2

   contas.forEach(conta => {

      const somaDosGastos = conta.compras.reduce(somar, 0)

      conta.saldoTotal -= somaDosGastos

      conta.compras = []
   })

   return contas
}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
    
        const compararNomesDeConsulta = (a, b) => a.nome > b.nome ? 1 : -1
     
        return consultas.sort(compararNomesDeConsulta)
     }

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
    const gerarData = string => {

        const [dia, mes, ano] = string.split("/")
  
        return new Date(`${ano}-${mes}-${dia}`)
     }
  
     const compararDatasDeConsulta = (a, b) => {
        if (gerarData(a.dataDaConsulta) > gerarData(b.dataDaConsulta)) {
           return 1
        } else {
           return -1
        }
     }
  
     return consultas.sort(compararDatasDeConsulta)
}
// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo(altura, largura) {
  altura = Number(prompt("Insira um número para altura"))
  largura = Number(prompt("Insira um número para largura"))
  area = altura * largura

  console.log(area)
}
  
// EXERCÍCIO 02
function imprimeIdade(anoAtual, anoDeNascimento) {
  anoAtual = Number(prompt("Insira o ano que estamos"))
  anoDeNascimento = Number(prompt("Insira seu ano de nascimento"))
  idade = anoAtual - anoDeNascimento
  
  console.log(idade)
  }
  
// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  peso = Number(prompt("Insira o seu peso em kg"))
  altura = Number(prompt("Insira sua altura em metros"))
  imc = peso / (altura * altura)
  return imc

  console.log(imc)
  }

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  const nome = prompt("Qual o seu nome?")
  const idade = Number(prompt("Qual a sua idade?"))
  const email = prompt("Qual o seu e-mail?")

  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}
  imprimeInformacoesUsuario()

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  const corFavorita1 = prompt("Qual sua cor favorita?")
  const corFavorita2 = prompt("Qual sua segunda cor favorita?")
  const corFavorita3 = prompt("Qual sua terceira cor favorita?")

  console.log([corFavorita1, corFavorita2, corFavorita3])
}
  imprimeTresCoresFavoritas()

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  const stringEmMaiuscula = string.toUpperCase()
  return stringEmMaiuscula
  
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  const vendasIngressosNecessaria = custo / valorIngresso
  return vendasIngressosNecessaria

  }

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  const mesmoTamanho = string1.length === string2.length
  return mesmoTamanho

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  const primeiraArray = array[0]
  return primeiraArray

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  const ultimoArray = array[array.length - 1]
  return ultimoArray
  }

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  const primeiraArray = array[0]
  const ultimaArray = array[array.length - 1]
  array[0] = ultimaArray
  array[array.length - 1] = primeiraArray

  return array

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {    
  return string1.toLowerCase() === string2.toLowerCase()

  }

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}
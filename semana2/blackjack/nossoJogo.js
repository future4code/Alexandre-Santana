/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
   const mensagemInicial = `Boas vindas ao jogo de Blackjack!`
   console.log(mensagemInicial)

      const somarAsCartas = (cartaUm, cartaDois) => {
      let soma = cartaUm.valor + cartaDois.valor
      return soma
   }

   
   if (confirm(`Quer iniciar uma nova rodada?`)) {
      const primeiraCartaUsuario = comprarCarta()
      const segundaCartaUsuario = comprarCarta()
      const somaCartasUsuario = somarAsCartas(primeiraCartaUsuario, segundaCartaUsuario)

      const primeiraCartaComputador = comprarCarta()
      const segundaCartaComputador = comprarCarta()
      const somaCartasComputador = somarAsCartas(primeiraCartaComputador, segundaCartaComputador)

      console.log(`Usuário - cartas: ${primeiraCartaUsuario.texto} - ${segundaCartaUsuario.texto} - Pontuação: ${somaCartasUsuario}`)
      console.log(`Usuário - cartas: ${primeiraCartaComputador.texto} - ${segundaCartaComputador.texto} - Pontuação: ${somaCartasComputador}`)

      if (somaCartasUsuario > somaCartasComputador){
         console.log("O usuário ganhou!")
      } else if (somaCartasComputador > somaCartasUsuario){
         console.log("O computador ganhou!")
      } else
         console.log("Empate!")
      } else {
         console.log("O jogo acabou")
      }

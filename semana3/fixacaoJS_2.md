``` function calculaPrecoTotal(quantidade) {
  
  const preco = 1.30 * quantidade
  const precoQuantidade = 1.00 * quantidade
  
  if (quantidade >= 12){
    return precoQuantidade
  } else {
    return preco
  }
} ```
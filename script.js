let carrinho = [];

function adicionarAoCarrinho(produto) {
  carrinho.push(produto);
  alert(`"${produto}" adicionado ao carrinho!`);
  console.log('Carrinho:', carrinho);
}

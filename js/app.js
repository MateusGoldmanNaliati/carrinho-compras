function adicionar() {
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value;
    
    let preco = quantidade * valorUnitario;
    let cesta = document.getAnimations('lista-produtos');
    cesta.innerHTML = `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">${preco}</span>
  </section>`;
}
function limpar(){
    
}
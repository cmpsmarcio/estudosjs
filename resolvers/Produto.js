module.exports = {
    precoComDesconto(produto) {
        if (produto.desconto > 0)
        {
            return produto.preco * (1 - (produto.desconto / 100.0))
        }
        else
        {
            return produto.preco 
        }   
    }
}
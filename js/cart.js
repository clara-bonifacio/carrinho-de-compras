var valorTotal = [0,0];
var valorProduto = [49.90, 59.90];
var qtd = [0,0];

function adicionarItem(item) {
    
    qtd[item] += 1;
    var quantidade = document.getElementById("quantidade" + item);
    var total = document.getElementById('total' + item);
    valorTotal[item] = Number.parseFloat(valorProduto[item]) * qtd[item];
    quantidade.innerHTML = qtd[item];
    total.innerHTML = valorTotal[item].toFixed(2);
    subtotalCompra()
}

function removerItem(item) {

    if (qtd[item] > 0){
        qtd[item] -=1
    
        var quantidade = document.getElementById("quantidade" + item);
        var total = document.getElementById('total' + item);
        valorTotal[item] = Number.parseFloat(valorProduto[item]) * qtd[item];
        quantidade.innerHTML = qtd[item];
        total.innerHTML = valorTotal[item].toFixed(2);
        subtotalCompra()
    }
}

function subtotalCompra() {
    
    var valorTotalDaCompra = document.getElementById('valorTotalDaCompra');
    var valor = 0;

    for (var i = 0; i < valorTotal.length; i++) {
        valor += valorTotal[i];
    }
    valorTotalDaCompra.innerHTML = valor.toFixed(2);
}
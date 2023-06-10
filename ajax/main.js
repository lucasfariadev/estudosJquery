window.onload = function(){
    document.getElementById('btn');
    addEventListener('click', btn_click);
}

function btn_click(){
    let pedido = new XMLHttpRequest();

    pedido.onreadystatechange = function(){
        document.getElementById('caixa').innerHTML = this.responseText;
    }
    pedido.open("GET", "dados.txt", true);
    pedido.send();
}
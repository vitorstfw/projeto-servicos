const prestador = JSON.parse(localStorage.getItem("prestadorselecionado"));

if (!prestador){
    alert("Nenhum prestador selecionado");
    window.location.href = "index.html"
}

document.getElementById("nome").textContent = prestador.nome;
document.getElementById("servico").textContent = prestador.servico;
document.getElementById("cidade").textContent = prestador.cidade;
document.getElementById("contato").textContent = prestador.contato;

function confirmarpedido(){
    alert("pedido realizado com sucesso! ✅");

    localStorage.removeItem("prestadorselecionado");

    window.location.href = "index.html";
}
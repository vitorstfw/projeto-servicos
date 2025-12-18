document.addEventListener("DOMContentLoaded", () => {
    carregarPrestadores();

    const campoBusca = document.getElementById("search");
    campoBusca.addEventListener("input", filtrarprestadores);
});

function carregarPrestadores() {
    const lista = document.getElementById("lista-servicos");
    const prestadores = JSON.parse(localStorage.getItem("prestadores")) || [];

    lista.innerHTML = "";

    prestadores.forEach(p => criarcard(p)); 
}

function filtrarprestadores() {
    const termo = document.getElementById("search").value.toLowerCase();
    const lista = document.getElementById("lista-servicos");

    const prestadores = JSON.parse(localStorage.getItem("prestadores")) || [];

    lista.innerHTML = "";

    const filtrados = prestadores.filter(p =>
        p.nome.toLowerCase().includes(termo) ||
        p.servico.toLowerCase().includes(termo) ||
        p.cidade.toLowerCase().includes(termo)
    );

    if (filtrados.length === 0) {
        lista.innerHTML = "<p>Nenhum prestador encontrado.</p>";
        return;
    }
    filtrados.forEach(p => criarcard(p));
}


function criarcard(p) {
    const lista = document.getElementById("lista-servicos");

    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
        <h3>${p.nome}</h3>
        <p><strong>Serviço:</strong> ${p.servico}</p>
        <p><strong>Cidade:</strong> ${p.cidade}</p>
        <p><strong>Contato:</strong> ${p.contato}</p>

        <button onclick="iniciarpedido (ID_PRESTADOR) ">Contratar Serviço</button>
        `;
    lista.appendChild(card);
}






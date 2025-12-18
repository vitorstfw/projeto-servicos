function cadastrarprestador(event) {
    event.preventDefault();

   
       const nome = document.getElementById("nome").value;
        const servico = document.getElementById("servico").value;
        const cidade = document.getElementById("cidade").value;
        const contato = document.getElementById("contato").value;

        const prestadores = JSON.parse(localStorage.getItem("prestadores")) || [];

        const novoprestador = {
            id: Date.now(),
            nome: nome,
            servico: servico,
            cidade: cidade,
            contato: contato,
            valorhora: 80
        };
    
        prestadores.push(novoprestador);

        localStorage.setItem("prestadores", JSON.stringify(prestadores));

        alert("prestador cadastrado com sucesso!");

        event.target.reset();
}
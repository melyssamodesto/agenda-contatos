document.addEventListener("DOMContentLoaded", function() {
    const btnAdicionar = document.getElementById("btn-adicionar");

    btnAdicionar.addEventListener("click", function() {
        const nome = document.getElementById('nome').value;
        const telefone = document.getElementById('telefone').value;

        const table = document.getElementById('tabela-contatos').getElementsByTagName('tbody')[0];
        const newRow = table.insertRow();

        const cell1 = newRow.insertCell(0);
        const cell2 = newRow.insertCell(1);
        cell1.textContent = nome;
        cell2.textContent = telefone;

        document.getElementById('nome').value = '';
        document.getElementById('telefone').value = '';
    });
});
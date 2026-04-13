const placa = document.getElementById("placa")
const modelo = document.getElementById("modelo")
const nome = document.getElementById("nome_solicitante")
const telefone = document.getElementById("telefone")

input.addEventListener('focus', () => {
     console.log('O campo foi selecionado (foco).');
})

function senha_errada() {
    if (placa.value == "" || modelo.value == "" || nome.value == "" || telefone.value == "") {
        var troca_placa = document.getElementById('input_placa')
        troca_placa.style.borderColor = '#ff3c00bd'
        troca_placa.style.boxShadow = '0 0 0 3px rgba(255, 0, 0, 0.15)'
        var troca_modelo = document.getElementById('input_modelo')
        troca_modelo.style.borderColor = '#ff3c00bd'
        troca_modelo.style.boxShadow = '0 0 0 3px rgba(255, 0, 0, 0.15)'
        var troca_nome = document.getElementById('input_nome')
        troca_nome.style.borderColor = '#ff3c00bd'
        troca_nome.style.boxShadow = '0 0 0 3px rgba(255, 0, 0, 0.15)'
        var troca_telefone = document.getElementById('input_telefone')
        troca_telefone.style.borderColor = '#ff3c00bd'
        troca_telefone.style.boxShadow = '0 0 0 3px rgba(255, 0, 0, 0.15)'
    } else {
        window.alert("Deu Certo")
}
}



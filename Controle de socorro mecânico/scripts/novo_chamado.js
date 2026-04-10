var placa = document.getElementById("placa")
    var modelo = document.getElementById("modelo")
    var nome = document.getElementById("nome_solicitante")
    var telefone = document.getElementById("telefone")

function atualizar() {
    if (placa.value == "") {
        var troca_placa = document.getElementById('input_placa')
        troca_placa.style.borderColor = '#ff3c00bd'
        troca_placa.style.boxShadow = '0 0 0 3px rgba(255, 0, 0, 0.15)'
    } else if (modelo.value == "") {
        var troca_modelo = document.getElementById('input_modelo')
        troca_modelo.style.borderColor = '#ff3c00bd'
        troca_modelo.style.boxShadow = '0 0 0 3px rgba(255, 0, 0, 0.15)'
    } else if (nome.value == "") {
        var troca_nome = document.getElementById('input_nome')
        troca_nome.style.borderColor = '#ff3c00bd'
        troca_nome.style.boxShadow = '0 0 0 3px rgba(255, 0, 0, 0.15)'
    } else if (telefone.value == "") {
        var troca_telefone = document.getElementById('input_telefone')
        troca_telefone.style.borderColor = '#ff3c00bd'
        troca_telefone.style.boxShadow = '0 0 0 3px rgba(255, 0, 0, 0.15)'
    }
}

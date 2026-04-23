const inputs_inf_veiculo = [...document.querySelectorAll('.input_inf')]
const btn_salvar_chamado = document.getElementById('salvar_chamado')
const equipe = [...document.querySelectorAll('.equipe_item')]
const btn_urgente = document.getElementById('btn_urgente')
const btn_normal = document.getElementById('btn_normal')
const btn_aguardando = document.getElementById('btn_aguardando')
const botoesPrioridade = document.querySelectorAll('.botoes_prioridade > button') 
const divPrioridade = document.getElementById("inf_prioridade")               

const cores = {
    urgente: 'red',
    normal: 'green',
    aguardando: 'yellow'
}


botoesPrioridade.forEach(botao => {
    botao.addEventListener('click', () => {
        botoesPrioridade.forEach(b => b.classList.remove('selecionado'))
        botao.classList.add('selecionado')

        const classePrioridade = Object.keys(cores).find(c => botao.classList.contains(c))

        if (classePrioridade) {
            divPrioridade.textContent = botao.textContent
            divPrioridade.style.color = cores[classePrioridade]
        }
    })
})

btn_salvar_chamado.addEventListener('click', () => {
    verificar_preenchimento()

    if (!divPrioridade.textContent) {
        alert("Selecione uma prioridade antes de salvar!")
        return
    }

    const inf_placa = document.getElementById('placa').value
    const inf_modelo = document.getElementById('modelo').value
    const inf_nome = document.getElementById('nome').value
    const inf_telefone = document.getElementById('telefone').value
    const problema = [...document.querySelectorAll('select option')].find(el => el.selected).textContent
    const inf_endereco = document.getElementById('endereco').value
    const inf_numero_endereco = document.getElementById('numero_endereco').value

    document.getElementById('inf_placa').innerHTML = inf_placa
    document.getElementById('inf_problema').innerHTML = problema
    document.getElementById('inf_endereco').innerHTML = inf_endereco + ", " + inf_numero_endereco

    console.log("A placa é" + inf_placa + ", o nome é" + inf_nome + ", o modelo é" + inf_modelo + ", o telefone é" + inf_telefone)
    console.log("Prioridade:", divPrioridade.textContent)
    console.log(problema)
})

function verificar_preenchimento() {
    inputs_inf_veiculo.forEach((el) => {
        if (el.value === '') {
            el.parentElement.classList.add('falta_preencher')
        }
    })
}

inputs_inf_veiculo.forEach((el) => {
    el.addEventListener('focus', (evt) => {
        inputs_inf_veiculo.forEach(i => {
            i.parentElement.classList.remove('falta_preencher')
            i.parentElement.classList.remove('selecionado')
        })
        evt.target.parentElement.classList.add('selecionado')
    })

    el.addEventListener('blur', (evt) => {
        evt.target.parentElement.classList.remove('selecionado')
        if (evt.target.value === '') {
            evt.target.parentElement.classList.add('falta_preencher')
        }
    })
})

btn_urgente.addEventListener('click', () => {
    btn_urgente.classList.add('urgente')
    btn_normal.classList.remove('normal')
    btn_aguardando.classList.remove('aguardando')
    divPrioridade.textContent = btn_urgente.textContent
    divPrioridade.style.color = cores.urgente
})

btn_normal.addEventListener('click', () => {
    btn_urgente.classList.remove('urgente')
    btn_normal.classList.add('normal')
    btn_aguardando.classList.remove('aguardando')
    divPrioridade.textContent = btn_normal.textContent
    divPrioridade.style.color = cores.normal
})

btn_aguardando.addEventListener('click', () => {
    btn_urgente.classList.remove('urgente')
    btn_normal.classList.remove('normal')
    btn_aguardando.classList.add('aguardando')
    divPrioridade.textContent = btn_aguardando.textContent
    divPrioridade.style.color = cores.aguardando
})

equipe.forEach((el) => {
    el.addEventListener('click', (evt) => {
        const item = evt.target.closest('.equipe_item')
        equipe.forEach(e => e.classList.remove('equipe_selecionado'))
        item.classList.add('equipe_selecionado')
    })
})
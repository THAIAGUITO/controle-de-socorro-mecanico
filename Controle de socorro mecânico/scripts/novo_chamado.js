const inputs_inf_veiculo = [...document.querySelectorAll('.input_inf')]
const btn_salvar_chamado = document.getElementById('salvar_chamado')
const equipe = [...document.querySelectorAll('.equipe_item')]

function verificar_preenchimento() {
    inputs_inf_veiculo.forEach((el) => {
        if (el.value === '') {
            el.parentElement.classList.add('falta_preencher')
        }
    })
}

btn_salvar_chamado.addEventListener('click', () => {
    verificar_preenchimento()

    const [placa, modelo, nome, telefone] = inputs_inf_veiculo.map(el => el.value)
    console.log("A placa é" + placa + ", o nome é" + nome + ", o modelo é" + modelo + ", o telefone é" + telefone)

    const inf_placa = document.getElementById('inf_placa')
    const inf_modelo = document.getElementById('inf_modelo')
    const inf_nome = document.getElementById('inf_nome')
    const inf_telefone = document.getElementById('inf_telefone')

    inf_placa.textContent = placa
    inf_modelo.textContent = modelo
    inf_nome.textContent = nome
    inf_telefone.textContent = telefone
})

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

const btn_urgente = document.getElementById('btn_urgente')
const btn_normal = document.getElementById('btn_normal')
const btn_aguardando = document.getElementById('btn_aguardando')

btn_urgente.addEventListener('click', () => {
    btn_urgente.classList.add('urgente')
    btn_normal.classList.remove('normal')
    btn_aguardando.classList.remove('aguardando')
})

btn_normal.addEventListener('click', () => {
    btn_urgente.classList.remove('urgente')
    btn_normal.classList.add('normal')
    btn_aguardando.classList.remove('aguardando')
})

btn_aguardando.addEventListener('click', () => {
    btn_urgente.classList.remove('urgente')
    btn_normal.classList.remove('normal')
    btn_aguardando.classList.add('aguardando')
})

equipe.forEach((el) => {
    el.addEventListener('click', (evt) => {
        const item = evt.target.closest('.equipe_item')

        equipe.forEach(e => {
            e.classList.remove('equipe_selecionado')
        })

        item.classList.add('equipe_selecionado')
    })
})

console.log(equipe)


var ver_senha = document.getElementsByClassName("fa-eye")[0];
ver_senha.addEventListener('click', clicar);

function clicar() {
    var input_senha = document.getElementById("password_user");
    if (input_senha.type === "password") {
        input_senha.type = "text";
        ver_senha.classList.remove("fa-eye");
        ver_senha.classList.add("fa-eye-slash");
    } else {
        input_senha.type = "password";
        ver_senha.classList.remove("fa-eye-slash");
        ver_senha.classList.add("fa-eye");
    }
}

const usuarioInput = document.getElementById('email_user');
const senhaInput = document.getElementById('password_user');
const entrar = document.getElementById('botao_login');

entrar.addEventListener('click', () => {
    if (usuarioInput.value === '' || senhaInput.value === '') {
        alert('Por favor, preencha todos os campos.');
    }

    // 1. Busca a lista de funcionários do localStorage
    const funcionarios = JSON.parse(localStorage.getItem('funcionarios')) || [];

    // 2. Percorre o array procurando um funcionário que bata os dois campos se encontrar, retorna o objeto do funcionário encontrado, caso contrário retorna undefined
    const funcionarioEncontrado = funcionarios.find(f => 
        f.usuario === usuarioInput.value && f.senha === senhaInput.value
    );

    // 3. Valida
    if (funcionarioEncontrado) {
        sessionStorage.setItem('usuarioLogado', JSON.stringify(funcionarioEncontrado));
        alert('Login bem-sucedido!');
        window.location.href = '../index.html';
    } else {
        alert('Usuário ou senha incorretos. Tente novamente.');
    }
})
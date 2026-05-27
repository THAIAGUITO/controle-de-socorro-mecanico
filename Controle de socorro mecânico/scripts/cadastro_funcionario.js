class Funcionario {
    constructor(dados) {
        this.foto = dados.foto;
        this.nome = dados.nome;
        this.sobrenome = dados.sobrenome;
        this.cpf = dados.cpf;
        this.dataNascimento = dados.dataNascimento;
        this.telefone = dados.telefone;
        this.email = dados.email;
        this.matricula = dados.matricula;
        this.dataAdmissao = dados.dataAdmissao;
        this.turno = dados.turno;
        this.regiao = dados.regiao;
        this.usuario = dados.usuario;
        this.senha = dados.senha;
        this.nivelAcesso = dados.nivelAcesso;
    }

    exibirInformacoes() {
        console.log(`Nome: ${this.nome} ${this.sobrenome}`);
        console.log(`CPF: ${this.cpf}`);
        console.log(`Data de Nascimento: ${this.dataNascimento}`);
        console.log(`Telefone: ${this.telefone}`);
        console.log(`Email: ${this.email}`);
        console.log(`Matrícula: ${this.matricula}`);
        console.log(`Turno: ${this.turno}`);
        console.log(`Região: ${this.regiao}`);
        console.log(`Data de Admissão: ${this.dataAdmissao}`);
        console.log(`Usuário: ${this.usuario}`);
        console.log(`Nível de Acesso: ${this.nivelAcesso}`);
    }
}

const cadastrar = document.getElementById('salvar_cadastro');

cadastrar.addEventListener('click', () => {
    const novoFuncionario = new Funcionario({
        // foto: document.getElementById('foto').value,
        // nome: document.getElementById('nome').value,
        // sobrenome: document.getElementById('sobrenome').value,
        // cpf: document.getElementById('cpf').value,
        // dataNascimento: document.getElementById('data_nascimento').value,
        // telefone: document.getElementById('telefone').value,
        // email: document.getElementById('email').value,
        // matricula: document.getElementById('matricula').value,
        // dataAdmissao: document.getElementById('data_admissao').value,
        // turno: document.getElementById('turno').value,
        // regiao: document.getElementById('regiao').value,
         usuario: document.getElementById('usuario').value,
         senha: document.getElementById('senha').value,
        // nivelAcesso: document.getElementById('nivel_acesso').value
    })

    const funcionarios = JSON.parse(localStorage.getItem('funcionarios')) || [];

    funcionarios.push(novoFuncionario);

    // 4. Salva a lista atualizada no localStorage
    localStorage.setItem('funcionarios', JSON.stringify(funcionarios));

    alert('Funcionário cadastrado com sucesso!');
})
   
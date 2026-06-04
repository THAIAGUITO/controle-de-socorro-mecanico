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

const cadastrar = document.getElementById("salvar_cadastro");

cadastrar.addEventListener("click", () => {
  // ── Coleta os valores ──────────────────────────────────────────
  const campos = {
    nome: document.getElementById("nome").value.trim(),
    sobrenome: document.getElementById("sobrenome").value.trim(),
    cpf: document.getElementById("cpf").value.trim(),
    dataNascimento: document.getElementById("data_nascimento").value.trim(),
    telefone: document.getElementById("telefone").value.trim(),
    email: document.getElementById("email").value.trim(),
    matricula: document.getElementById("matricula").value.trim(),
    dataAdmissao: document.getElementById("data_admissao").value.trim(),
    turno: document.getElementById("turno").value,
    regiao: document.getElementById("regiao").value,
    usuario: document.getElementById("usuario").value.trim(),
    senha: document.getElementById("senha").value.trim(),
    nivelAcesso: document.getElementById("nivel_acesso").value,
  };

  const cargoSelecionado = document.querySelector(".btn_cargo.on");

  // ── Validações ─────────────────────────────────────────────────
  const erros = [];

  if (!campos.nome) erros.push("Nome");
  if (!campos.sobrenome) erros.push("Sobrenome");
  if (campos.cpf.length < 14) erros.push("CPF (formato: 000.000.000-00)");
  if (!campos.dataNascimento) erros.push("Data de Nascimento");
  if (campos.telefone.length < 15) erros.push("Telefone (formato: (00) 99999-9999)");
  if (!campos.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(campos.email)) erros.push("E-mail válido");
  if (!campos.matricula) erros.push("Matrícula");
  if (!campos.dataAdmissao) erros.push("Data de Admissão");
  if (!campos.turno) erros.push("Turno de Trabalho");
  if (!campos.regiao) erros.push("Região de Atendimento");
  if (!cargoSelecionado) erros.push("Cargo / Função");
  if (!campos.usuario) erros.push("Usuário (login)");
  if (campos.senha.length < 6) erros.push("Senha (mínimo 6 caracteres)");
  if (!campos.nivelAcesso) erros.push("Nível de Acesso");

  // ── Se houver erros, exibe e interrompe ────────────────────────
  if (erros.length > 0) {
    alert("Preencha os campos obrigatórios antes de cadastrar:\n\n• " + erros.join("\n• "));
    return;
  }

  // ── Tudo válido: cria e salva o funcionário ────────────────────
  const novoFuncionario = new Funcionario({
    foto: window.perfilFotoDataUrl || "",
    nome: campos.nome,
    sobrenome: campos.sobrenome,
    cpf: campos.cpf,
    dataNascimento: campos.dataNascimento,
    telefone: campos.telefone,
    email: campos.email,
    matricula: campos.matricula,
    dataAdmissao: campos.dataAdmissao,
    cargo: cargoSelecionado.textContent,
    turno: campos.turno,
    regiao: campos.regiao,
    usuario: campos.usuario,
    senha: campos.senha,
    nivelAcesso: campos.nivelAcesso,
  });

  const funcionarios = JSON.parse(localStorage.getItem("funcionarios")) || [];
  funcionarios.push(novoFuncionario);
  localStorage.setItem("funcionarios", JSON.stringify(funcionarios));

  alert("Funcionário cadastrado com sucesso!");
});

const cpfInput = document.getElementById("cpf");

cpfInput.addEventListener("input", (e) => {
  let valor = e.target.value.replace(/\D/g, "");

  valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
  valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
  valor = valor.replace(/(\d{3})(\d{1,2})$/, "$1-$2");

  e.target.value = valor;
});

const telefoneInput = document.getElementById("telefone");

telefoneInput.addEventListener("input", function () {
  let valor = this.value.replace(/\D/g, "");

  valor = valor.replace(/^(\d{2})(\d)/g, "($1) $2");
  valor = valor.replace(/(\d{5})(\d)/, "$1-$2");

  this.value = valor;
});

const btnCargos = document.querySelectorAll(".btn_cargo");

for (let btn of btnCargos) {
  btn.addEventListener("click", function () {
    btnCargos.forEach((b) => {
      b.classList.remove("on");
    });

    this.classList.add("on");
  });
}

const btnPermissoes = document.querySelectorAll(".btn_ativar");

for (let btn of btnPermissoes) {
  btn.addEventListener("click", function () {
    if (this.classList.contains("on")) {
      this.classList.remove("on");
    } else {
      this.classList.add("on");
    }
  });
}

const btnImage = document.getElementById("btn_image");

btnImage.addEventListener("click", function () {
  const fileInput = document.createElement("input");
  fileInput.type = "file";
  fileInput.accept = "image/jpeg, image/png";

  // Aciona o seletor de arquivo
  fileInput.click();

  fileInput.addEventListener("change", function () {
    const arquivo = fileInput.files[0];
    if (!arquivo) return;

    // Valida o tamanho (máximo 2MB)
    if (arquivo.size > 2 * 1024 * 1024) {
      alert("A imagem deve ter no máximo 2MB.");
      return;
    }

    const reader = new FileReader();

    reader.onload = function (e) {
      const dataUrl = e.target.result;

      // Salva globalmente para uso no cadastro
      window.perfilFotoDataUrl = dataUrl;

      // Atualiza o avatar no formulário
      const avatar = document.querySelector(".avatar");
      avatar.style.backgroundImage = `url(${dataUrl})`;
      avatar.style.backgroundSize = "cover";
      avatar.style.backgroundPosition = "center";
      avatar.textContent = ""; // Remove as iniciais

      // Atualiza o avatar na pré-visualização
      const avatarPreview = document.querySelector(".visualizacao_avatar");
      avatarPreview.style.backgroundImage = `url(${dataUrl})`;
      avatarPreview.style.backgroundSize = "cover";
      avatarPreview.style.backgroundPosition = "center";
      avatarPreview.textContent = "";
    };

    reader.readAsDataURL(arquivo);
  });
});

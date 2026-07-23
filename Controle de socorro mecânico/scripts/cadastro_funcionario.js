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
    this.cargo = dados.cargo;
    this.turno = dados.turno;
    this.regiao = dados.regiao;
    this.usuario = dados.usuario;
    this.senha = dados.senha;
    this.nivelAcesso = dados.nivelAcesso;
    this.status = dados.status || "ativo";
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

  if (erros.length > 0) {
    alert("Preencha os campos obrigatórios antes de cadastrar:\n\n• " + erros.join("\n• "));
    return;
  }

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
    status: "ativo",
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
  valor = valor.replace(/(\d{4})(\d)/, "$1-$2");

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

  fileInput.click();

  fileInput.addEventListener("change", function () {
    const arquivo = fileInput.files[0];
    if (!arquivo) return;

    if (arquivo.size > 2 * 1024 * 1024) {
      alert("A imagem deve ter no máximo 2MB.");
      return;
    }

    const reader = new FileReader();

    reader.onload = function (e) {
      const dataUrl = e.target.result;

      window.perfilFotoDataUrl = dataUrl;
      atualizarChecklist();

      const avatar = document.querySelector(".avatar");
      avatar.style.backgroundImage = `url(${dataUrl})`;
      avatar.style.backgroundSize = "cover";
      avatar.style.backgroundPosition = "center";
      avatar.textContent = "";

      const avatarPreview = document.querySelector(".visualizacao_avatar");
      avatarPreview.style.backgroundImage = `url(${dataUrl})`;
      avatarPreview.style.backgroundSize = "cover";
      avatarPreview.style.backgroundPosition = "center";
      avatarPreview.textContent = "";
    };

    reader.readAsDataURL(arquivo);
  });
});

const inputs_inf_funcionario = [...document.querySelectorAll(".input_inf")];

inputs_inf_funcionario.forEach((el) => {
  el.addEventListener("focus", (evt) => {
    inputs_inf_funcionario.forEach((i) => {
      i.parentElement.classList.remove("falta_preencher");
      i.parentElement.classList.remove("selecionado");
    });
    evt.target.parentElement.classList.add("selecionado");
  });

  el.addEventListener("blur", (evt) => {
    evt.target.parentElement.classList.remove("selecionado");
    if (evt.target.value === "") {
      evt.target.parentElement.classList.add("falta_preencher");
    }
  });
});

function limparInputs() {
  inputs_inf_funcionario.forEach((el) => {
    el.value = "";
    el.parentElement.classList.remove("falta_preencher", "selecionado");
  });

  equipe.forEach((el) => el.classList.remove("equipe_selecionado"));

  document.getElementById("nome").textContent = "";
  document.getElementById("sobrenome").textContent = "";
  document.getElementById("cpf").textContent = "";
  document.getElementById("data_nascimento").textContent = "";
  document.getElementById("telefone").textContent = "";
  document.getElementById("email").textContent = "";
  document.getElementById("matricula").textContent = "";
  document.getElementById("data_admissao").textContent = "";
  document.getElementById("turno").textContent = "";
  document.getElementById("regiao").textContent = "";
  document.getElementById("usuario").textContent = "";
  document.getElementById("senha").textContent = "";
  document.getElementById("nivel_acesso").textContent = "";

  const select = document.querySelector("select");
  if (select) select.selectedIndex = 0;
}

document.getElementById("nome").addEventListener("input", atualizarPreview);
document.getElementById("sobrenome").addEventListener("input", atualizarPreview);
document.getElementById("matricula").addEventListener("input", atualizarPreview);
document.getElementById("telefone").addEventListener("input", atualizarPreview);
document.getElementById("turno").addEventListener("change", atualizarPreview);
document.getElementById("regiao").addEventListener("change", atualizarPreview);
document.getElementById("nivel_acesso").addEventListener("change", atualizarPreview);
document.getElementById("usuario").addEventListener("input", atualizarChecklist);
document.getElementById("senha").addEventListener("input", atualizarChecklist);
document.getElementById("nivel_acesso").addEventListener("change", atualizarChecklist);
document.getElementById("data_nascimento").addEventListener("change", atualizarChecklist);
document.getElementById("data_admissao").addEventListener("change", atualizarChecklist);
document.getElementById("cpf").addEventListener("input", atualizarChecklist);
document.getElementById("email").addEventListener("input", atualizarChecklist);

btnCargos.forEach((btn) => btn.addEventListener("click", atualizarPreview));

function atualizarPreview() {
  const nome = document.getElementById("nome").value.trim();
  const sobrenome = document.getElementById("sobrenome").value.trim();
  const matricula = document.getElementById("matricula").value.trim();
  const telefone = document.getElementById("telefone").value.trim();

  const turnoSelect = document.getElementById("turno");
  const regiaoSelect = document.getElementById("regiao");
  const acessoSelect = document.getElementById("nivel_acesso");
  const cargoAtivo = document.querySelector(".btn_cargo.on");

  const nomeCompleto = [nome, sobrenome].filter(Boolean).join(" ");
  const iniciais = [nome[0] || "", sobrenome[0] || ""].join("").toUpperCase();

  document.querySelector(".visualizacao_nome").textContent = nomeCompleto || "Nome do Funcionário";

  const avatarPreview = document.querySelector(".visualizacao_avatar");
  if (!window.perfilFotoDataUrl) {
    avatarPreview.textContent = iniciais || "??";
  }

  const cargo = cargoAtivo ? cargoAtivo.textContent.trim() : "";
  const turnoTexto = turnoSelect.value ? turnoSelect.options[turnoSelect.selectedIndex].text.split(":")[0] : "";
  document.querySelector(".visualizacao_turno").textContent = `${cargo} Turno ${turnoTexto}`;

  document.getElementById("inf_matricula").textContent = matricula || "—";
  document.getElementById("inf_telefone").textContent = telefone || "—";

  const regiaoTexto = regiaoSelect.value ? regiaoSelect.options[regiaoSelect.selectedIndex].text : "—";
  document.getElementById("inf_regiao").textContent = regiaoTexto;

  const acessoTexto = acessoSelect.value ? acessoSelect.options[acessoSelect.selectedIndex].text.split(" ")[0] : "—";
  document.getElementById("inf_acesso").textContent = acessoTexto;
}

function atualizarChecklist() {
  const checks = {
    dados_pessoais: verificarDadosPessoais(),
    dados_profissionais: verificarDadosProfissionais(),
    credenciais: verificarCredenciais(),
    foto: !!window.perfilFotoDataUrl,
  };

  const itens = document.querySelectorAll(".checklist_item");
  const ordem = ["dados_pessoais", "dados_profissionais", "credenciais", "foto"];

  itens.forEach((item, index) => {
    const icone = item.querySelector("i");
    const completo = checks[ordem[index]];

    if (completo) {
      icone.className = "fa-solid fa-circle-check";
      icone.style.color = "#4ade7b";
    } else {
      icone.className = "fa-regular fa-circle";
      icone.style.color = "#5a7460";
    }
  });
}

function verificarDadosPessoais() {
  const nome = document.getElementById("nome").value.trim();
  const sobrenome = document.getElementById("sobrenome").value.trim();
  const cpf = document.getElementById("cpf").value.trim();
  const dataNasc = document.getElementById("data_nascimento").value.trim();
  const telefone = document.getElementById("telefone").value.trim();
  const email = document.getElementById("email").value.trim();
  const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  return (
    nome.length > 0 &&
    sobrenome.length > 0 &&
    cpf.length === 14 &&
    dataNasc.length > 0 &&
    telefone.length === 15 &&
    emailValido
  );
}

function verificarDadosProfissionais() {
  const matricula = document.getElementById("matricula").value.trim();
  const dataAdmissao = document.getElementById("data_admissao").value.trim();
  const turno = document.getElementById("turno").value;
  const regiao = document.getElementById("regiao").value;
  const cargo = document.querySelector(".btn_cargo.on");

  return matricula.length > 0 && dataAdmissao.length > 0 && turno.length > 0 && regiao.length > 0 && !!cargo;
}

function verificarCredenciais() {
  const usuario = document.getElementById("usuario").value.trim();
  const senha = document.getElementById("senha").value.trim();
  const nivel = document.getElementById("nivel_acesso").value;

  return usuario.length > 0 && senha.length >= 6 && nivel.length > 0;
}

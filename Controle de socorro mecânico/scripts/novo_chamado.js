class Chamado {
  constructor(dados) {
    this.placa = dados.placa;
    this.modelo = dados.modelo;
    this.nome_solicitante = dados.nome_solicitante;
    this.telefone = dados.telefone;
    this.problema = dados.problema;
    this.prioridade = dados.prioridade;
    this.descricao = undefined; // Campo para descrição detalhada do problema, não é obrigatório seu preenchimento
    this.rua = dados.rua;
    this.numero = dados.numero;
    this.bairro = dados.bairro;
    this.cidade = dados.cidade;
    this.cep = dados.cep;
    this.equipe = dados.equipe;
  }

  exibirInformacoes() {
    console.log(`Placa: ${this.placa}`);
    console.log(`Modelo: ${this.modelo}`);
    console.log(`Nome do Solicitante: ${this.nome_solicitante}`);
    console.log(`Telefone: ${this.telefone}`);
    console.log(`Problema: ${this.problema}`);
    console.log(`Prioridade: ${this.prioridade}`);
    console.log(`Descrição: ${this.descricao}`);
    console.log(`Rua: ${this.rua}`);
    console.log(`Número: ${this.numero}`);
    console.log(`Bairro: ${this.bairro}`);
    console.log(`Cidade: ${this.cidade}`);
    console.log(`CEP: ${this.cep}`);
    console.log(`Equipe: ${this.equipe}`);
  }
}

const salvarChamado = document.getElementById("salvar_chamado");

salvarChamado.addEventListener("click", () => {
  const preenchido = verificar_preenchimento();
  const prioridade = verificar_prioridade();
  const equipe = verificar_equipe();

  if (!preenchido || !prioridade || !equipe) return; // ← interrompe se qualquer um falhar

  const novoChamado = new Chamado({
    placa: document.getElementById("placa").value,
    modelo: document.getElementById("modelo").value,
    nome_solicitante: document.getElementById("nome").value,
    telefone: document.getElementById("telefone").value,
    problema:
      document.querySelector("select").options[
        document.querySelector("select").selectedIndex
      ].text,
    prioridade: divPrioridade.textContent,
    rua: document.getElementById("rua").value,
    numero: document.getElementById("numero_endereco").value,
    bairro: document.getElementById("bairro").value,
    cidade: document.getElementById("cidade").value,
    cep: document.getElementById("cep").value,
    equipe: equipe,
  });

  novoChamado.exibirInformacoes();

  const chamados = JSON.parse(localStorage.getItem("chamados")) || [];
  chamados.push(novoChamado);
  localStorage.setItem("chamados", JSON.stringify(chamados));

  alert("Chamado cadastrado com sucesso!");

  limparInputs();
});

const btn_urgente = document.getElementById("btn_urgente");
const btn_normal = document.getElementById("btn_normal");
const btn_aguardando = document.getElementById("btn_aguardando");
const botoesPrioridade = document.querySelectorAll(
  ".botoes_prioridade > button",
);
const divPrioridade = document.getElementById("inf_prioridade");

const cores = {
  urgente: "red",
  normal: "green",
  aguardando: "yellow",
};

botoesPrioridade.forEach((botao) => {
  botao.addEventListener("click", () => {
    botoesPrioridade.forEach((b) => b.classList.remove("selecionado"));
    botao.classList.add("selecionado");

    const classePrioridade = Object.keys(cores).find((c) =>
      botao.classList.contains(c),
    );

    if (classePrioridade) {
      divPrioridade.textContent = botao.textContent;
      divPrioridade.style.color = cores[classePrioridade];
    }
  });
});

btn_urgente.addEventListener("click", () => {
  btn_urgente.classList.add("urgente");
  btn_normal.classList.remove("normal");
  btn_aguardando.classList.remove("aguardando");
  divPrioridade.textContent = btn_urgente.textContent;
  divPrioridade.style.color = cores.urgente;
});

btn_normal.addEventListener("click", () => {
  btn_urgente.classList.remove("urgente");
  btn_normal.classList.add("normal");
  btn_aguardando.classList.remove("aguardando");
  divPrioridade.textContent = btn_normal.textContent;
  divPrioridade.style.color = cores.normal;
});

btn_aguardando.addEventListener("click", () => {
  btn_urgente.classList.remove("urgente");
  btn_normal.classList.remove("normal");
  btn_aguardando.classList.add("aguardando");
  divPrioridade.textContent = btn_aguardando.textContent;
  divPrioridade.style.color = cores.aguardando;
});

// ─── Atualiza o resumo em tempo real ─────────────────────────
function atualizarResumo() {
  const pegar = (id) => document.getElementById(id)?.value.trim() || "—";

  const select = document.querySelector("select");
  const problema = select?.value
    ? select.options[select.selectedIndex].text
    : "—";

  const endereco =
    [pegar("rua"), pegar("numero")].filter((v) => v !== "—").join(", ") || "—";

  const equipeSelecionada = equipe.find((el) =>
    el.classList.contains("equipe_selecionado"),
  );
  const nomeEquipe =
    equipeSelecionada?.querySelector(".nome_funcionario")?.textContent.trim() ||
    "Ainda não Atribuída";

  document.getElementById("inf_placa").textContent = pegar("placa");
  document.getElementById("inf_problema").textContent = problema;
  document.getElementById("inf_endereco").textContent = endereco;
  document.getElementById("inf_equipe").textContent = nomeEquipe;
}

const inputs_inf_veiculo = [...document.querySelectorAll(".input_inf")];

function verificar_preenchimento() {
  let valido = true;
  inputs_inf_veiculo.forEach((el) => {
    if (el.value === "") {
      el.parentElement.classList.add("falta_preencher");
      valido = false;
    }
  });
  return valido;
}

// ── Selecionado o input ─────────────────────────
inputs_inf_veiculo.forEach((el) => {
  el.addEventListener("focus", (evt) => {
    inputs_inf_veiculo.forEach((i) => {
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
  // Limpa todos os inputs de texto
  inputs_inf_veiculo.forEach((el) => {
    el.value = "";
    el.parentElement.classList.remove("falta_preencher", "selecionado");
  });

  // Limpa os botões de prioridade
  botoesPrioridade.forEach((botao) => {
    // Para remover várias classes, passe-as como argumentos separados por vírgula
    botao.classList.remove("selecionado", "urgente", "normal", "aguardando");
  });

  // Limpa a equipe selecionada
  equipe.forEach((el) => el.classList.remove("equipe_selecionado"));

  // Reseta o texto visual do resumo (opcional, mas evita confusão)
  divPrioridade.textContent = "";
  document.getElementById("inf_placa").textContent = "";
  document.getElementById("inf_problema").textContent = "";
  document.getElementById("inf_endereco").textContent = "";
  document.getElementById("inf_equipe").textContent = "";

  // Reseta o Select para a primeira opção
  const select = document.querySelector("select");
  if (select) select.selectedIndex = 0;
}

function verificar_prioridade() {
  if (!divPrioridade.textContent.trim()) {
    alert("Selecione uma prioridade antes de salvar!");
    return false;
  }
  return true;
}

// ─── Placa ────────────────────────────────────────────────────
document.getElementById("placa").addEventListener("input", () => {
  const valor = document.getElementById("placa").value.trim();
  document.getElementById("inf_placa").textContent = valor;
});

// ─── Problema ─────────────────────────────────────────────────
document.querySelector("select").addEventListener("change", (e) => {
  document.getElementById("inf_problema").textContent =
    e.target.options[e.target.selectedIndex].text;
});

// ─── Prioridade ───────────────────────────────────────────────
document.querySelectorAll(".botoes_prioridade > button").forEach((botao) => {
  botao.addEventListener("click", () => {
    document
      .querySelectorAll(".botoes_prioridade > button")
      .forEach((b) => b.classList.remove("selecionado"));
    botao.classList.add("selecionado");

    const prioridade = Object.keys(cores).find((c) =>
      botao.classList.contains(c),
    );
    if (prioridade) {
      divPrioridade.textContent = botao.textContent;
      divPrioridade.style.color = cores[prioridade];
    }
  });
});

// ─── Endereço ─────────────────────────────────────────────────
const camposEndereco = ["rua", "numero_endereco"];

camposEndereco.forEach((id) => {
  document.getElementById(id).addEventListener("input", () => {
    const rua = document.getElementById("rua").value.trim();
    const numero = document.getElementById("numero_endereco").value.trim();
    document.getElementById("inf_endereco").textContent =
      [rua, numero].filter(Boolean).join(", ") || "—";
  });
});

// ─── Equipe ─────────────────────────────────────────────────
const equipe = [...document.querySelectorAll(".equipe_item")];

// ─── Verificação de equipe selecionada e atualização do resumo
equipe.forEach((el) => {
  el.addEventListener("click", () => {
    equipe.forEach((e) => e.classList.remove("equipe_selecionado"));
    el.classList.add("equipe_selecionado");

    const nome = el.querySelector(".nome_funcionario").textContent.trim();
    document.getElementById("inf_equipe").textContent = nome;
  });
});

// ─── Só verifica e retorna o nome do funcionário da equipe selecionada, sem atualizar o resumo
function verificar_equipe() {
  const equipeSelecionada = equipe.find((el) =>
    el.classList.contains("equipe_selecionado"),
  );

  if (!equipeSelecionada) {
    alert("Selecione uma equipe antes de salvar!");
    return null;
  }

  return equipeSelecionada
    .querySelector(".nome_funcionario")
    .textContent.trim();
}

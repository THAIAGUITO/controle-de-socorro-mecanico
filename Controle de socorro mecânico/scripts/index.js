const avatarColors = [
  ["#1e4a2e", "#4ade7b"],
  ["#1e2d4a", "#5b9cf6"],
  ["#4a2e1e", "#f59e0b"],
  ["#3a1e4a", "#a78bfa"],
  ["#1e3a4a", "#38bdf8"],
  ["#4a1e3a", "#f472b6"],
  ["#2e4a1e", "#86efac"],
  ["#4a3a1e", "#fbbf24"],
  ["#1e4a4a", "#34d399"],
];

function getStatusLabel(status) {
  const map = {
    ativo: { texto: "Disponível", cor: "#4ade7b" },
    inativo: { texto: "Inativo", cor: "#f25c54" },
    aguardando_cadastro: { texto: "Aguardando", cor: "#f5c842" },
  };
  return map[status] || { texto: "Desconhecido", cor: "#888" };
}

function renderEquipe() {
  const funcionarios = JSON.parse(localStorage.getItem("funcionarios")) || [];
  const lista = document.getElementById("lista_equipe");
  const contador = document.getElementById("contador_ativos");

  if (!lista) return;

  const ativos = funcionarios.filter((f) => f.status === "ativo");

  contador.textContent = `${ativos.length} Ativo${ativos.length !== 1 ? "s" : ""}`;

  if (funcionarios.length === 0) {
    lista.innerHTML = `
      <div style="color: #5a7460; font-size: 13px; padding: 12px 0;">
        Nenhum funcionário cadastrado.
      </div>`;
    return;
  }

  lista.innerHTML = funcionarios
    .map((f, i) => {
      const nomeCompleto = `${f.nome || ""} ${f.sobrenome || ""}`.trim();
      const iniciais =
        nomeCompleto
          .split(" ")
          .filter((n) => n.length > 0)
          .slice(0, 2)
          .map((n) => n[0])
          .join("")
          .toUpperCase() || "?";

      const [bg, cor] = avatarColors[i % avatarColors.length];
      const { texto, cor: corStatus } = getStatusLabel(f.status);

      const avatarStyle = f.foto
        ? `style="background-image:url(${f.foto});background-size:cover;background-position:center;background-color:${bg}"`
        : `style="background:${bg};color:${cor}"`;

      return `
        <div class="card_funcinario">
          <div class="funcionario">
            <div class="img_funcionario" ${avatarStyle}>
              ${f.foto ? "" : `<p>${iniciais}</p>`}
            </div>
            <div class="informações_usuario">
              <h1>${f.nome || "Sem nome"}</h1>
              <p style="color:${corStatus}">${texto}</p>
            </div>
          </div>
        </div>`;
    })
    .join("");
}

function ehHoje(dataISO) {
  const data = new Date(dataISO);
  const hoje = new Date();
  return (
    data.getDate() === hoje.getDate() &&
    data.getMonth() === hoje.getMonth() &&
    data.getFullYear() === hoje.getFullYear()
  );
}

function atualizarCardsChamados() {
  const chamados = JSON.parse(localStorage.getItem("chamados")) || [];

  const chamadosHoje = chamados.filter((c) => ehHoje(c.dataCriacao));
  const emAtendimento = chamados.filter((c) => c.status === "em_atendimento");
  const resolvidos = chamados.filter((c) => c.status === "resolvido");
  const urgentes = emAtendimento.filter((c) => c.prioridade && c.prioridade.toUpperCase().includes("URGENTE"));

  const taxaSolucao = chamados.length > 0 ? Math.round((resolvidos.length / chamados.length) * 100) : 0;

  document.querySelector(".linha_cards .chamados_hoje:nth-child(1) .card_central").textContent = chamadosHoje.length;

  const card2 = document.querySelector(".linha_cards .chamados_hoje:nth-child(2)");
  card2.querySelector(".card_central").textContent = emAtendimento.length;
  card2.querySelector(".card_inferior").innerHTML =
    urgentes.length > 0
      ? `<b>${urgentes.length}</b> urgente${urgentes.length > 1 ? "s" : ""} pendente${urgentes.length > 1 ? "s" : ""}`
      : "Nenhum urgente pendente";

  const card3 = document.querySelector(".linha_cards .chamados_hoje:nth-child(3)");
  card3.querySelector(".card_central").textContent = resolvidos.length;
  card3.querySelector(".card_inferior").innerHTML = `<b style="color:#4ade7b">${taxaSolucao}%</b> taxa de solução`;
}

atualizarCardsChamados();
renderEquipe();

const funcionarios = JSON.parse(localStorage.getItem("funcionarios")) || [];

function atualizarCards() {
  const total = funcionarios.length;
  const ativos = funcionarios.filter((f) => f.status === "ativo").length;
  const aguardando = funcionarios.filter((f) => f.status === "aguardando_cadastro").length;
  const inativos = funcionarios.filter((f) => f.status === "inativo").length;

  document.querySelectorAll(".numero_status")[0].textContent = total;
  document.querySelectorAll(".numero_status")[1].textContent = ativos;
  document.querySelectorAll(".numero_status")[2].textContent = aguardando;
  document.querySelectorAll(".numero_status")[3].textContent = inativos;
}

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

function getAvatar(nome, idx) {
  const iniciais = nome
    .split(" ")
    .slice(0, 2)
    .map((n) => n[0])
    .join("");
  const [bg, color] = avatarColors[idx % avatarColors.length];
  return `<div class="avatar" style="background:${bg};color:${color}">${iniciais}</div>`;
}

function badgeStatus(status) {
  const map = {
    ativo: { cls: "badge-ativo", dot: "dot-ativo", label: "Ativo" },
    aguardando_cadastro: { cls: "badge-aguardando", dot: "dot-aguardando", label: "Aguardando" },
    inativo: { cls: "badge-inativo", dot: "dot-inativo", label: "Inativo" },
  };
  const b = map[status] || map.inativo;
  return `<span class="badge ${b.cls}"><span class="badge-dot ${b.dot}"></span>${b.label}</span>`;
}

function badgeTurno(turno) {
  const icons = {
    manha: "fa-sun",
    manhã: "fa-sun",
    tarde: "fa-cloud-sun",
    noite: "fa-moon",
    integral: "fa-briefcase",
  };
  const labels = {
    manha: "Manhã",
    manhã: "Manhã",
    tarde: "Tarde",
    noite: "Noite",
    integral: "Integral",
  };

  return `<span class="badge-turno"><i class="fa-solid ${icons[turno] || "fa-clock"}"></i>${labels[turno] || turno}</span>`;
}

function capitalizar(str) {
  if (!str) return "—";
  return str
    .replace(/_/g, " ")
    .split(" ")
    .map((palavra) => palavra.charAt(0).toUpperCase() + palavra.slice(1))
    .join(" ");
}

function renderTabela(lista) {
  const tbody = document.getElementById("tbody_funcionarios");
  const empty = document.getElementById("empty_state");

  if (lista.length === 0) {
    tbody.innerHTML = "";
    empty.classList.add("visible");
    return;
  }

  empty.classList.remove("visible");
  tbody.innerHTML = lista
    .map(
      (f, i) => `
        <div class="linha_funcionario"
             data-matricula="${f.matricula}"
             data-nome="${(f.nome + " " + (f.sobrenome || "")).toLowerCase()}"
             data-cargo="${f.cargo}"
             data-regiao="${f.regiao}"
             data-status="${f.status}"
             data-turno="${f.turno}">
          <div class="cel_funcionario">
            ${getAvatar(f.nome + " " + (f.sobrenome || ""), i)}
            <div>
              <div class="nome_func">${f.nome} ${f.sobrenome || ""}</div>
              <div class="email_func">${f.email || "—"}</div>
            </div>
          </div>
          <div class="cel_texto">${f.matricula}</div>
          <div class="cel_cargo">${capitalizar(f.cargo)}</div>
          <div>${badgeTurno(f.turno)}</div>
          <div class="cel_texto">${capitalizar(f.regiao)}</div>
          <div>${badgeStatus(f.status)}</div>
          <div class="acoes">
            <button class="btn_acao ver"    title="Ver detalhes"><i class="fa-solid fa-eye"></i></button>
            <button class="btn_acao editar" title="Editar"><i class="fa-solid fa-pen"></i></button>
            <button class="btn_acao del"    title="Remover" data-matricula="${f.matricula}">
              <i class="fa-solid fa-trash"></i>
            </button>
          </div>
        </div>
      `,
    )
    .join("");

  document.querySelectorAll(".btn_acao.del").forEach((btn) => {
    btn.addEventListener("click", function () {
      const matricula = this.getAttribute("data-matricula");
      const linha = this.closest(".linha_funcionario");
      const nome = linha.querySelector(".nome_func").textContent;

      const confirmado = confirm(
        `Deseja realmente excluir o funcionário "${nome}"?\n\nEsta ação não pode ser desfeita.`,
      );

      if (confirmado) {
        let lista = JSON.parse(localStorage.getItem("funcionarios")) || [];
        lista = lista.filter((f) => f.matricula !== matricula);
        localStorage.setItem("funcionarios", JSON.stringify(lista));

        funcionarios.length = 0;
        lista.forEach((f) => funcionarios.push(f));
        filtrar();
        atualizarCards();
      }
    });
  });
}

function filtrar() {
  const busca = document.getElementById("buscar_funcionario").value.toLowerCase();
  const cargo = document.getElementById("cargo_funcionario").value;
  const regiao = document.getElementById("regiao_funcionario").value;
  const status = document.getElementById("status_funcionario").value;
  const turno = document.getElementById("turno_funcionario").value;

  const lista = funcionarios.filter(
    (f) =>
      (!busca ||
        (f.nome + " " + (f.sobrenome || "")).toLowerCase().includes(busca) ||
        f.matricula.toLowerCase().includes(busca)) &&
      (!cargo || f.cargo === cargo) &&
      (!regiao || f.regiao === regiao) &&
      (!status || f.status === status) &&
      (!turno || f.turno === turno),
  );
  renderTabela(lista);
}

document.getElementById("buscar_funcionario").addEventListener("input", filtrar);
document.getElementById("cargo_funcionario").addEventListener("change", filtrar);
document.getElementById("regiao_funcionario").addEventListener("change", filtrar);
document.getElementById("status_funcionario").addEventListener("change", filtrar);
document.getElementById("turno_funcionario").addEventListener("change", filtrar);

renderTabela(funcionarios);
atualizarCards();

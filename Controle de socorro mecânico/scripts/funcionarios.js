const funcionarios = [
  {
    nome: "Camila Rocha",
    email: "camila.rocha@autoresgate.com",
    matricula: "AR-00245",
    cargo: "administrativo",
    turno: "manha",
    regiao: "norte",
    status: "inativo",
  },
  {
    nome: "Paulo Mendes",
    email: "paulo.mendes@autoresgate.com",
    matricula: "AR-00178",
    cargo: "mecanico",
    turno: "tarde",
    regiao: "sul",
    status: "inativo",
  },
  {
    nome: "Renata Cardoso",
    email: "renata.cardoso@autoresgate.com",
    matricula: "AR-00156",
    cargo: "atendente",
    turno: "noite",
    regiao: "oeste",
    status: "inativo",
  },
  {
    nome: "Gustavo Pereira",
    email: "gustavo.pereira@autoresgate.com",
    matricula: "AR-00099",
    cargo: "administrativo",
    turno: "manha",
    regiao: "leste",
    status: "inativo",
  },
];

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
  const icons = { manha: "fa-sun", tarde: "fa-cloud-sun", noite: "fa-moon" };
  const labels = { manha: "Manhã", tarde: "Tarde", noite: "Noite" };
  return `<span class="badge-turno"><i class="fa-solid ${icons[turno] || "fa-clock"}"></i>${labels[turno] || turno}</span>`;
}

function capitalizar(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
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
               data-nome="${f.nome.toLowerCase()}"
               data-cargo="${f.cargo}"
               data-regiao="${f.regiao}"
               data-status="${f.status}"
               data-turno="${f.turno}">
            <div class="cel_funcionario">
              ${getAvatar(f.nome, i)}
              <div>
                <div class="nome_func">${f.nome}</div>
                <div class="email_func">${f.email}</div>
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
              <button class="btn_acao del"    title="Remover"><i class="fa-solid fa-trash"></i></button>
            </div>
          </div>
        `,
    )
    .join("");
}

function filtrar() {
  const busca = document.getElementById("buscar_funcionario").value.toLowerCase();
  const cargo = document.getElementById("cargo_funcionario").value;
  const regiao = document.getElementById("regiao_funcionario").value;
  const status = document.getElementById("status_funcionario").value;
  const turno = document.getElementById("turno_funcionario").value;

  const lista = funcionarios.filter(
    (f) =>
      (!busca || f.nome.toLowerCase().includes(busca) || f.matricula.toLowerCase().includes(busca)) &&
      (!cargo || f.cargo === cargo) &&
      (!regiao || f.regiao === regiao) &&
      (!status || f.status === status) &&
      (!turno || f.turno === turno),
  );
  renderTabela(lista);
}

["buscar_funcionario", "cargo_funcionario", "regiao_funcionario", "status_funcionario", "turno_funcionario"].forEach(
  (id) => document.getElementById(id).addEventListener("input", filtrar),
);

renderTabela(funcionarios);

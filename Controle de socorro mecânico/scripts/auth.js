const PERMISSOES = {
  operador: {
    paginasPermitidas: ["index.html", "login.html"],
    acoes: [],
  },
  técnico: {
    paginasPermitidas: ["index.html", "login.html"],
    acoes: ["criar_chamado", "visualizar_mapa"],
  },
  supervisor: {
    paginasPermitidas: ["index.html", "telas/funcionarios.html", "login.html"],
    acoes: ["criar_chamado", "visualizar_mapa", "acessar_relatorios"],
  },
  administrador: {
    paginasPermitidas: ["index.html", "telas/funcionarios.html", "telas/cadastro_funcionario.html", "login.html"],
    acoes: ["criar_chamado", "visualizar_mapa", "acessar_relatorios", "cadastrar_funcionarios"],
  },
};

function getUsuarioLogado() {
  const dados = sessionStorage.getItem("usuarioLogado");
  return dados ? JSON.parse(dados) : null;
}

function getPermissoes(nivelAcesso) {
  return PERMISSOES[nivelAcesso] || PERMISSOES["operador"];
}

function temPermissao(acao) {
  const usuario = getUsuarioLogado();
  if (!usuario) return false;
  return getPermissoes(usuario.nivelAcesso).acoes.includes(acao);
}

function protegerPagina(paginaAtual) {
  const usuario = getUsuarioLogado();

  if (!usuario) {
    const naRaiz = !window.location.pathname.includes("/telas/");
    const caminhoLogin = naRaiz ? "telas/login.html" : "login.html";
    window.location.href = caminhoLogin;
    return;
  }

  const permissoes = getPermissoes(usuario.nivelAcesso);
  const temAcesso = permissoes.paginasPermitidas.some((p) => paginaAtual.endsWith(p));

  if (!temAcesso) {
    sessionStorage.setItem("acessoBloqueado", "true");
    const naRaiz = !window.location.pathname.includes("/telas/");
    window.location.href = naRaiz ? "index.html" : "../index.html";
  }
}

function aplicarPermissoesNaTela() {
  const usuario = getUsuarioLogado();
  if (!usuario) return;

  const permissoes = getPermissoes(usuario.nivelAcesso);

  // Esconde elementos que exigem uma permissão que o usuário não tem
  document.querySelectorAll("[data-permissao]").forEach((el) => {
    const permissaoNecessaria = el.getAttribute("data-permissao");
    if (!permissoes.acoes.includes(permissaoNecessaria)) {
      el.style.display = "none";
    }
  });

  // Esconde itens do sidebar que o usuário não pode acessar
  document.querySelectorAll("[data-pagina-permissao]").forEach((el) => {
    const pagina = el.getAttribute("data-pagina-permissao");
    if (!permissoes.paginasPermitidas.some((p) => p.includes(pagina))) {
      el.style.display = "none";
    }
  });
}

function verificarAcessoBloqueado() {
  if (sessionStorage.getItem("acessoBloqueado")) {
    sessionStorage.removeItem("acessoBloqueado");
    // Se tiver SweetAlert disponível usa ele, senão alert simples
    if (typeof Swal !== "undefined") {
      Swal.fire({
        position: "top",
        icon: "warning",
        title: "Acesso negado",
        text: "Você não tem permissão para acessar essa página.",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        toast: true,
        background: "#1e1e1e",
        color: "#ffffff",
        width: "400px",
      });
    } else {
      alert("Você não tem permissão para acessar essa página.");
    }
  }
}

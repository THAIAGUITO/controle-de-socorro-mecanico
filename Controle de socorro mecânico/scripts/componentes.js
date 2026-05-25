function getBasePath() {
    const path = window.location.pathname;

    // Divide o caminho em partes e remove o nome do arquivo
    const partes = path.split('/');
    partes.pop(); // remove o arquivo (ex: index.html)

    // Verifica se está dentro de alguma subpasta do projeto
    // Ajuste '/telas' para o nome real da sua pasta raiz do projeto
    const indicadorRaiz = partes.findIndex(p => p === 'telas');

    if (indicadorRaiz === -1) {
        return ''; // já está na raiz
    }

    // Conta quantos níveis abaixo da raiz está
    const niveis = partes.length - indicadorRaiz;
    return '../'.repeat(niveis);
}


const head = document.head
const body = document.body
const base = getBasePath();

const estiloHeader = `<link rel='stylesheet' href='${base}estilos/header.css'>`
head.innerHTML += estiloHeader

const estiloSidebar = `<link rel='stylesheet' href='${base}estilos/sidebar.css'>`
head.innerHTML += estiloSidebar

const componentes = {

    cabecalho: `
        <div id="cabecalho">
            <header>
                <div class="logo">
                     <img src="${base}imagens/logo.svg" alt="Logo da empresa">
                </div>
                <div class="search_box">
                    <i class="fa-solid fa-magnifying-glass"></i>
                    <input type="text" id="pesquisa" placeholder="Buscar chamado, placa, endereço...">
                </div>
                <div class="icones_cabecalho">
                    <a href="telas/login.html">
                        <div class="usuario">
                            <i class="fa-solid fa-user"></i>
                        </div>
                    </a>
                    <div class="notificacao">
                        <i class="fa-solid fa-bell"></i>
                    </div>
                    <div class="sair">
                        <i class="fa-solid fa-right-to-bracket"></i>
                    </div>
                </div>
            </header>
        </div>
    `,

    sidebar: `
        <div class="sidebar">
            <ul>
                <li><p>PRINCIPAL</p></li>
                <li><a href="#"><i class="fa-solid fa-house"></i> Dashboard</a></li>
                <li><a href="#"><i class="fa-solid fa-triangle-exclamation"></i> Chamados Ativos</a></li>
                <li><a href="#"><i class="fa-solid fa-map-location-dot"></i> Mapa ao Vivo</a></li>
                <hr>
                <li><p>GESTÃO</p></li>
                <li><a href="#"><i class="fa-solid fa-truck"></i> Veiculos</a></li>
                <li><a href="${base}telas/cadastro_funcionario.html"><i class="fa-solid fa-people-group"></i> Equipes</a></li>
                <li><a href="#"><i class="fa-solid fa-chart-column"></i> Relatórios</a></li>
                <hr>
                <li><p>SISTEMA</p></li>
                <li><a href="#"><i class="fa-solid fa-gear"></i> Configurações</a></li>
            </ul>
        </div>
    `
};

window.addEventListener('DOMContentLoaded', () => {
    document.getElementById('header-site').innerHTML = componentes.cabecalho;
    document.getElementById('sidebar-site').innerHTML = componentes.sidebar;
});
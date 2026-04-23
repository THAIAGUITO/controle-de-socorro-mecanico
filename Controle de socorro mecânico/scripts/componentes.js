// Calcula quantos níveis de profundidade a página atual está
const raiz = new URL('../', document.currentScript.src).href;

const componentes = {

    cabecalho: `
        <div id="cabecalho">
            <header>
                <div class="logo">
                     <img src="${raiz}imagens/logo.svg" alt="Logo da empresa">
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
                <li><a href="${raiz}telas/cadastro_funcionario.html"><i class="fa-solid fa-people-group"></i> Equipes</a></li>
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
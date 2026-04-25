# 🚗⚡ AutoResgate — Sistema de Controle de Socorro Mecânico

<div align="center">

![AutoResgate Banner](https://img.shields.io/badge/AutoResgate-Sistema%20de%20Socorro-1a8a36?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZmlsbD0id2hpdGUiIGQ9Ik0yMiAxMGgtMWwtMy0zSDdMNSAxMEg0Yy0xIDAtMiAxLTIgMnYzaDJhMyAzIDAgMCAwIDYgMGg0YTMgMyAwIDAgMCA2IDBoMnYtM2MwLTEtMS0yLTItMnoiLz48L3N2Zz4=)

**Dashboard completo para gerenciamento de chamados de socorro mecânico em tempo real**

[![HTML](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
[![CSS](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
[![PHP](https://img.shields.io/badge/PHP-777BB4?style=flat-square&logo=php&logoColor=white)](https://www.php.net/)
![Status](https://img.shields.io/badge/Status-Em%20desenvolvimento-f5c842?style=flat-square)

</div>

---

## 📋 Sobre o Projeto

O **AutoResgate** é um sistema web de controle de socorro mecânico desenvolvido como projeto de aprendizado de HTML, CSS, JavaScript e PHP. A aplicação permite gerenciar chamados de socorro em tempo real, monitorar equipes em campo e acompanhar métricas do serviço.

> 💡 Este projeto nasceu como exercício prático durante meus estudos de desenvolvimento web, evoluindo de um layout estático até uma aplicação com componentes reutilizáveis em PHP.

---

## ✨ Funcionalidades

- 📊 **Dashboard** com cards de métricas em tempo real (chamados do dia, em atendimento, resolvidos e tempo médio)
- 🗺️ **Mapa ao vivo** com marcadores de chamados e equipes via Leaflet.js + OpenStreetMap
- 🚨 **Painel de chamados ativos** com classificação por prioridade (Urgente, Normal, Aguardando)
- 👥 **Status da equipe** com disponibilidade de cada membro em tempo real
- ➕ **Cadastro de chamados** com formulário completo de informações do veículo e localização
- 👤 **Cadastro de funcionários** com dados pessoais, cargo, permissões e acesso ao sistema
- 🔐 **Tela de login** com validação de credenciais

---

## 🖥️ Telas do Sistema

| Tela | Descrição |
|------|-----------|
| `index.php` | Dashboard principal com mapa, chamados e status da equipe |
| `telas/login.php` | Autenticação de usuários |
| `telas/novo_chamado.php` | Formulário de registro de novo chamado |
| `telas/cadastro_funcionario.php` | Cadastro de novos membros da equipe |

---

## 🛠️ Tecnologias Utilizadas

- **HTML5** — estrutura das páginas
- **CSS3** — estilização com Flexbox e Grid
- **JavaScript** — interatividade e validações
- **PHP** — componentização (header, sidebar) e roteamento
- **Leaflet.js** — mapa interativo em tempo real
- **OpenStreetMap** — tiles do mapa (gratuito)
- **Font Awesome 6** — ícones
- **Google Fonts** — tipografia (Syne + DM Sans)

---

## 📁 Estrutura do Projeto

```
controle-de-socorro-mecanico/
│
├── 📄 index.php                  # Dashboard principal
│
├── 📁 telas/
│   ├── login.php                 # Tela de login
│   ├── novo_chamado.php          # Cadastro de chamado
│   └── cadastro_funcionario.php  # Cadastro de funcionário
│
├── 📁 componentes/
│   ├── cabecalho.php             # Header reutilizável
│   └── sidebar.php               # Sidebar reutilizável
│
├── 📁 estilos/
│   ├── style.css                 # Estilos globais
│   ├── login.css                 # Estilos da tela de login
│   └── novo_chamado.css          # Estilos do formulário
│
├── 📁 scripts/
│   ├── mapa.js                   # Configuração do mapa Leaflet
│   └── componentes.js            # Scripts dos componentes
│
└── 📁 imagens/
    └── logo.svg                  # Logo da empresa
```

---

## 🎨 Design

O sistema utiliza um tema escuro com paleta verde, inspirado em dashboards modernos de monitoramento.

| Cor | Hex | Uso |
|-----|-----|-----|
| 🟢 Verde principal | `#1a8a36` | Botões, destaques |
| 🟢 Verde neon | `#4ade7b` | Textos de destaque, ativo |
| ⬛ Fundo | `#0b0f0d` | Background geral |
| ⬛ Surface | `#111712` | Header e sidebar |
| 🔴 Urgente | `#f25c54` | Chamados urgentes |
| 🟡 Aguardando | `#f5c842` | Chamados em espera |
| 🔵 Normal | `#5b9cf6` | Chamados normais |

---

## 🚀 Como Rodar o Projeto

### Pré-requisitos
- PHP 7.4+ instalado
- Extensão **PHP Server** no VS Code (ou XAMPP/WAMP)

### Passos

1. **Clone o repositório**
```bash
git clone https://github.com/seu-usuario/controle-de-socorro-mecanico.git
```

2. **Abra no VS Code**
```bash
cd controle-de-socorro-mecanico
code .
```

3. **Inicie o servidor PHP**
   - Com a extensão PHP Server: clique com o botão direito no `index.php` → *PHP Server: Serve Project*
   - Ou via terminal: `php -S localhost:3000`

4. **Acesse no navegador**
```
http://localhost:3000
```

---

## 📈 Progresso do Projeto

- [x] Layout do dashboard (HTML + CSS)
- [x] Header e sidebar componentizados em PHP
- [x] Cards de métricas
- [x] Integração do mapa com Leaflet.js
- [x] Painel de chamados ativos
- [x] Status da equipe
- [x] Tela de login (HTML + CSS + JS)
- [x] Tela de novo chamado
- [x] Tela de cadastro de funcionário
- [ ] Integração com banco de dados (MySQL)
- [ ] Backend PHP para persistência de dados
- [ ] Autenticação real de usuários
- [ ] API de chamados em tempo real

---

## 📚 O que Aprendi

Este projeto foi desenvolvido do zero como exercício de aprendizado. Durante o desenvolvimento pratiquei:

- Estruturação semântica com **HTML5**
- **Flexbox** e **CSS Grid** para layouts complexos
- **CSS Variables** para manter consistência visual
- Componentização com **PHP includes**
- Manipulação do **DOM** com JavaScript
- Integração de bibliotecas externas (**Leaflet.js**)
- Organização de projetos em pastas e caminhos relativos

---

## 👨‍💻 Autor

Desenvolvido com 💚 como projeto de aprendizado de desenvolvimento web.

---

<div align="center">

⭐ Se este projeto te ajudou de alguma forma, deixa uma estrela no repositório!

</div>

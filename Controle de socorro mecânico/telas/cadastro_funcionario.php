<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CADASTRO DE FUNCIONÁRIO</title>

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
    <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>

    <link rel="stylesheet" href="../estilos/cadastro_funcionario.css">
</head>

<body>
    <?php include __DIR__ . '/../componentes/cabecalho.php'; ?>

    <div class="pagina">
        <?php include __DIR__ . '/../componentes/sidebar.php'; ?>

        <main>
            <div class="topo_conteudo">
                <div class="esquerda_topo">
                    <a href="../index.php">
                        <button class="voltar">
                            <i class="fa-solid fa-arrow-left"></i>
                            voltar
                        </button>
                    </a>

                    <div class="texto_topo_conteudo">
                        <div class="titulo_topo">Cadastrar Funcionário</div>
                        <div class="descricao_topo">Preencha os dados para adicionar um novo membro à equipe</div>
                    </div>
                </div>

                <button id="salvar_cadastro">
                    <i class="fa-solid fa-user-plus"></i>
                    Cadastrar
                </button>
            </div>

            <div class="conteudo_formulario">

                <!-- Conteudo do formulário central -->

                <div class="conteudo_central">
                    <div class="caixa_formulario">
                        <div class="topo_formulario">
                            <i class="fa-solid fa-user" style="color: #4ade7b; font-size: 13px;"></i>
                            <p>Dados Pessoais</p>
                        </div>

                        <div class="caixa_foto_usuario">
                            <div class="avatar" style="background:#1a7a4a;">JO</div>
                            <div class="inf_avatar">
                                <p>Foto do Funcionário</p>
                                <span>JPG ou PNG, máximo 2MB</span>
                            </div>
                            <div class="btn_upload">
                                <i class="fa-solid fa-upload"></i>
                                Enviar Foto
                            </div>
                        </div>

                        <div class="linhas_cards dois">
                            <div class="campo">
                                <label for="Nome">Nomes</label>
                                <div class="caixa_input">
                                    <i class="fa-solid fa-user"></i>
                                    <input id="nome" class="input_inf" type="text" placeholder="Nome">
                                </div>
                            </div>

                            <div class="campo">
                                <label for="Sobrenome">Sobrenome</label>
                                <div class="caixa_input">
                                    <i class="fa-solid fa-user"></i>
                                    <input id="sobrenome" class="input_inf" type="text" placeholder="Sobrenome">
                                </div>
                            </div>
                        </div>

                        <div class="linhas_cards dois">
                            <div class="campo">
                                <label for="CPF">CPF</label>
                                <div class="caixa_input">
                                    <i class="fa-solid fa-address-card"></i>
                                    <input id="cpf" class="input_inf" type="number" placeholder="000.000.000-00">
                                </div>
                            </div>

                            <div class="campo">
                                <label for="data_nascimento">Data de nascimento</label>
                                <div class="caixa_input">
                                    <i class="fa-solid fa-calendar-days"></i>
                                    <input id="data_nascimento" class="input_inf" type="number"
                                        placeholder="DD/MM/AAAA">
                                </div>
                            </div>

                            <div class="campo">
                                <label for="telefone">Telefone</label>
                                <div class="caixa_input">
                                    <i class="fa-solid fa-phone"></i>
                                    <input id="telefone" class="input_inf" type="number"
                                        placeholder="(12) 99999-9999">
                                </div>
                            </div>

                            <div class="campo">
                                <label for="E-mail">E-mail</label>
                                <div class="caixa_input">
                                    <i class="fa-solid fa-envelope"></i>
                                    <input id="email" class="input_inf" type="email" placeholder="nome@email.com">
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="caixa_formulario">
                        <div class="topo_formulario">
                            <i class="fa-solid fa-briefcase" style="color: #4ade7b; font-size: 13px;"></i>
                            <p>Dados Profissionais</p>
                        </div>
                        <div class="linhas_cards dois">
                            <div class="campo">
                                <label for="Matrícula">Matrícula</label>
                                <div class="caixa_input">
                                    <i class="fa-solid fa-hashtag"></i>
                                    <input type="text" name="matricula" id="matricula" placeholder="Ex: EQ-001">
                                </div>
                            </div>
                            <div class="campo">
                                <label for="data_admissao">Data de Admissão</label>
                                <div class="caixa_input">
                                    <i class="fa-regular fa-calendar"></i>
                                    <input type="date" id="data_admissao" placeholder="DD/MM/AAAA">
                                </div>
                            </div>
                        </div>

                        <div class="linhas_cards um">
                            <div class="campo">
                                <label for="função">Cargo / Função</label>
                                <div class="linha_cargo">
                                    <button class="btn_cargo on">Mecânico</button>
                                    <button class="btn_cargo">Motorista</button>
                                    <button class="btn_cargo">Auxiliar</button>
                                    <button class="btn_cargo">Supervisor</button>
                                    <button class="btn_cargo">Coordenador</button>
                                </div>
                            </div>
                        </div>

                        <div class="linhas_cards dois">
                            <div class="campo">
                                <label>Turno de Trabalho</label>
                                <div class="caixa_de_selecao">
                                    <i class="fa-solid fa-clock"></i>
                                    <select id="turno">
                                        <option value disabled selected>Selecione o turno</option>
                                        <option>Manhã (06h a 14h)</option>
                                        <option>Tarde (14h a 22h)</option>
                                        <option>Noite (22h a 06h)</option>
                                        <option>Integral (08h a 18h)</option>
                                    </select>
                                </div>
                            </div>

                            <div class="campo">
                                <label>Região de Atendimento</label>
                                <div class="caixa_de_selecao">
                                    <i class="fa-regular fa-map"></i>
                                    <select id="turno">
                                        <option value disabled selected>Selecione a região</option>
                                        <option>Zona Norte</option>
                                        <option>Zona Sul</option>
                                        <option>Zona Leste</option>
                                        <option>Zona Oeste</option>
                                        <option>Todas as Regiões</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="caixa_formulario">
                        <div class="topo_formulario">
                            <i class="fa-solid fa-lock" style="color: #4ade7b; font-size: 13px;"></i>
                            <p>Acesso ao sistema</p>
                        </div>
                        <div class="linhas_cards dois">
                            <div class="campo">
                                <label for="Usuário">Usuário(login)</label>
                                <div class="caixa_input">
                                    <i class="fa-solid fa-at"></i>
                                    <input type="text" id="usuario" placeholder="Usuário do sistema">
                                </div>
                            </div>

                            <div class="campo">
                                <label for="Usuário">Senha Provisória</label>
                                <div class="caixa_input">
                                    <i class="fa-solid fa-key"></i>
                                    <input type="password" id="senha_temporaria" placeholder="●●●●●●">
                                </div>
                            </div>
                        </div>

                        <div class="linhas_cards um">
                            <div class="campo">
                                <label>Nível de Acesso</label>
                                <div class="caixa_de_selecao">
                                    <i class="fa-solid fa-shield"></i>
                                    <select id="acesso">
                                        <option value disabled selected>Selecione o nível</option>
                                        <option>Operador - só visualiza chamados atribuidos</option>
                                        <option>Técnico - visualiza e atualiza chamados</option>
                                        <option>Supervisor - gerencia equipes e relatórios</option>
                                        <option>Administrador - Acesso total ao sistema</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div class="permissoes_especificas">
                            <p>Permissões específicas</p>
                            <div class="item_permissao">
                                <div class="permissao_info">
                                    <p>Criar novos chamados</p>
                                    <span>Pode registrar chamados de socorro</span>
                                </div>
                                <div class="btn_ativar on"></div>
                            </div>
                            <div class="item_permissao">
                                <div class="permissao_info">
                                    <p>Visualizar mapa ao vivo</p>
                                    <span>Acesso a localização da equipe</span>
                                </div>
                                <div class="btn_ativar on"></div>
                            </div>
                            <div class="item_permissao">
                                <div class="permissao_info">
                                    <p>Acessar relatórios</p>
                                    <span>Pode visualizar e exportar relatórios</span>
                                </div>
                                <div class="btn_ativar"></div>
                            </div>
                            <div class="item_permissao">
                                <div class="permissao_info">
                                    <p>Cadastrar funcionários</p>
                                    <span>Permissão administrativa</span>
                                </div>
                                <div class="btn_ativar"></div>
                            </div>
                        </div>
                    </div>

                </div>

                <!-- Termino do conteudo do formulário central -->

                <div class="conteudo_lateral">
                    <div class="caixa_formulario">
                        <div class="topo_formulario">
                            <i class="fa-solid fa-eye" style="color: #4ade7b; font-size: 13px;"></i>
                            <p>Pré Visualização</p>
                        </div>

                        <div class="visualizacao_funcionario">
                            <div class="visualizacao_avatar">JS</div>
                            <div class="visualizacao_nome">João Silva</div>
                            <div class="visualizacao_cargo">Mecânico : Turno Manhã</div>
                            <span class="visualizacao_atividade">
                                <span class="bolinha_atividade"></span>
                                Ativo
                            </span>
                        </div>
                        <div class="resumo_inf">
                            <span class="resumo_inf_label">Matrícula</span>
                            <span class="resumo_valor_label">EQ-001</span>
                        </div>
                        <div class="resumo_inf">
                            <span class="resumo_inf_label">Telefone</span>
                            <span class="resumo_valor_label">(12) 99999-9999</span>
                        </div>
                        <div class="resumo_inf">
                            <span class="resumo_inf_label">Região</span>
                            <span class="resumo_valor_label">Zona Norte</span>
                        </div>
                        <div class="resumo_inf">
                            <span class="resumo_inf_label">Acesso</span>
                            <span class="resumo_valor_label">Técnico</span>
                        </div>
                        <div class="resumo_inf">
                            <span class="resumo_inf_label">Status</span>
                            <span class="resumo_valor_label" style="color: #f5c842;">Aguardando Cadastro</span>
                        </div>
                    </div>

                    <div class="caixa_formulario">
                        <div class="topo_formulario">
                            <i class="fa-solid fa-circle-info" style="color: #4ade7b; font-size: 13px;"></i>
                            <p>Informações</p>
                        </div>

                        <div class="teste">
                            novo
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>

    <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
    <script src="../scripts/cadastro_funcionario.js"></script>
</body>

</html>
<!DOCTYPE html>
<html lang="prt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PAGINA DE ADIÇÃO DE CHAMADOS</title>

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />

    <link rel="stylesheet" href="../estilos/novo_chamado.css">
    <link rel="stylesheet" href="../estilos/style.css">
    
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
                        <div class="titulo_topo">Novo chamado</div>
                        <div class="descricao_topo">Preencha os dados para registrar um novo chamado</div>
                    </div>
                </div>

                <button id="salvar_chamado">
                    <i class="fa-solid fa-floppy-disk"></i>
                    Salvar Chamado
                </button>
            </div>

            <div class="conteudo_formulário">

                <!-- Aqui começa a coluna da esquerda com os formulários de informações do veículo, detalhes do chamado e localização -->

                <div class="conteudo_esquerda">

                    <!-- Aqui começa o formulário de informações do veículo -->

                    <div class="caixa_formulario">
                        <div class="topo_formulario">
                            <i class="fa-solid fa-truck" style="color: #4ade7b; font-size: 13px;"></i>
                            <p>Informações do Veículo</p>
                        </div>
                        <div class="formulario_inf_veiculos">
                            <div class="duas_linhas_cards dois">
                                <div class="campo">
                                    <label for="placa">Placa do veículo</label>
                                    <div class="caixa_input">
                                        <i class="fa-solid fa-id-card"></i>
                                        <input id="placa" class="input_inf" type="text" placeholder="Digite a placa do veículo">
                                    </div>
                                </div>

                                <div class="campo">
                                    <label for="modelo">Modelo / Tipo</label>
                                    <div class="caixa_input">
                                        <i class="fa-solid fa-car"></i>
                                        <input id="modelo" class="input_inf" type="text" placeholder="Ex: Caminhão, Carro, Moto...">
                                    </div>
                                </div>
                            </div>

                            <div class="duas_linhas_cards dois">
                                <div class="campo">
                                    <label for="nome_solicitante">Nome do Solicitante</label>
                                    <div class="caixa_input">
                                        <i class="fa-solid fa-user"></i>
                                        <input id="nome" class="input_inf" type="text" placeholder="Nome Completo">
                                    </div>
                                </div>

                                <div class="campo">
                                    <label for="telefone">Telefone de contato</label>
                                    <div class="caixa_input">
                                        <i class="fa-solid fa-phone"></i>
                                        <input id="telefone" class="input_inf" type="number" placeholder="(12) 99999-9999">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Aqui acaba o formulário de informações do veículo -->

                    <!-- Aqui começa o formulário de detalhes do chamado -->

                    <div class="caixa_formulario">
                        <div class="topo_formulario">
                            <i class="fa-solid fa-triangle-exclamation" style="color: #4ade7b; font-size: 13px;"></i>
                            <p>Detalhes do Chamado</p>
                        </div>

                        <div class="duas_linhas_cards dois">
                            <div class="campo">
                                <label>Tipo de problema</label>
                                <div class="input_tipo_problema">
                                    <i class="fa-solid fa-wrench"></i>
                                    <select>
                                        <option value disabled selected>Selecione o problema</option>
                                        <option value="pneu_furado">Pneu Furado</option>
                                        <option value="bateria">Problema de bateria</option>
                                        <option value="superaquecimento">Superaquecimento</option>
                                        <option value="falta_combustivel">Falta de combustível</option>
                                        <option value="acidente">Acidente</option>
                                        <option value="outro">Outro</option>
                                    </select>
                                </div>
                            </div>

                            <div class="campo">
                                <label>Prioridade</label>
                                <div class="botoes_prioridade">
                                    <button id="btn_urgente" class="botao_prioridade">🔴 URGENTE</button>
                                    <button id="btn_normal" class="botao_prioridade">🟢 NORMAL</button>
                                    <button id="btn_aguardando" class="botao_prioridade">🟡 AGUARDANDO</button>
                                </div>
                            </div>
                        </div>

                        <div class="duas_linhas_cards um">
                            <div class="campo">
                                <label for="descricao">Descrição do problema</label>
                                <div class="caixa_descricao"><textarea id="descricao" placeholder="Descreva oque está acontecendo com o veículo..."></textarea></div>
                            </div>
                        </div>
                    </div>

                    <!-- Aqui acaba o formulário de detalhes do chamado -->

                    <!-- Aqui começa o formulário de localização do chamado -->

                    <div class="caixa_formulario">
                        <div class="topo_formulario">
                            <i class="fa-solid fa-map-location-dot" style="color: #4ade7b; font-size: 13px;"></i>
                            <p>Localização</p>
                        </div>

                        <div class="duas_linhas_cards dois">
                            <div class="campo">
                                <label>Endereço</label>
                                <div class="caixa_input">
                                    <i class="fa-solid fa-road"></i>
                                    <input type="text" class="input_inf" id="endereco" placeholder="Rua, Avenida, Rodovia...">
                                </div>
                            </div>

                            <div class="campo">
                                <label>NÚmero / KM</label>
                                <div class="caixa_input">
                                    <i class="fa-solid fa-road"></i>
                                    <input type="text" class="input_inf" id="numero_endereco" placeholder="Rua, Avenida, Rodovia...">
                                </div>
                            </div>
                        </div>

                        <div class="duas_linhas_cards tres">
                            <div class="campo">
                                <label>Bairro</label>
                                <div class="caixa_input">
                                    <i class="fa-solid fa-road"></i>
                                    <input type="text" class="input_inf" placeholder="Bairro">
                                </div>
                            </div>

                            <div class="campo">
                                <label>Cidade</label>
                                <div class="caixa_input">
                                    <i class="fa-solid fa-road"></i>
                                    <input type="text" class="input_inf" placeholder="Cidade">
                                </div>
                            </div>

                            <div class="campo">
                                <label>CEP</label>
                                <div class="caixa_input">
                                    <i class="fa-solid fa-road"></i>
                                    <input type="text" class="input_inf" placeholder="00000-000">
                                </div>
                            </div>
                        </div>

                        <div class="duas_linhas_cards um">
                            <div class="campo">
                                <div id="mapa">
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Aqui acaba o formulário de localização do chamado -->

                </div>

                <!-- Aqui acaba a coluna da esquerda com os formulários de informações do veículo, detalhes do chamado e localização -->


                <!-- Aqui começa a coluna da direita com o resumo do chamado, atribuição de equipe e histórico de ações -->

                <div class="conteudo_direita">

                    <!-- Aqui começa o resumo do chamado -->

                    <div class="card_direita">
                        <div class="topo_card_direita">
                            <i class="fa-solid fa-clipboard-list" style="color: #4ade7b; font-size: 13px;"></i>
                            <p>Resumo do Chamado</p>
                        </div>

                        <div class="etapa_chamada">
                            <div class="bolinha_etapa"></div>
                            <div class="texto_etapa">Aguardando Envio</div>
                        </div>

                        <div class="resumo_item">
                            <span class="resumo_label">Placa</span>
                            <span class="resumo_valor" id="inf_placa"></span>
                        </div>

                        <div class="resumo_item">
                            <span class="resumo_label">Problema</span>
                            <span class="resumo_valor" id="inf_problema"></span>
                        </div>

                        <div class="resumo_item">
                            <span class="resumo_label">Prioridade</span>
                            <span class="resumo_valor" id="inf_prioridade"></span>
                        </div>

                        <div class="resumo_item">
                            <span class="resumo_label">Endereço</span>
                            <span class="resumo_valor" id="inf_endereco">Av. Castelo Branco, 1000</span>
                        </div>

                        <div class="resumo_item">
                            <span class="resumo_label">Equipe</span>
                            <span class="resumo_valor" id="inf_equipe" style="color: #f5c842;">Não Atribuída</span>
                        </div>
                    </div>

                    <!-- Aqui acaba o resumo do chamado -->

                    <!-- Aqui começa a seção de atribuição de equipe -->

                    <div class="card_direita">
                        <div class="topo_card_direita">
                            <i class="fa-solid fa-users" style="color: #4ade7b; font-size: 13px;"></i>
                            <p>Atribuir Equipe</p>
                        </div>
                        <div class="equipe_item">
                            <div class="avatar" style="background:#1a7a4a;">JO</div>
                            <div>
                                <div class="nome_funcionario">João Silva</div>
                                <div class="status_funcionario">Disponível</div>
                            </div>
                        </div>

                        <div class="equipe_item">
                            <div class="avatar" style="background: #1a4a7a;">FL</div>
                            <div>
                                <div class="nome_funcionario">Flúria Costa</div>
                                <div class="status_funcionario" style="color: #f5c842;">Em deslocamento</div>
                            </div>
                        </div>

                        <div class="equipe_item">
                            <div class="avatar" style="background: #7a1a4a;">PR</div>
                            <div>
                                <div class="nome_funcionario">Pedro Rocha</div>
                                <div class="status_funcionario">Disponível</div>
                            </div>
                        </div>

                        <div class="equipe_item">
                            <div class="avatar" style="background: #4a7a1a;">MS</div>
                            <div>
                                <div class="nome_funcionario">Maria Souza</div>
                                <div class="status_funcionario">Disponível</div>
                            </div>
                        </div>
                    </div>

                    <!-- Aqui acaba a seção de atribuição de equipe -->

                    <!-- Aqui começa a seção de histórico de ações -->

                    <div class="card_direita">
                        <div class="topo_card_direita">
                            <i class="fa-solid fa-clock-rotate-left" style="color: #4ade7b; font-size: 13px;"></i>
                            <p>Histórico de Ações</p>
                        </div>

                        <div class="historico_de_acoes">
                            <div class="bolinha_do_historico" style="background: #4ade7b;"></div>
                            <div>
                                <div class="titulo_historico">Chamado criado por MR</div>
                                <div class="subtitulo_historico">Agora</div>
                            </div>
                        </div>

                        <div class="historico_de_acoes">
                            <div class="bolinha_do_historico" style="background: #5a7460;"></div>
                            <div>
                                <div class="titulo_historico">Aguardando atribuição de equipe</div>
                                <div class="subtitulo_historico">Agora</div>
                            </div>
                        </div>
                    </div>

                    <!-- Aqui acaba a seção de histórico de ações -->

                </div>

                <!-- Aqui acaba a coluna da direita com o resumo do chamado, atribuição de equipe e histórico de ações -->

            </div>
        </main>
    </div>

<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
<script src="../scripts/mapa_chamado.js" defer></script>
<script src="../scripts/novo_chamado.js" defer></script>
</body>

</html>
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
    <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>

    <link rel="stylesheet" href="../estilos/novo_chamado.css">

    <?php $base_url = '../'; ?>
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
                        <div class="texto_topo_conteudo">
                            <div class="titulo_topo">Novo chamado</div>
                            <div class="descricao_topo">Preencha os dados para registrar um novo chamado</div>
                        </div>
                    </div>
                </div>

                <button class="salvar_chamado">
                    <i class="fa-solid fa-floppy-disk"></i>
                    Salvar Chamado
                </button>
            </div>

            <div class="conteudo_formulário">

                <!-- Aqui começa o formulário de informações do veículo -->

                <div class="inf_veiculo">
                    <div class="topo_formulario">
                        <i class="fa-solid fa-truck" style="color: #4ade7b; font-size: 13px;"></i>
                        <p>Informações do Veículo</p>
                    </div>
                    <div class="formulario_inf_veiculos">
                        <div class="cards_supeiores_inf_veiculo">
                            <div class="duas_linhas_cards dois">
                                <div class="campo">
                                    <label for="placa">Placa do veículo</label>
                                    <div class="input_placa">
                                        <i class="fa-solid fa-id-card"></i>
                                        <input type="text" placeholder="Digite a placa do veículo">
                                    </div>
                                </div>

                                <div class="campo">
                                    <label for="placa">Modelo / Tipo</label>
                                    <div class="input_placa">
                                        <i class="fa-solid fa-car"></i>
                                        <input type="text" placeholder="Ex: Caminhão, Carro, Moto...">
                                    </div>
                                </div>
                            </div>

                            <div class="duas_linhas_cards dois">
                                <div class="campo">
                                    <label for="placa">Nome do Solicitante</label>
                                    <div class="input_placa">
                                        <i class="fa-solid fa-user"></i>
                                        <input type="text" placeholder="Nome Completo">
                                    </div>
                                </div>

                                <div class="campo">
                                    <label for="placa">Telefone de contato</label>
                                    <div class="input_placa">
                                        <i class="fa-solid fa-phone"></i>
                                        <input type="text" placeholder="(12) 99999-9999">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Aqui acaba o formulário de informações do veículo -->

                <!-- Aqui começa o formulário de detalhes do chamado -->

                <div class="detalhes_do_chamado">
                    <div class="topo_formulario">
                        <i class="fa-solid fa-truck" style="color: #4ade7b; font-size: 13px;"></i>
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
                                <button class="botao_prioridade urgente">🔴 URGENTE</button>
                                <button class="botao_prioridade baixa">🟢 NORMAL</button>
                                <button class="botao_prioridade media">🟡 AGUARDANDO</button>
                            </div>
                        </div>
                    </div>

                    <div class="duas_linhas_cards um">
                        <div class="campo">
                            <label for="descricao">Descrição do problema</label>
                            <textarea id="descricao" placeholder="Descreva oque está acontecendo com o veículo..."></textarea>
                        </div>
                    </div>
                </div>

                <!-- Aqui acaba o formulário de detalhes do chamado -->
                
                <div class="localizacao_chamado">
                    <div class="topo_formulario">
                        <i class="fa-solid fa-map-location-dot" style="color: #4ade7b; font-size: 13px;"></i>
                        <p>Localização</p>
                    </div>

                    <div class="duas_linhas_cards dois">
                        <div class="campo">
                            <label>Endereço</label>
                            <div class="input_endereco">
                                <i class="fa-solid fa-road"></i>
                                <input type="text" placeholder="Rua, Avenida, Rodovia...">
                            </div>
                        </div>

                        <div class="campo">
                            <label>NÚmero / KM</label>
                            <div class="input_endereco">
                                <i class="fa-solid fa-road"></i>
                                <input type="text" placeholder="Rua, Avenida, Rodovia...">
                            </div>
                        </div>
                    </div>

                    <div class="duas_linhas_cards tres">
                        <div class="campo">
                            <label>Bairro</label>
                            <div class="input_endereco">
                                <i class="fa-solid fa-road"></i>
                                <input type="text" placeholder="Bairro">
                            </div>
                        </div>

                        <div class="campo">
                            <label>Cidade</label>
                            <div class="input_endereco">
                                <i class="fa-solid fa-road"></i>
                                <input type="text" placeholder="Cidade">
                            </div>
                        </div>

                        <div class="campo">
                            <label>CEP</label>
                            <div class="input_endereco">
                                <i class="fa-solid fa-road"></i>
                                <input type="text" placeholder="00000-000">
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

            </div>

            <div>
                
            </div>
        </main>
    </div>
</body>
</html>
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

                <div class="detalhes_do_chamado">
                    <div class="topo_formulario">
                        <i class="fa-solid fa-truck" style="color: #4ade7b; font-size: 13px;"></i>
                        <p>Detalhes do Chamado</p>
                    </div>
                </div>
            </div>


        </main>
    </div>

</body>

</html>
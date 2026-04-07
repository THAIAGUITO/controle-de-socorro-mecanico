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
</head>

<body>
    <?php include __DIR__ . '/../componentes/cabecalho.php'; ?>

    <div class="pagina">
        <?php include __DIR__ . '/../componentes/sidebar.php'; ?>

        <main>
            <div class="conteudo">
                <div class="topo_conteudo">
                    <div class="esquerda_topo">
                        <button class="voltar">
                            <i class="fa-solid fa-arrow-left"></i>
                            voltar
                        </button>

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
            </div>
        </main>
    </div>

</body>

</html>
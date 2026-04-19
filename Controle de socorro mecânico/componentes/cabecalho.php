<?php
// Define base_url dinamicamente baseado no nível da página atual
$base_url = str_repeat('../', substr_count($_SERVER['PHP_SELF'], '/') - 2);
?>

<link rel="stylesheet" href="<?php echo str_repeat('../', substr_count($_SERVER['PHP_SELF'], '/') - 2); ?>estilos/style.css">

<header class="cabecalho">
    <div class="esquerda_cabecalho">
        <div class="logo">
            <img src="<?php echo $base_url; ?>imagens/logo.svg" alt="Logo da empresa">
        </div>
    </div>

    <div class="centro_cabecalho">
        <div class="search_box">
            <i class="fa-solid fa-magnifying-glass"></i>
            <input type="text" id="pesquisa" placeholder="Buscar chamado, placa, endereço...">
        </div>
    </div>

    <div class="direita_cabecalho">
        <div class="icones_cabecalho">

            <a href="<?php echo $base_url; ?>telas/login.php">
                <div class="usuario">
                    <i class="fa-solid fa-user"></i>
                </div>
            </a>

            <div class="notificacao">
                <i class="fa-solid fa-bell"></i>
            </div>

            <div class="sair">
                <a href="<?php echo $base_url; ?>telas/login.php">
                    <i class="fa-solid fa-right-to-bracket"></i>
                </a>
            </div>
        </div>
    </div>

</header>
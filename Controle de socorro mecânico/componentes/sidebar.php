 <?php
// Define base_url dinamicamente baseado no nível da página atual
$base_url = str_repeat('../', substr_count($_SERVER['PHP_SELF'], '/') - 2);
?>
 
 <link rel="stylesheet" href="<?php echo str_repeat('../', substr_count($_SERVER['PHP_SELF'], '/') - 2); ?>estilos/style.css">
 
 <div class="sidebar">
            <ul>
                <li>
                    <p>PRINCIPAL</p>
                </li>
                <li><a href="#"><i class="fa-solid fa-house"></i> Dashboard</a></li>
                <li><a href="#"><i class="fa-solid fa-triangle-exclamation"></i> Chamados Ativos</a></li>
                <li><a href="#"><i class="fa-solid fa-map-location-dot"></i> Mapa ao Vivo</a></li>
                <hr>
                <li>
                    <p>GESTÃO</p>
                </li>
                <li><a href="#"><i class="fa-solid fa-truck"></i> Veiculos</a></li>
                <li><a href="<?php echo $base_url; ?>telas/cadastro_funcionario.php"><i class="fa-solid fa-people-group"></i> Equipes</a></li>
                <li><a href="#"><i class="fa-solid fa-chart-column"></i> Relatórios</a></li>
                <hr>
                <li>
                    <p>SISTEMA</p>
                </li>
                <li><a href="#"><i class="fa-solid fa-gear"></i> Configurações</a></li>
            </ul>

            <div style="font-size: 11px; color: #5a7460; margin-bottom: 8px;">
                Status do sistema
            </div>
            <span class="disponibilidade_sistema_sidebar">
                <div class="bolinha_disponibilidade_sidebar"></div>
                Online
            </span>
        </div>
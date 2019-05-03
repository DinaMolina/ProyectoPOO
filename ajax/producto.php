<?php
    switch($_GET["accion"]){
        case 'listar':
            include("../class/class-producto.php");
            echo Producto::obtenerProductos();
        break;
        default:
            echo '{"status":0,"mensaje":"Acción no válida"}';
    }
?>
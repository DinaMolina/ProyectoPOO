<?php
    switch($_GET['accion']){
        case 'listar':
        include("..class/class-carrito.php");
        echo Carrito::listarProductos();
    }

?>
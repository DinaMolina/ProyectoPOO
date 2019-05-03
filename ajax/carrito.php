<?php
    include("..class/class-carrito.php");
    switch($_GET['accion']){
        case 'guardar':
            $Producto = new Producto(
                $_POST["producto"],
                $_POST["cantidad"],
            );
            echo $Producto->guardarProductoCarrito();
        break;
        case 'listar':
        echo Carrito::listarProductos();
        break;
    }

?>
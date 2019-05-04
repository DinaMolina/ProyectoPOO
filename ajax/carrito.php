<?php
    switch($_GET['accion']){
        case 'listar':
        include("../class/class-carrito.php");
        echo Carrito::listarProductos();
        break;
        case 'agregar':
        include("../class/class-producto.php");
        $a = new Producto(
            $_POST['nombreProducto'],
            $_POST['precio'],null,
            $_POST['imagen'],null,null
         );
        $a->guardar();
        echo ok;
        break;
    }

?>
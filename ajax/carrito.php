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
        include("../class/class-carrito.php");
        echo Carrito::listarProductos();
        break;
    }
    switch($_GET['accion']){
        case 'agregar':
        include("../class/class-carrito.php");
        include("../class/class-producto.php");
        $producto= new Producto(
            $_POST['nombreProducto'],
            $_POST['precio'],null,
            $_POST['imagen'],null,null
        );
        $a = new Carrito(
            $_POST[$producto],null
         );
        echo $a->agregar();
        break;
    }


?>
<?php
    switch($_GET['accion']){
        case 'listar':
        include("../class/class-lista.php");
        echo Lista::listar();
        break;
        case 'agregar':
        include("../class/class-producto.php");
        $a = new Producto(
            $_POST['nombreProducto'],
            $_POST['precio'],null,
            $_POST['imagen'],null,null
         );
        $a->guardarLista();
        echo $_POST['tipo'];
        break;
    }

?>
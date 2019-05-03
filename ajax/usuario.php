<?php
    include("../class/class-usuario.php");
    switch($_GET["accion"]){
        case "guardar":
            $Usuario = new usuario(
                null,
                $_POST["nombre"],
                $_POST["correo"],
                $_POST["contraseña"],
                $_POST["Recontraseña"],
               
            );
           echo $Usuario->guardar();
        break;
    }
?>
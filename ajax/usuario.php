<?php
    session_start();
    include("../class/class-usuario.php");
    switch($_GET["accion"]){
        case "guardar":
            $Usuario = new Usuario($_POST["nombre"],
                                   $_POST["correo"],
                                   $_POST["contrasena"]             
            );
           echo $Usuario->guardar();
           $_SESSION["usuario"] = $_POST["nombre"];
            break;
    }
?>
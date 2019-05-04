<?php
    include("../class/class-usuario.php");
    switch($_GET["accion"]){
        case "guardar":
            $Usuario = new Usuario($_POST["nombre"],
                                   $_POST["correo"],
                                   $_POST["contrasena"],               
            );
           echo $Usuario->guardar();
        break;
        case "verificar":
            $archivo = fopen("../data/usuarios.json","r");
            while(($linea=fgets($archivo))){
                $registro = json_decode($linea,true);
                if(
                    $_POST["correo"]==$registro["correo"] &&
                    $_POST["contrasena"]==$registro["contrasena"]
                ){
                    echo json_encode($registro);
                    exit;
                }
            }
            
    }
?>
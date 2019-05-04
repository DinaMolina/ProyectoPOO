<?php
    session_start();
    $archivo = fopen("../data/usuarios.json","r");
    while(($linea=fgets($archivo))){
        $registro = json_decode($linea,true);
        if (
            $_POST["correo"]==$registro["correo"] && 
            ($_POST["contrasena"])==$registro["contrasena"]
        ){
            $registro["estatus"] = "1";
            echo json_encode($registro);
            exit;
        }
    }
    $registro = array();
    $registro["estatus"] = "0";
    echo json_encode($registro);
?>
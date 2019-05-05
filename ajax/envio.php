<?php
    switch($_GET["accion"]){
        case "guardar":
        include("../class/class-envio.php");
                $Envio = new Envio( 
                    $_POST["nombreCompleto"],
                    $_POST["direccionEnvio"],
                    $_POST["ciudad"], 
                    $_POST["region"], 
                    $_POST["codigoPostal"], 
                    $_POST["pais"], 
                    $_POST["telefono"],
                    $_POST["fechaEntrega"], 
                    $_POST["nombreTarjeta"],
                    $_POST["numeroTarjeta"], 
                    $_POST["fechaVencimiento"],                
                );
                echo $Envio->guardar();
            break;
        case "listar":
        include("../class/class-envio.php");
        echo Envio::listarInformacionEnvio();
        break;
    }
?>
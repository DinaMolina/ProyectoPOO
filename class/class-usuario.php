<?php
    class Usuario{
            private $nombre;
            private $contrasena;
            private $correo;
            
            public function __construct(
                    $nombre,
                    $correo,
                    $contrasena                 
            ){
                        $this->nombre=$nombre;
                        $this->correo=$correo;
                        $this->contrasena=$contrasena;                        
            }
            
            /**
             * Get the value of nombre
             */ 
            public function getNombre()
            {
                return $this->nombre;
            }
            /**
             * Set the value of nombre
             *
             * @return  self
             */ 
            public function setNombre($nombre)
            {
                $this->nombre = $nombre;

                return $this;
            }
            /**
             * Get the value of contrasena
             */ 
            public function getContrasena()
            {
                return $this->contrasena;
            }
            /**
             * Set the value of contrasena
             *
             * @return  self
             */ 
            public function setContrasena($contrasena)
            {
                $this->contrasena = $contrasena;

                return $this;
            }
            /**
             * Get the value of correo
             */ 
            public function getCorreo()
            {
                return $this->correo;
            }
            /**
             * Set the value of correo
             *
             * @return  self
             */ 
            public function setCorreo($correo)
            {
                $this->correo = $correo;

                return $this;
            }

         

            public function agregarUsuario(){
                $Usuarios = json_decode(file_get_contents("../data/usuarios.json"),true);
                        
                $u["nombre"]=$this->nombre;
                $u["contrasena"]=$this->contrasena;
                $u["correo"]=$this->correo;            
                
                $Usuarios[] = $u;
                $archivo = fopen("../data/usuarios.json","w");
                fwrite($archivo, json_encode($Usuarios));
            }
            
            public function agregarFormaDePago($nombreTarjeta, $numeroTarjeta){

            }

            public function __toString(){
                $a["nombre"] = $this->nombre;
                $a["correo"] = $this->correo;
                $a["contrasena"] = $this->contrasena;
                return json_encode($a);
            }
            
            public function guardar(){
                $archivo = fopen('../data/usuarios.json','a+'); 
                fwrite($archivo,$this->__toString()."\n"); 
                fclose($archivo);
                return $this->__toString();
            }
            

    }


?>
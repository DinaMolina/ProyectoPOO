<?php
    class Usuario{
            private $nombre;
            private $contrasena;
            private $correo;
            private $direccion;
            private $formaDePago;
            private $numeroTelefono;
            private $lista;
            private $carrito;


            public function __construct(
                    $nombre
                    $contrasena,
                    $correo,
                    $direccion,
                    $formaDePago,
                    $numeroTelefono,
                    $lista,
                    $carrito,
            ){
                        $this->nombre=$nombre;
                        $this->correo=$correo;
                        $this->contrasena=$contrasena;                        
                        $this->direccion=$direccion;
                        $this->formaDePago=$formaDePago;
                        $this->numeroTelefono=$numeroTelefono;
                        $this->lista=$lista;
                        $this->carrito=$carrito;
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

            /**
             * Get the value of direccion
             */ 
            public function getDireccion()
            {
                return $this->direccion;
            }

            /**
             * Set the value of direccion
             *
             * @return  self
             */ 
            public function setDireccion($direccion)
            {
                $this->direccion = $direccion;

                return $this;
            }

            /**
             * Get the value of formaDePago
             */ 
            public function getFormaDePago()
            {
                return $this->formaDePago;
            }

            /**
             * Set the value of formaDePago
             *
             * @return  self
             */ 
            public function setFormaDePago($formaDePago)
            {
                $this->formaDePago = $formaDePago;

                return $this;
            }

            /**
             * Get the value of numeroTelefono
             */ 
            public function getNumeroTelefono()
            {
                return $this->numeroTelefono;
            }

            /**
             * Set the value of numeroTelefono
             *
             * @return  self
             */ 
            public function setNumeroTelefono($numeroTelefono)
            {
                $this->numeroTelefono = $numeroTelefono;

                return $this;
            }

            public function agregarUsuario(){
                $Usuarios = json_decode(file_get_contents("../data/usuarios.json"),true);
                        
                $u["nombre"]=$this->nombre;
                $u["contrasena"]=$this->contrasena;
                $u["correo"]=$this->correo;
                $u["direccion"]=$this->direccion;
                $u["formaDePago"]=$this->formaDePago;
                $u["numeroTelefono"]=$this->numeroTelefono;
                $u["lista"]=$this->lista;
                $u["carrito"]=$this->carrito;
            
            
                
                $Usuarios[] = $u;
                $archivo = fopen("../data/usuarios.json","w");
                fwrite($archivo, json_encode($Usuarios));
            }
            
            public function agregarFormaDePago($nombreTarjeta, $numeroTarjeta){

            }

            public function __toString(){
                $a["nombre"] = $this->nombre;
                $a["correo"] = $this->correo;
                $a["contraseña"] = $this->contraseña;
                $a["Recontraseña"] = $this->Recontraseña;
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
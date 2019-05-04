<?php
    class Producto{
        private $nombreProducto;
        private $precio;
        private $departamento;
        private $imagen;
        private $descripcion;
        private $codigoProducto;

        public function __construct($nombreProducto,
        $precio,
        $departamento,
        $imagen,
        $descripcion,
        $codigoProducto){
                $this->nombreProducto=$nombreProducto;
                $this->precio=$precio;
                $this->departamento=$departamento;
                $this->imagen=$imagen;
                $this->descripcion=$descripcion;
                $this->codigoProducto=$codigoProducto;

        }
              

        /**
         * Get the value of nombreProducto
         */ 
        public function getNombreProducto()
        {
                return $this->nombreProducto;
        }

        /**
         * Set the value of nombreProducto
         *
         * @return  self
         */ 
        public function setNombreProducto($nombreProducto)
        {
                $this->nombreProducto = $nombreProducto;

                return $this;
        }

        /**
         * Get the value of precio
         */ 
        public function getPrecio()
        {
                return $this->precio;
        }

        /**
         * Set the value of precio
         *
         * @return  self
         */ 
        public function setPrecio($precio)
        {
                $this->precio = $precio;
        }

        /**
         * Get the value of departamento
         */ 
        public function getDepartamento()
        {
                return $this->departamento;
        }

        /**
         * Set the value of departamento
         *
         * @return  self
         */ 
        public function setDepartamento($departamento)
        {
                $this->departamento = $departamento;
        }

        /**
         * Get the value of imagen
         */ 
        public function getImagen()
        {
                return $this->imagen;
        }

        /**
         * Set the value of imagen
         *
         * @return  self
         */ 
        public function setImagen($imagen)
        {
                $this->imagen = $imagen;
        }

        /**
         * Get the value of descripcion
         */ 
        public function getDescripcion()
        {
                return $this->descripcion;
        }

        /**
         * Set the value of descripcion
         *
         * @return  self
         */ 
        public function setDescripcion($descripcion)
        {
                $this->descripcion = $descripcion;
        }
        
        public function agregarCarrito(){}


        /**
         * Get the value of codigoProducto
         */ 
        public function getCodigoProducto()
        {
                return $this->codigoProducto;
        }

        /**
         * Set the value of codigoProducto
         *
         * @return  self
         */ 
        public function setCodigoProducto($codigoProducto)
        {
                $this->codigoProducto = $codigoProducto;

                return $this;
        }

        public static function obtenerProductos(){
                return file_get_contents("../data/producto.json");
        }
        public function __toString(){
                $a["nombreProducto"] = $this->nombreProducto;
                $a["precio"] = $this->precio;
                $a["departamento"] = $this->departamento;
                $a["imagen"] = $this->imagen;
                $a["descripcion"] = $this->descripcion;
                $a["codigoProducto"] = $this->codigoProducto;
                return json_encode($a);
            }
         
        public function guardar(){
        $carrito = json_decode(file_get_contents("../data/carrito.json"),true);
        $t=json_decode($this->__toString(), true);  
        $carrito[] = $t;
        $archivo = fopen("../data/carrito.json","w");
        fwrite($archivo, json_encode($carrito)."\n");
        fclose($archivo);
        }
    }    
?>
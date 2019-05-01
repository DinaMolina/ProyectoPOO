<?php
     class Carrito{
        private $producto;
        private $cantidad;
        
        public function __construct($producto,
        $cantidad){
                $this->cantidad=$cantidad;
                $this->producto=$producto;

        }

        /**
         * Get the value of producto
         */ 
        public function getProducto()
        {
                return $this->producto;
        }

        /**
         * Set the value of producto
         *
         * @return  self
         */ 
        public function setProducto($producto)
        {
                $this->producto = $producto;

                return $this;
        }

        /**
         * Get the value of cantidad
         */ 
        public function getCantidad()
        {
                return $this->cantidad;
        }

        /**
         * Set the value of cantidad
         *
         * @return  self
         */ 
        public function setCantidad($cantidad)
        {
                $this->cantidad = $cantidad;

                return $this;
        }
        public function agregarProducto(){}
                
        public static function listarProductos(){
                return file_get_contents("../data/carrito.json");
        }        
     }
?>
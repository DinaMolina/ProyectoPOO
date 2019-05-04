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
        public function __toString(){
                $a["producto"] = $this->producto;
                $a["cantidad"] = $this->cantidad;
                return json_encode($a);
            }
            public function agregar(){
                $item = json_decode(file_get_contents("../data/carrito.json"),true);
                $t=json_decode($this->__toString(), true);     
                file_put_contents($item,$t);
            }

        public function agregarProductoCarrito(){
                $productos = json_decode(file_get_contents("../data/carrito.json"),true); 
                $p["producto"]=$this->producto;
                $p["cantidad"]=$this->cantidad;

                $productos[] = $p;
                $archivo = fopen("../data/carrito.json","w");
                fwrite($archivo, json_encode($productos));
        }

        public function guardarProductoCarrito(){
                $archivo = fopen('../../data/carrito.json','a+'); 
                fwrite($archivo,$this->__toString()."\n"); 
                fclose($archivo);
                return $this->__toString();
        }
                
        public static function listarProductos(){
                return file_get_contents("../data/carrito.json");
        }        
     }
?>
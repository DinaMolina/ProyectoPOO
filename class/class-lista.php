<?php
class Lista{
private $tipo;
private $producto;


/**
 * Get the value of tipo
 */ 
public function getTipo()
{
return $this->tipo;
}

/**
 * Set the value of tipo
 *
 * @return  self
 */ 
public function setTipo($tipo)
{
$this->tipo = $tipo;

return $this;
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

public function listar(){
    
}
public function agregarProducto(){

}    
}


?>
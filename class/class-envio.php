<?php
    class Envio{
        private $nombreCompleto;
        private $direccionEnvio;
        private $ciudad;
        private $region;
        private $codigoPostal;
        private $pais;
        private $telefono;
        private $fechaEntrega;
        private $nombreTarjeta;
        private $numeroTarjeta;
        private $fechaVencimiento;

        public function __construct(
            $nombreCompleto,
            $direccionEnvio,
            $ciudad,
            $region,
            $codigoPostal,
            $pais,
            $telefono,
            $fechaEntrega,
            $nombreTarjeta,
            $numeroTarjeta,
            $fechaVencimiento
        ){
            $this->nombreCompleto=$nombreCompleto;
            $this->direccionEnvio=$direccionEnvio;
            $this->ciudad=$ciudad;
            $this->region=$region;
            $this->codigoPostal=$codigoPostal;
            $this->pais=$pais;
            $this->telefono=$telefono;
            $this->fechaEntrega=$fechaEntrega;    
            $this->nombreTarjeta=$nombreTarjeta;
            $this->numeroTarjeta=$numeroTarjeta;
            $this->fechaVencimiento=$fechaVencimiento;
        }
        

        /**
         * Get the value of nombreCompleto
         */ 
        public function getNombreCompleto()
        {
                return $this->nombreCompleto;
        }

        /**
         * Set the value of nombreCompleto
         *
         * @return  self
         */ 
        public function setNombreCompleto($nombreCompleto)
        {
                $this->nombreCompleto = $nombreCompleto;

                return $this;
        }

        /**
         * Get the value of direccionEnvio
         */ 
        public function getDireccionEnvio()
        {
                return $this->direccionEnvio;
        }

        /**
         * Set the value of direccionEnvio
         *
         * @return  self
         */ 
        public function setDireccionEnvio($direccionEnvio)
        {
                $this->direccionEnvio = $direccionEnvio;

                return $this;
        }

        /**
         * Get the value of ciudad
         */ 
        public function getCiudad()
        {
                return $this->ciudad;
        }

        /**
         * Set the value of ciudad
         *
         * @return  self
         */ 
        public function setCiudad($ciudad)
        {
                $this->ciudad = $ciudad;

                return $this;
        }

        /**
         * Get the value of region
         */ 
        public function getRegion()
        {
                return $this->region;
        }

        /**
         * Set the value of region
         *
         * @return  self
         */ 
        public function setRegion($region)
        {
                $this->region = $region;

                return $this;
        }

        /**
         * Get the value of codigoPostal
         */ 
        public function getCodigoPostal()
        {
                return $this->codigoPostal;
        }

        /**
         * Set the value of codigoPostal
         *
         * @return  self
         */ 
        public function setCodigoPostal($codigoPostal)
        {
                $this->codigoPostal = $codigoPostal;

                return $this;
        }

        /**
         * Get the value of pais
         */ 
        public function getPais()
        {
                return $this->pais;
        }

        /**
         * Set the value of pais
         *
         * @return  self
         */ 
        public function setPais($pais)
        {
                $this->pais = $pais;

                return $this;
        }

        /**
         * Get the value of telefono
         */ 
        public function getTelefono()
        {
                return $this->telefono;
        }

        /**
         * Set the value of telefono
         *
         * @return  self
         */ 
        public function setTelefono($telefono)
        {
                $this->telefono = $telefono;

                return $this;
        }

        /**
         * Get the value of fechaEntrega
         */ 
        public function getfechaEntrega()
        {
                return $this->fechaEntrega;
        }

        /**
         * Set the value of fechaEntrega
         *
         * @return  self
         */ 
        public function setfechaEntrega($fechaEntrega)
        {
                $this->fechaEntrega = $fechaEntrega;

                return $this;
        }

        /**
         * Get the value of nombreTarjeta
         */ 
        public function getNombreTarjeta()
        {
                return $this->nombreTarjeta;
        }

        /**
         * Set the value of nombreTarjeta
         *
         * @return  self
         */ 
        public function setNombreTarjeta($nombreTarjeta)
        {
                $this->nombreTarjeta = $nombreTarjeta;

                return $this;
        }

        /**
         * Get the value of numeroTarjeta
         */ 
        public function getNumeroTarjeta()
        {
                return $this->numeroTarjeta;
        }

        /**
         * Set the value of numeroTarjeta
         *
         * @return  self
         */ 
        public function setNumeroTarjeta($numeroTarjeta)
        {
                $this->numeroTarjeta = $numeroTarjeta;

                return $this;
        }

        /**
         * Get the value of fechaVencimiento
         */ 
        public function getFechaVencimiento()
        {
                return $this->fechaVencimiento;
        }

        /**
         * Set the value of fechaVencimiento
         *
         * @return  self
         */ 
        public function setFechaVencimiento($fechaVencimiento)
        {
                $this->fechaVencimiento = $fechaVencimiento;

                return $this;
        }
        
        public function __toString(){
            $e["nombreCompleto"] = $this->nombreCompleto;
            $e["direccionEnvio"] = $this->direccionEnvio;
            $e["ciudad"] = $this->ciudad;
            $e["region"] = $this->region;
            $e["codigoPostal"] = $this->codigoPostal;
            $e["pais"] = $this->pais;
            $e["telefono"] = $this->telefono;
            $e["fechaEntrega"] = $this->fechaEntrega;
            $e["nombreTarjeta"] = $this->nombreTarjeta;
            $e["numeroTarjeta"] = $this->numeroTarjeta;
            $e["fechaVencimiento"] = $this->fechaVencimiento;
            return json_encode($e);
        }
        public function guardar(){
            $archivo = fopen('../data/envios.json','a+'); 
            fwrite($archivo,$this->__toString()."\n"); 
            fclose($archivo);
            return $this->__toString();
        }
    }
?>
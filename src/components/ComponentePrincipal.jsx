// en este componente definimos los useState, funciones, etc,
//que necesitamos desplegar en todo el proyecto.
import React, { useState } from "react";
import PlanificadorGastos from "./PlanificadorGastos";
import Modal from "./Modal";

const ComponentePrincipal = () => {
    
    const[pruebaPresupuesto,setPruebaPresupuesto]= useState(4000000);
    const[calcularPorcentaje,setCalcularPorcentaje]=useState(100);
    const[abrirModal,setAbrirModal]=useState(false);


    return (
        <>
        <PlanificadorGastos
            pruebaPresupuesto={pruebaPresupuesto}
            calcularPorcentaje={calcularPorcentaje}
            setAbrirModal={setAbrirModal}
        />
        <Modal
            estaAbierto={abrirModal}
        />
       
        </>
    )
}

export default ComponentePrincipal;

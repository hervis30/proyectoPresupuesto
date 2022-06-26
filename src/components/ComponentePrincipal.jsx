// en este componente definimos los useState, funciones, etc,
//que necesitamos desplegar en todo el proyecto.
import React, { useState } from "react";
import PlanificadorGastos from "./PlanificadorGastos";
import Modal from "./Modal";

const ComponentePrincipal = () => {
    //Componentes para abrir modal
    const[pruebaPresupuesto,setPruebaPresupuesto]= useState(4000000);
    const[calcularPorcentaje,setCalcularPorcentaje]=useState(100);
    const[abrirModal,setAbrirModal]=useState(false);

    //Para almacenar los inputs de formulario
    const[nombreGasto,setNombreGasto]=useState("");
    const[cantidadGasto,setCantidadGastos]=useState(0);
    const[categoria,setCategoria]=useState("");

    return (
        <>
        <PlanificadorGastos
            pruebaPresupuesto={pruebaPresupuesto}
            calcularPorcentaje={calcularPorcentaje}
            setAbrirModal={setAbrirModal}
        />
        <Modal
            abrirModal={abrirModal}
            setAbrirModal={setAbrirModal}

            setNombreGasto={setNombreGasto}
            setCantidadGasto={setCantidadGastos}
            setCategoria={setCategoria}
        />
       
        </>
    )
}

export default ComponentePrincipal;

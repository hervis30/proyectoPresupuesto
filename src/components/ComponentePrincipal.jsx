// en este componente definimos los useState, funciones, etc,
//que necesitamos desplegar en todo el proyecto.
import React, { useState } from 'react';
import Modal from './Modal';
import PlanificadorGastos from './PlanificadorGastos';
import './model.css'


const ComponentePrincipal = () => {

    const [pruebaPresupuesto, setPruebaPresupuesto] = useState(4000000);
    const [calcularPorcentaje, setCalcularPorcentaje] = useState(100);
    const [abrirModal, setAbrirModal] = useState(false);

    //Funciones para abrir y cerrar modal 
    

    const cerrarModal = () => {
        setAbrirModal(false);
    }

    return (
        <>
            <PlanificadorGastos
                pruebaPresupuesto={pruebaPresupuesto}
                calcularPorcentaje={calcularPorcentaje}
                setAbrirModal={setAbrirModal}
            />
            <Modal
                abrirModal={abrirModal}
                cerrarModal={cerrarModal}
            />
        </>
    )
}

export default ComponentePrincipal;
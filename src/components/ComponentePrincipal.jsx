
/*En este componente definimos los useState, funciones, etc,
que necesitamos desplegar en todo el proyecto.*/

import React, { useState } from "react";
import PlanificadorGastos from "./PlanificadorGastos";
import Modal from "./Modal";
import CalcularPresupuesto from "./CalcularPresupuesto";
import IngresoPresupuesto from "./IngresoPresupuesto";
import PlanificadorCard from "./PlanificadorCard";

const ComponentePrincipal = () => {

    //Componentes para abrir modal
    const [pruebaPresupuesto, setPruebaPresupuesto] = useState(0);
    const [irPruebaPresupuesto, setIrPruebaPresupuesto] = useState(false);
    const [calcularPorcentaje, setCalcularPorcentaje] = useState(100);
    const [abrirModal, setAbrirModal] = useState(false);

    //Para almacenar los inputs de formulario
    const [nombreGasto, setNombreGasto] = useState("");
    const [cantidadGasto, setCantidadGastos] = useState("");
    const [categoria, setCategoria] = useState("");

    //Calculo de presupuesto
    const [gastos, setGastos] = useState([]);
    const [disponible, setDisponible] = useState(0);
    const [gastado, setGastado] = useState(0);
    
   //se crea un id unico
    const idRandom = () => {
        const random = Math.random().toString(36).substring(2)
        const fecha = Date.now().toString(36)
        return random + fecha
    }

    const presupuestoGasto = (gasto) => {
        gasto.idUnica = idRandom();
        setGastos([...gastos, gasto])
    }
    

    return (

        <>
        
            {/* Llamado de los componentes */}
           
            {irPruebaPresupuesto ?
                (<PlanificadorGastos
                    pruebaPresupuesto={pruebaPresupuesto}
                    calcularPorcentaje={calcularPorcentaje}
                    setAbrirModal={setAbrirModal}
                    setDisponible={setDisponible}
                    disponible={disponible}
                    gastado={gastado}
                    setCalcularPorcentaje={setCalcularPorcentaje}
                />) : (<IngresoPresupuesto
                    pruebaPresupuesto={pruebaPresupuesto}
                    setPruebaPresupuesto={setPruebaPresupuesto}
                    irPruebaPresupuesto={irPruebaPresupuesto}
                    setIrPruebaPresupuesto={setIrPruebaPresupuesto}
                />)}
            

            <Modal
                //Llamdados para abrir modal
                abrirModal={abrirModal}
                setAbrirModal={setAbrirModal}

                //Llamados para los campos de ingreso de datos en el modal
                setNombreGasto={setNombreGasto}
                setCantidadGasto={setCantidadGastos}
                setCategoria={setCategoria}
                cantidadGasto={cantidadGasto}
                presupuestoGasto={presupuestoGasto}
            />

            <CalcularPresupuesto
                //Operaciones de presupuesto
                pruebaPresupuesto={pruebaPresupuesto}
                gastos={gastos}
                disponible={disponible}
                setDisponible={setDisponible}
                gastado={gastado}
                setGastado={setGastado}
                calcularPorcentaje={calcularPorcentaje}
                setCalcularPorcentaje={setCalcularPorcentaje}
            />
            <PlanificadorCard
                setNombreGasto={setNombreGasto}
                setCantidadGastos={setCantidadGastos}
                setCategoria={setCategoria}
            />
           
        </>
    )
}

export default ComponentePrincipal;

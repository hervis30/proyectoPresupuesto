import React from 'react'
import { useEffect, useState } from 'react'

export const CalcularPresupuesto = ({pruebaPresupuesto, gastos, setDisponible, setGastado, setCalcularPorcentaje}) => {

    //Operaciones para el presupuesto dispobile y en uso

    const { cantidadGasto } = gastos;
    const { montoIngresado } = pruebaPresupuesto;
    const datoIngresado = Number(montoIngresado);

    useEffect(() => { //Con reduce se suman los elementos que hay en el arreglo
        const presupuestoUso = gastos.reduce((total, item) => parseInt(item.cantidadGasto) + total, 0)
        console.log( presupuestoUso)
        {
            presupuestoUso == 0 ? (setDisponible(presupuestoUso)) : (
                setDisponible(datoIngresado - presupuestoUso)
            );
        }
        {
            presupuestoUso == 0 ? (setCalcularPorcentaje(0)) : (
                setCalcularPorcentaje(((datoIngresado - (datoIngresado - presupuestoUso)) /datoIngresado) * 100));
        }
        setGastado(presupuestoUso);
    }, [gastos])


    return (
        <div>
        </div>
    )
}

export default CalcularPresupuesto; 
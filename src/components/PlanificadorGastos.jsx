import React from 'react'
import ComponentePrincipal from './ComponentePrincipal'
import { useEffect, useState } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


const PlanificadorGastos = ({ pruebaPresupuesto, calcularPorcentaje, setAbrirModal, disponible, gastado }) => {

    const { montoIngresado } = pruebaPresupuesto;
    console.log(montoIngresado);

    return (
        <div>
            <div className="planificador">
                <h1>Planificador de Gastos</h1>

                <div className="grafica">
                    <div style={{ width: 300, height: 300 }}>
                        <CircularProgressbar
                            value={calcularPorcentaje}
                            text={`${calcularPorcentaje.toFixed(2)}% Gastado`}
                            backgroundPadding={6}
                            strokeWidth={12}
                            styles={buildStyles({
                                textColor: "#000000",
                                pathColor: '#00966B',
                                trailColor: "#d6d6d6",
                                textSize: '8px',
                                strokeLinecap: 'row',
                            })}
                        />
                    </div>
                    <div className="totalPresupuesto">
                        <h4>Total Presupuesto:  </h4>
                        <p>$ {montoIngresado}</p>
                        <h4>Disponible: </h4>
                        <p>$ {disponible}</p>
                        <h4>Gastado: </h4>
                        <p>$ {gastado}</p>
                    </div>
                </div>
                <div className="botones">
                    <button className="agregar" onClick={() => { setAbrirModal(true) }}>Agregar Gasto</button>
                    <button className="reset">Reset App</button>
                </div>
            </div>
        </div>

    )
}
export default PlanificadorGastos;
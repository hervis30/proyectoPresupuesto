import React from 'react'
import ComponentePrincipal from './ComponentePrincipal'
import { useEffect,useState } from 'react';
import { CircularProgressbar,buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


const PlanificadorGastos = ({pruebaPresupuesto,calcularPorcentaje,setAbrirModal}) => {


    
  return (
    <>
        <div className="planificadorPadre">
            <h1>Planificador de Gastos</h1>

            <div className="planificadorHijo">

                <div className="torta">
                        <div style={{width:200,height:200}}>
                            <CircularProgressbar
                            value={calcularPorcentaje}
                            text={`${calcularPorcentaje.toFixed(0)}% Total`}
                            backgroundPadding={6}
                            strokeWidth={12}
                            styles={buildStyles({
                                textColor: "#000000",
                                pathColor: '#00966B',
                                trailColor: "#c9c9c9",
                                textSize: '15px'
                            })}
                            />
                        </div>
                </div>
                <div className="presupuestoGastosDisponible">
                        <h4>Total Presupuesto:</h4>
                        <p>${(pruebaPresupuesto)}</p>
                        <h4>Disponible:</h4>
                        <h4>Gastado:</h4>
                </div>
                <div className="botones">
                    <div className="botonAgregar">
                        <button className="abrirModal" onClick={()=>{setAbrirModal(true)}}><span>Agregar Gasto</span></button>
                        
                    </div>
                </div>
            </div>
        </div>
    
    </>
  )
}

export default PlanificadorGastos
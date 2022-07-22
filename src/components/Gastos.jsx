import React from 'react'
import "../App.css/";

export const Gastos = ({gasto}) => {
  return (
    <div className="Gasto">
        <div className="miGasto">
            <div className="categoria">
                <p>
                    {gasto.nombreGasto}
                </p>
                <p>
                    {gasto.cantidadGasto}
                </p>
                <p>
                    {gasto.categoria}
                </p>
            </div>
        </div>
    </div>
  )
}

export default Gastos;

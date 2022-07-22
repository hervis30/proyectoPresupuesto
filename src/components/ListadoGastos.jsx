import React from 'react'
import Gastos from './Gastos';
import "../App.css";

export const ListadoGastos = ({gastos}) => {
  return (
    <div className="ListaGastos">
        <h1>{gastos.length ? "Lista de gastos" : "No hay gastos" }</h1>

        {gastos.map(gasto=>(
            <Gastos 
                key={gasto.idUnica}
                gasto={gasto}
            />))}
    </div>
  )
}

export default ListadoGastos;
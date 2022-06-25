import React from 'react'
import "../App.css/"
const Modal = ({abrirModal,setAbrirModal}) => {
    
  return (
    <div className={`modal ${abrirModal && "modal-abierto"}`}>
        <div className="modalContenido">
            <form >
                <button className="cerrarModal" onClick={()=>{setAbrirModal(false)}}><span> X </span></button>
                <h2>Agregar Gasto</h2>
                <h5>Nombre Gasto</h5>
                <input type="text" />
                <h5>Cantidad Gasto</h5>
                <input type="number" />
                <h5>Categoria</h5>
                <select name="" id="">
                    <option value=""></option>
                    <option value="">Alimentacion</option>
                    <option value="">Salud</option>
                    <option value="">Servicios</option>
                    <option value="">Gasolina</option>
                    <option value="">Netflix</option>
                    <option value="">Vacaciones</option>
                    <option value="">Hogar</option>
                </select>
            </form>
            <button>Agregar Gasto</button>
        </div>
    </div>
  )
}

export default Modal
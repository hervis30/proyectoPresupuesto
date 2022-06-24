import React from 'react'
import './model.css'

export const Modal = ({setAbrirModal, cerrarModal}) => {
  return (
//Pruebas y conexion entre botones
    <div className={`modal ${setAbrirModal && 'modal-open'}`} >

      <div className="modal-content">
        <div className="data">
          <h1 className='name-section-data'>Ingreso</h1>
          <input className='info-form' type="text" />
        </div>
        <div className="buttons-modal">
         <button className='button-modal' onClick={cerrarModal}>Cancelar</button>
        </div>
      </div>

    </div>
  )
}

export default Modal;
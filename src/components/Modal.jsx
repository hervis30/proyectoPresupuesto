import React from 'react';
import { useState } from 'react';
import { Fragment } from 'react';

const Modal = () => {

    const [modal, setModal] = useState(false);

    const AbrirModal = () =>{
        setModal(!modal)
    }

    if(modal) {
        document.body.classList.add('active-modal')
      } else {
        document.body.classList.remove('active-modal')
      }

    return (
        <Fragment>
            <div>
                <button className='BtnModal'
                    onClick={AbrirModal}
                >
                Agregar Gasto
                </button>
                {modal && (
                    <div className="modal">
                        <div onClick={AbrirModal} className="overlay"></div>
                        <div className="modal-content">
                            <h2>Agregar Gastos</h2>
                            <form className="FormularioGasto">
                                <label>Nombre Gasto</label>
                                <input type="text"
                                className="NombreGastos"
                                 />
                                <label>Cantidad Gasto</label>
                                <input type="number"
                                className="CantidadGasto"
                                 />
                                 <label>Categoria</label>
                                <select className='OpcionData'>
                                    <option value="1">Alimentos</option>
                                    <option value="2">Salud</option>
                                    <option value="3">Nefix</option>
                                    <option value="4">Entretenimiento</option>
                                    <option value="5">Viajes</option>
                                    <option value="6">Tecnologia</option>
                                </select>
                            </form>
                            
                            <p className="close-modal" 
                            onClick={AbrirModal}
                            >
                            X
                            </p>
                            <button type="submit" className="BntAgregarGasto">Agregar Gastos</button>
                        </div>
                    </div>
                )}
            </div>
        </Fragment>
        
    );
};

export default Modal;
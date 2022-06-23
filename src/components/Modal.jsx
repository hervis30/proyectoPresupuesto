import React from 'react';
import { useState } from 'react';
import { Fragment } from 'react';

const Modal = () => {

    const [modal, setModal] = useState(false);

    //funcion para el modal 
    const AbrirModal = () =>{
        setModal(!modal)
    }
    //condicion para el manejo del modal 
    if(modal) {
        document.body.classList.add("active-modal")
    } else {
        document.body.classList.remove("active-modal")
    }

    return (
        <Fragment>
            <div>
                {/*boton de abrir modal */}
                <button className="BtnModal"
                    onClick={AbrirModal}
                >
                Agregar Gasto
                </button>
                
                {/*funcion para mostrar modal */}
                {modal && (
                    <div className="modal">
                        <div onClick={AbrirModal} className="overlay"></div>
                        
                        <div className="modal-content">
                            <h2>Agregar Gastos</h2>
                            {/*formulario del modal */}
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
                            {/* boton de cerrar el modal */}
                            <p className="close-modal" 
                            onClick={AbrirModal}
                            >
                            X
                            </p>
                            {/* boton para enviar los datos al planificador de gastos */}
                            <button type="submit" 
                            className="BntAgregarGasto"
                            >Agregar Gastos
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </Fragment>
        
    );
};

export default Modal;
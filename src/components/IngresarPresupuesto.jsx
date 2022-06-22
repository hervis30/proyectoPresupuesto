import React from 'react';

const IngresarPresupuesto = () => {
    return (
        <div className='ingresarPresupuesto'>
            <div className='HeaderPresupuesto'>
                <h2>Ingresar Presupuesto</h2>
                <input type="number" className='PresupuestoInpunt' />
            </div>
            <button type='submit'>Enviar</button>
        </div>
    );
};

export default IngresarPresupuesto;
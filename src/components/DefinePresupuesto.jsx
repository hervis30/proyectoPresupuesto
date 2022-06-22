import React from 'react';

const DefinePresupuesto = ({placeholder}) => {
    return (
        <div className="IngresarPresupuesto">
            <h2 className="HeaderPresupuesto">Define Presupuesto</h2> 
            <input type="number" className="PresupuestoInpunt" placeholder={placeholder}/>
            <button type="submit" className='BtnGestionar'>Gestionar</button>
        </div>
    );
};

export default DefinePresupuesto;
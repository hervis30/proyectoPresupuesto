import React from 'react';
import { useState } from 'react';

const DefinePresupuesto = ({placeholder}) => {

    // const [state, setstate] = useState(initialState);

    return (
        <div className="IngresarPresupuesto">
            <h2 className="HeaderPresupuesto">Define Presupuesto</h2> 
            <input type="number" 
                className="PresupuestoInpunt" 
                placeholder={placeholder}
                onClick={event=>alert('')}
            />
            <button type="submit" 
             className="BtnGestionar">Gestionar 
            </button>
        </div>
    );
};

export default DefinePresupuesto;
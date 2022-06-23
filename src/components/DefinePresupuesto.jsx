import React from 'react';
import { Fragment} from 'react';

const DefinePresupuesto = ({placeholder}) => {

    return (
        
        <Fragment>
            <div className="IngresarPresupuesto">
                <h2 className="HeaderPresupuesto">Define Presupuesto</h2> 
                <input type="number" 
                    className="PresupuestoInpunt" 
                    placeholder={placeholder}
                />
                <button type="submit" 
                className="BtnGestionar"
                >Gestionar 
                </button>
            </div>
        </Fragment>
       
    );
};

export default DefinePresupuesto;
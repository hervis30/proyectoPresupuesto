import React from 'react'
import { useForm } from 'react-hook-form'

const IngresoPresupuesto = ({ setPruebaPresupuesto, setIrPruebaPresupuesto }) => {

    const { register, handleSubmit, formState: { errors }, reset, trigger } = useForm();
    const onSubmit = (data) => {

        setPruebaPresupuesto(data);
        setIrPruebaPresupuesto(true);


    }

    return (
        <div className="formularioIngresoPresupuesto ">

            <form className="padreFormulario" onSubmit={handleSubmit(onSubmit)}>

                <label className="tituloCaja" >Define presupuesto</label>

                <input className={`form-input ${errors.montoIngresado && "invalid"}`} placeholder="Digite Presupuesto" id="presupuesto" type="number"
                    
                    {...register("montoIngresado",  {
                        required: "presupuesto es requerido", min:  {
                            value: 1, message: "Debe ingresar un numero positivo",
                        }, max: {
                            value: 1000000000, message: "solo se permiten hasta 9 digitos",
                        },
                        pattern: {
                            value: /^[0-9]*$/
                            , message: "solo se permiten numeros",
                        }
                    })}
                    onKeyUp={() => {
                        trigger("montoIngresado");
                    }}

                />

                {errors.montoIngresado && (<small className='error'>{errors.montoIngresado.message}</small>)}
                <button className='botonIngreso' type="Submit" value="enviar" >Ingresa tu presupuesto</button>
            </form>
        </div>

    )
}

export default IngresoPresupuesto
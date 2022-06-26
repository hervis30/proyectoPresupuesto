import React from 'react'
import "../App.css/"
import { useForm } from 'react-hook-form'
const Modal = ({ abrirModal, setAbrirModal, setNombreGasto, setCantidadGastos, setCategoria }) => {

  const { register, handleSubmit, watch, formState: { errors }, trigger } = useForm();
  const onSubmit = data => console.log(data);


  return (
    <div className={`modal ${abrirModal && "modal-abierto"}`}>
      <div className="modalContenido">

        <button className="cerrarModal" onClick={() => { setAbrirModal(false) }}><span> X </span></button>
        <form onSubmit={handleSubmit(onSubmit)}>

          <h2>Agregar Gasto</h2>

          <h5>Nombre Gasto</h5>
          <input className={`form-input ${errors.nombreGasto && "invalid"} `} type="text" {...register("nombreGasto",
            {
              required: "nombre es requerido", pattern: {
                value: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, message:
                  "no se permiten numeros, ni caracteres especiales"
              }
            })}
            onKeyUp={() => {
              trigger("nombreGasto");
            }} />
          {errors.nombreGasto && (<small>{errors.nombreGasto.message}</small>)}

          <h5>Cantidad Gasto</h5>
          <input className={`form-input ${errors.cantidadGasto && "invalid"} `} type="number"
            {...register("cantidadGasto", {
              required: "Debe ingresar el presupuesto",
              pattern: {
                value: /^[0-9]*$/
                , message: "solo se permiten numeros",
              }
            }
            )}
            onKeyUp={() => {
              trigger("cantidadGasto");
            }}
          />
          {errors.cantidadGasto && (<small>{errors.cantidadGasto.message}</small>)}


          <h5>Categoria</h5>
          <select className={`form-input ${errors.categoria && "invalid"} `} name="" id=""
            {...register("categoria", { required: "Debe seleccionar un tipo" })}
            onKeyUp={() => {
              trigger("doctor");
            }}  >
            <option value=""></option>
            <option value="">Alimentacion</option>
            <option value="">Salud</option>
            <option value="">Servicios</option>
            <option value="">Gasolina</option>
            <option value="">Netflix</option>
            <option value="">Vacaciones</option>
            <option value="">Hogar</option>
          </select>
          {errors.categoria && (<small>{errors.categoria.message}</small>)}
          <button className='boton' type='submit' value='Enviar'>Agregar Gasto</button>
        </form>

      </div>
    </div>
  )
}

export default Modal


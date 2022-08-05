import React from "react";
import "../App.css/";
import { useForm } from "react-hook-form";

const Modal = ({ abrirModal, setAbrirModal, presupuestoGasto }) => {
  //Uso de biblioteca useForm para validacion
  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
  } = useForm();

  const onSubmit = (data) => {
    presupuestoGasto(data);
    setAbrirModal(false);
  };

  return (
    <div className={`modal ${abrirModal && "modal-abierto"}`}>
      <div className="modalContenido">
        <div className="titlecloser">
          <button
            className="cerrarModal"
            onClick={() => {
              setAbrirModal(false);
            }}
          >
            <span> X </span>
          </button>
        </div>

        <h2>Agregar Gasto</h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          {/*Code del campo para ingresar nombre del gasto */}
          <h5>Nombre Gasto</h5>

          <input
            className={`form-input ${errors.nombreGasto && "invalid"} `}
            type="text"
            {...register("nombreGasto", {
              required: "nombre es requerido",
              pattern: {
                value: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
                message: "no se permiten numeros",
              },
            })}
            onKeyUp={() => {
              trigger("nombreGasto");
            }}
          />
          {errors.nombreGasto && <small>{errors.nombreGasto.message}</small>}

          {/*Code del campo para ingresar cantidad del gasto */}
          <h5>Cantidad Gasto</h5>
          <input
            className={`form-input ${errors.cantidadGasto && "invalid"}`}
            type="number"
            {...register("cantidadGasto", {
              required: "Debe ingresar el presupuesto",
              pattern: {
                value: /^[0-9]*$/,
                message: "solo se permiten numeros",
              },
            })}
            onKeyUp={() => {
              trigger("cantidadGasto");
            }}
          />
          {errors.cantidadGasto && (
            <small>{errors.cantidadGasto.message}</small>
          )}

          {/*Code del campo para seleecionar la categoria del gasto */}
          <h5>Categoria</h5>
          <select
            className={`form-input ${errors.categoria && "invalid"} `}
            name=""
            id=""
            {...register("categoria", { required: "Debe seleccionar un tipo" })}
            onKeyUp={() => {
              trigger("nombreCategoria");
            }}
          >
            <option value=""></option>
            <option value="alimentacion">Alimentacion</option>
            <option value="salud">Salud</option>
            <option value="servicios">Servicios</option>
            <option value="gasolina">Gasolina</option>
            <option value="netflix">Netflix</option>
            <option value="vacaciones">Vacaciones</option>
            <option value="hogar">Hogar</option>
          </select>
          {errors.categoria && <small>{errors.categoria.message}</small>}

          <button className="botonGastos" type="submit" value="Enviar">
            Agregar Gasto
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;

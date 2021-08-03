import React, { useState } from 'react';
import { calcularTotal } from '../helper';

const Formulario = props => {
  const {
    cantidad,
    guardarCantidad,
    plazo,
    guardarPlazo,
    guardarTotal,
    guardarCargando,
  } = props;
  // Definir stat
  const [error, guardarError] = useState(false);
  // Cuando un usuario hace submit
  const calcularPrestamo = e => {
    e.preventDefault();
    // validar
    if (cantidad === 0 || plazo === '') {
      guardarError(true);
    } else {
      guardarError(false);
    }
    // Habilitar Spinner
    guardarCargando(true);
    setTimeout(() => {
      // realizar cotización
      const total = calcularTotal(cantidad, plazo);
      // Una vez calculado, guardarTotal
      guardarTotal(total);
      // Deshabilitar el spinner
      guardarCargando(false);
    }, 3000);
  };
  return (
    <>
      <form onSubmit={calcularPrestamo}>
        <div className="row">
          <div>
            <label htmlFor="cantidadPrestamo">Cantidad Prestamo</label>
            <input
              className="u-full-width"
              type="number"
              placeholder="Ejemplo: 3000"
              onChange={e => guardarCantidad(e.target.value)}
              id="cantidadPrestamo" />
          </div>
          <div>
            <label>Plazo para Pagar</label>
            <select
              className="u-full-width"
              onChange={e => guardarPlazo(e.target.value)}>
              <option value="">Seleccionar</option>
              <option value="3">3 meses</option>
              <option value="6">6 meses</option>
              <option value="12">12 meses</option>
              <option value="24">24 meses</option>
            </select>
          </div>
          <div>
            <input
              type="submit"
              value="Calcular"
              className="button-primary u-full-width"
              id="calcularButton" />
          </div>
        </div>
      </form>
      {error ? (
        <p className="error">Todos los campos son obligatorios</p>
      ) : null}
    </>
  );
};

export default Formulario;

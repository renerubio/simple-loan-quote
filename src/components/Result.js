import React from 'react';
import constants from '../texts';

const Resultado = ({ total, plazo, cantidad }) => {
  const textosDinamicos = {
    cantidad: `La cantidad solicitada es: €${cantidad}`,
    plazoMeses: `A pagar en: ${plazo} meses`,
    pagoMensual: `Su pago mensual es: €${total / plazo}`,
    total: `Total a pagar: €${total}`,
  };
  return (
    <div className="u-full-width resultado">
      <h2>{constants.titleResult}</h2>
      <p>{textosDinamicos.cantidad}</p>
      <p>{textosDinamicos.plazoMeses}</p>
      <p>{textosDinamicos.pagoMensual}</p>
      <p>{textosDinamicos.total}</p>
    </div>
  );
};
export default Resultado;

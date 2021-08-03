import React from 'react';
import constants from '../texts';

const Result = ({ total, term, amount }) => {
  return (
    <div className="u-full-width resultado">
      <h2>{constants.result.titleResult}</h2>
      <p>{constants.result.amount} <b>{parseFloat(amount).toFixed(2)} €</b></p>
      <p>{constants.result.toPayIn} <b>{term}</b> {constants.result.termMonths}</p>
      <p>{constants.result.paymentMonthly} <b>{parseFloat(total / term).toFixed(2)} €</b></p>
      <p>{constants.result.total} <b>{parseFloat(total).toFixed(2)} €</b></p>
    </div>
  );
};
export default Result;

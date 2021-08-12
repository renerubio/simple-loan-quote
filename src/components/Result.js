import React from 'react';
import { constants, formatValue } from '../utils';
const { titleResult, amountLoan, toPayIn, termMonths, paymentMonthly, total } = constants.result;
const Result = ({ totalValue, term, amountLoanValue }) => {
  return (
    <div className="u-full-width resultado">
      <h2>{titleResult}</h2>
      <p>{amountLoan} <b>{formatValue(amountLoanValue)}</b></p>
      <p>{toPayIn} <b>{term}</b> {termMonths}</p>
      <p>{paymentMonthly} <b>{formatValue(totalValue / term)}</b></p>
      <p>{total} <b>{formatValue(totalValue)}</b></p>
    </div>
  );
};
export default Result;

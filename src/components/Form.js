import React, { useEffect } from 'react';
import { calculateTotal, texts } from './../utils';

const FormLoan = ({ amountLoan, updateAmountLoan, term, updateTerm, updateTotal, updateLoading }) => {

  const { labelQuantity, placeholder, labelTerm, select, _3_months, _6_months, _12_months, _24_months } = texts.form;

  useEffect(() => {
    updateTotal(calculateTotal(amountLoan, term));
    if (amountLoan > 0 && term >= 3) {
      updateLoading(true);
      setTimeout(() => {
        updateLoading(false);
      }, 1000);
    }
  }, [amountLoan, updateLoading, updateTotal, term]);

  const handleOnChangeAmount = (e) => {
    updateAmountLoan(Number(e.target.value));
  }
  const handleOnChangeTerm = (e) => {
    updateTerm(Number(e.target.value));
  }
  return (
    <form>
      <div className="row">
        <div>
          <label htmlFor="amountLoanLoan">{labelQuantity}</label>
          <input
            className="u-full-width"
            type="number"
            placeholder={placeholder}
            onChange={handleOnChangeAmount}
            id="amountLoanLoan" />
        </div>
        <div>
          <label>{labelTerm}</label>
          <select
            className="u-full-width"
            onChange={handleOnChangeTerm}>
            <option value="0">{select}</option>
            <option value="3">{_3_months}</option>
            <option value="6">{_6_months}</option>
            <option value="12">{_12_months}</option>
            <option value="24">{_24_months}</option>
          </select>
        </div>
      </div>
    </form>
  );
};

export default FormLoan;

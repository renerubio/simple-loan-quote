import React, { useEffect } from 'react';
import { calculateTotal, texts } from './../utils';

const FormLoan = ({ amountLoan, updateAmountLoan, term, updateTerm, updateTotal, updateLoading }) => {

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
          <label htmlFor="amountLoanLoan">{texts.form.labelQuantity}</label>
          <input
            className="u-full-width"
            type="number"
            placeholder={texts.form.placeholder}
            onChange={e => handleOnChangeAmount(e)}
            id="amountLoanLoan" />
        </div>
        <div>
          <label>{texts.form.labelTerm}</label>
          <select
            className="u-full-width"
            onChange={e => handleOnChangeTerm(e)}>
            <option value="0">{texts.form.select}</option>
            <option value="3">{texts.form._3_months}</option>
            <option value="6">{texts.form._6_months}</option>
            <option value="12">{texts.form._12_months}</option>
            <option value="24">{texts.form._24_months}</option>
          </select>
        </div>
      </div>
    </form>
  );
};

export default FormLoan;

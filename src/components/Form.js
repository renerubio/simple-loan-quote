import React, { useEffect } from 'react';
import { calculateTotal } from '../helper';
import constants from '../texts';

const FormLoan = ({ amountLoan, setAmountLoan, term, setTerm, setTotal, setLoading }) => {

  useEffect(() => {
    setTotal(calculateTotal(amountLoan, term));
    if (amountLoan > 0 && term >= 3) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  }, [amountLoan, setLoading, setTotal, term]);

  const handleOnChangeAmount = (e) => {
    setAmountLoan(Number(e.target.value));
  }
  const handleOnChangeTerm = (e) => {
    setTerm(Number(e.target.value));
  }
  return (
    <>
      <form>
        <div className="row">
          <div>
            <label htmlFor="amountLoanLoan">{constants.form.labelQuantity}</label>
            <input
              className="u-full-width"
              type="number"
              placeholder={constants.form.placeholder}
              onChange={e => handleOnChangeAmount(e)}
              id="amountLoanLoan" />
          </div>
          <div>
            <label>{constants.form.labelTerm}</label>
            <select
              className="u-full-width"
              onChange={e => handleOnChangeTerm(e)}>
              <option value="0">{constants.form.select}</option>
              <option value="3">{constants.form._3_months}</option>
              <option value="6">{constants.form._6_months}</option>
              <option value="12">{constants.form._12_months}</option>
              <option value="24">{constants.form._24_months}</option>
            </select>
          </div>
        </div>
      </form>
    </>
  );
};

export default FormLoan;

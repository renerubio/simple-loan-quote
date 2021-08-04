import React, { useEffect } from 'react';
import { calculateTotal } from '../helper';
import constants from '../texts';

const FormLoan = ({ amount, setQuantity, term, setTerm, setTotal, setLoading }) => {

  const total = calculateTotal(amount, term);
  setTotal(Number(total));

  useEffect(() => {
    if (amount > 0 && term >= 3) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  }, [amount, setLoading, term]);

  const handleOnChangeAmount = (e) => {
    setQuantity(Number(e.target.value));
  }
  const handleOnChangeTerm = (e) => {
    setTerm(Number(e.target.value));
  }
  return (
    <>
      <form>
        <div className="row">
          <div>
            <label htmlFor="amountLoan">{constants.form.labelQuantity}</label>
            <input
              className="u-full-width"
              type="number"
              placeholder={constants.form.placeholder}
              onChange={e => handleOnChangeAmount(e)}
              id="amountLoan" />
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

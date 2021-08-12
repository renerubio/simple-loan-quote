import React, { useState, useEffect } from 'react';
import { Header, FormLoan, Message, Result, Spinner } from './components';
import { texts } from './utils';

function App() {
  const { header } = texts;
  const [amountLoan, setAmountLoan] = useState(0);
  const [term, setTerm] = useState(0);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(0);
  const [componentChoice, setComponentChoice] = useState();

  useEffect(() => {
    ((amountLoan > 0 && loading) && setComponentChoice(<Spinner />));
    ((total === 0 || term === 0) && setComponentChoice(<Message />));
    ((amountLoan > 0 && term > 0 && !loading) && setComponentChoice(<Result totalValue={total} term={term} amountLoanValue={amountLoan} />));

  }, [amountLoan, loading, term, total]);

  return (
    <>
      <Header title={header.title} description={header.description} />
      <div className="container my-container">
        <FormLoan
          amountLoan={amountLoan}
          updateAmountLoan={setAmountLoan}
          term={term}
          updateTerm={setTerm}
          total={total}
          updateTotal={setTotal}
          updateLoading={setLoading}
        />
        <div className="messages">{componentChoice}</div>
      </div>
    </>
  );
}

export default App;

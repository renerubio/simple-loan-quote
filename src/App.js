import React, { useState, useEffect } from 'react';
import { Header, FormLoan, Message, Result, Spinner } from './components';
import { constants } from './utils';

function App() {
  const [amountLoan, setAmountLoan] = useState(0);
  const [term, setTerm] = useState(0);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(0);
  const [componentChoice, setComponentChoice] = useState();

  useEffect(() => {
    if (amountLoan > 0 && loading) {
      setComponentChoice(<Spinner />);
    } else if (total === 0 || term === 0) {
      setComponentChoice(<Message />);
    } else {
      setComponentChoice(<Result total={total} term={term} amountLoan={amountLoan} />);
    }
  }, [amountLoan, loading, term, total]);

  return (
    <>
      <Header
        titulo={constants.header.title}
        descripcion={constants.header.descripcion}
      />
      <div className="container my-container">
        <FormLoan
          amountLoan={amountLoan}
          setAmountLoan={setAmountLoan}
          term={term}
          setTerm={setTerm}
          total={total}
          setTotal={setTotal}
          setLoading={setLoading}
        />
        <div className="mensajes">{componentChoice}</div>
      </div>
    </>
  );
}

export default App;

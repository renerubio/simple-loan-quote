import React, { useState } from 'react';
import Header from './components/Header.js';
import FormLoan from './components/Form.js';
import Mensaje from './components/Messages.js';
import Result from './components/Result.js';
import Spinner from './components/Spinner.js';
import constants from './texts';

function App() {
  const [amount, setQuantity] = useState(0);
  const [term, setTerm] = useState(0);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(0);

  let componentChoice = null;
  if (amount > 0 && loading) {
    componentChoice = <Spinner />;
  } else if (total === 0 || term === 0) {
    componentChoice = <Mensaje />;
  } else {
    componentChoice = <Result total={total} term={term} amount={amount} />;
  }

  return (
    <>
      <Header
        titulo={constants.header.title}
        descripcion={constants.header.descripcion}
      />
      <div className="container my-container">
        <FormLoan
          amount={amount}
          setQuantity={setQuantity}
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

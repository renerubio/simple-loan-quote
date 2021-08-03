import React, { useState } from 'react';
import Header from './components/Header.js';
import Formulario from './components/Form.js';
import Mensaje from './components/Messages.js';
import Resultado from './components/Result.js';
import Spinner from './components/Spinner.js';
import constants from './texts';

function App() {
  // Definir el state
  const [cantidad, guardarCantidad] = useState(0);
  const [plazo, guardarPlazo] = useState('');
  const [total, guardarTotal] = useState(0);
  const [cargando, guardarCargando] = useState(false);

  let componente;
  if (cargando && cantidad > 0) {
    componente = <Spinner />;
  } else if (cantidad === 0) {
    componente = <Mensaje />;
  } else {
    componente = <Resultado total={total} plazo={plazo} cantidad={cantidad} />;
  }

  return (
    <>
      <Header
        titulo={constants.header.title}
        descripcion={constants.header.descripcion}
      />
      <div className="container my-container">
        <Formulario
          cantidad={cantidad}
          guardarCantidad={guardarCantidad}
          plazo={plazo}
          guardarPlazo={guardarPlazo}
          total={total}
          guardarTotal={guardarTotal}
          guardarCargando={guardarCargando}
        />
        <div className="mensajes">{componente}</div>
      </div>
    </>
  );
}

export default App;

import React from 'react';

const Header = ({ titulo, descripcion }) => (
  <>
    <h1>{titulo}</h1>
    <p className="color-white">{descripcion}</p>
  </>
);

export default Header;

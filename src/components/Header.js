import React from 'react';

const Header = ({ title, descripcion }) => (
  <>
    <h1>{title}</h1>
    <p className="color-white">{descripcion}</p>
  </>
);

export default Header;

import React from 'react';

const Header = ({ title, description }) => (
  <>
    <h1>{title}</h1>
    <p className="color-white">{description}</p>
  </>
);

export default Header;

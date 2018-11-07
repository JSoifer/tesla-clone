import React from 'react';
import Logo from './Logo';
import ProductLinks from './ProductLinks';
import NavLinks from './NavLinks';
import Hamburger from './Hamburger';

function Header() {

  return(
    <div>
      <Logo/>
      <ProductLinks/>
      <NavLinks/>
      <Hamburger/>
    </div>
  );
}

export default Header;

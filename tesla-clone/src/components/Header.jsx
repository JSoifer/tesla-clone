import React from 'react';
import Logo from './Logo';
import ProductLinks from './ProductLinks';
import HeaderRight from './HeaderRight';


function Header() {

  return(
    <div className='headerStyle'>
      <style jsx>{`
          .headerStyle {
            display: flex;
            align-items: center;
            width: 100%;
            background-color: #83807b;
            justify-content: space-between;
            padding-top: 10px;

          }
            `}</style>
      <Logo/>
      <ProductLinks/>
      <HeaderRight/>
    </div>
  );
}

export default Header;

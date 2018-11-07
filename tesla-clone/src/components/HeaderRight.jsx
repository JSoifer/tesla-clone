import React from 'react';
import NavLinks from './NavLinks';
import Hamburger from './Hamburger';

function HeaderRight() {

  return(
    <div className='headerRightStyle'>
      <style jsx>{`
          .headerRightStyle {
            display: flex;
            align-items: center;
            margin-right: 20px;
          }
            `}</style>
      <NavLinks/>
      <Hamburger/>
    </div>
  );
}

export default HeaderRight;

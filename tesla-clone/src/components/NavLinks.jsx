import React from 'react';

function NavLinks() {
  return(
    <div className='navLinksContainerStyle'>
      <style jsx>{`
        .navLinksContainerStyle {

        }
        .navLinksListStyle {
            display: flex;
            list-style: none;
            padding: 10px;

        }
        .navLinksItemStyle {
          margin-right: 25px;
          color: white;
          font-size: .80em;
          letter-spacing: 1px;
        }
            `}</style>
      <ul className='navLinksListStyle'>
        <li className='navLinksItemStyle'>GET NEWSLETTER</li>
        <li className='navLinksItemStyle'>SHOP</li>
        <li className='navLinksItemStyle'>SIGN IN</li>
      </ul>
    </div>
  );
}

export default NavLinks;

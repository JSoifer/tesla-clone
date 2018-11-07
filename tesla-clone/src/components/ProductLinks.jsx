import React from 'react';

function ProductLinks() {
  return(
    <div className='productLinksContainerStyle'>
      <style jsx>{`
          .productLinksContainerStyle {
            transform: translateX(115px);
          }
          .productLinksListStyle {
              display: flex;
              list-style: none;
              padding: 10px;

          }
          .productLinksItemStyle {
            margin-right: 20px;
            color: white;
            font-size: .80em;
            letter-spacing: 1px;
          }
            `}</style>
      <ul className='productLinksListStyle'>
        <li className='productLinksItemStyle'>MODEL S</li>
        <li className='productLinksItemStyle'>MODEL X</li>
        <li className='productLinksItemStyle'>MODEL 3</li>
        <li className='productLinksItemStyle'>ROADSTER</li>
        <li className='productLinksItemStyle'>ENERGY</li>
      </ul>
    </div>
  );
}

export default ProductLinks;

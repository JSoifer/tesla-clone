import React from 'react';

function Hamburger() {
  return(
    <div>
      <style jsx>{`
          .fas {
            color: white;
            font-size: 1.1em;
            transform:scale(1.3,1);
          }
            `}</style>
      <i className="fas fa-bars"></i>
    </div>
  );
}

export default Hamburger;

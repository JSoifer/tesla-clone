import React from 'react';

function ModelS(){
  return (
    <div className='modelSStyle'>
      <h1>This is another page</h1>
      <style jsx>{`
          .modelSStyle {
            background-image: url('https://stmed.net/sites/default/files/tesla-model-s-wallpapers-32598-8177956.jpg');
            height: 1150px;
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
          }

            `}</style>
    </div>
  );
}

export default ModelS;

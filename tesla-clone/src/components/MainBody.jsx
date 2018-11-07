import React from 'react';
import SplashBanner from './SplashBanner';

function MainBody() {
  return(
    <div className='mainBodyContainer'>
      <style jsx>{`
          .mainBodyContainer {
            background-image: url("https://www.tesla.com/sites/default/files/images/homepage/20180710/ms/homepage-models.jpg?20181028");
            height: 1150px;
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
          }



      `}</style>
    <SplashBanner/>
    </div>
  );
}

export default MainBody;

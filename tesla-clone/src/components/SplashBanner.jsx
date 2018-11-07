import React from 'react';
import SplashBannerLinks from './SplashBannerLinks';

function SplashBanner() {
  return(
    <div className='splashBannerStyle'>
      <style jsx>{`
          .splashTitle {
            font-weight: 600;
            color: black;
            letter-spacing: 2px;
            transform:scale(1,1.1);
            text-align: center;
          }
          .splashBannerStyle {
            display: flex;
            flex-direction: column;
            transform: translateY(270px)

          }
          `}</style>
      <h1 className='splashTitle'>Model S</h1>
      <SplashBannerLinks/>
    </div>
  );
}

export default SplashBanner;

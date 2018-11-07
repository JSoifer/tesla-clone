import React from 'react';

function SplashBannerLinks() {
  return(
    <div className='splashBannerLinksContainer'>
      <style jsx>{`
          .splashBannerLinksContainer {
            width: 100%;
            margin-top: 40px;

          }
          .splashLinksListStyle {
            display: flex;
            list-style: none;
            justify-content: center;

          }
          .splashLinksStyle {
            margin-right: 20px;
            border: 3px solid black;
            padding: 10px 30px 10px 30px;
            border-radius: 12% / 45%;
            font-size: .8em;
            width: 150px;
            text-align: center;
            font-weight: 500;
          }
          .splashLinksStyle:hover {
            background-color: black;
            color: white;
            cursor: pointer;
          }
          #orderNow {
            background-color: black;
            color: white;
          }

          `}</style>
      <ul className='splashLinksListStyle'>
        <li id='orderNow' className='splashLinksStyle'>ORDER NOW</li>
        <li className='splashLinksStyle'>LEARN MORE</li>
        <li className='splashLinksStyle'>TEST DRIVE</li>
        <li className='splashLinksStyle'>SHOP INVENTORY</li>
      </ul>
    </div>
  );
}

export default SplashBannerLinks;

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomeView from './HomeView';
import ModelS from './ModelS';

function App(){
  return (
    <div className='appStyle'>
      <style jsx>{`

            `}</style>
      <Switch>
        <Route exact path='/' component={HomeView} />
        <Route exact path='/models' component={ModelS} />
      </Switch>
    </div>
  );
}

export default App;
document.body.style;

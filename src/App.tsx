import React from 'react';
import HelloWorld from './Components/Atoms/HelloWorld';
import Phone from './Components/Atoms/Phone';
import TargetBadge from './Components/Atoms/TargetBadge';
import Styles from './Styles'
import Logo from './Components/Atoms/Logo'

export enum Type{
  PLANE = "airplanemode_active",
  HOTEL = "local_hotel",
  FOOD = "restaurant",
  ART = "theater_comedy"
}

function App() {
  return (
    <div>
        <Styles/>
        <Phone>
          <Logo/>
          <TargetBadge 
            percent={10}
            type={Type.PLANE}
          />
          <TargetBadge 
            percent={20}
            type={Type.FOOD}
          />
          <TargetBadge 
            percent={50}
            type={Type.HOTEL}
          />
          <TargetBadge 
            percent={100}
            type={Type.ART}
          />
        </Phone>
    </div>
  );
}

export default App;

import React from 'react';
import Phone from './Components/Atoms/Phone'
import Styles from './Styles'
import Routes from './Routes'
import TopBar from './Components/Atoms/TopBar';

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
          <TopBar/>
          <Routes />
        </Phone>
    </div>
  );
}

export default App;

import React from 'react'
import { BrowserRouter as Routes, Switch, Route } from 'react-router-dom'

import Home from '../Components/Pages/Home'
import Login from '../Components/Pages/Login'
import Onboarding from '../Components/Pages/Onboarding'
import SplashScreen from '../Components/Pages/SplashScreen'
import TravelDetail from '../Components/Pages/TravelDetail'

const Router = () => (
    <Routes>
      <Switch>
        <Route path="/" component={SplashScreen} exact />
        <Route path="/login" component={Login} exact />
        <Route path="/onboarding" component={Onboarding} exact />
        <Route path="/home" component={Home} exact />
        <Route path="/detail" component={TravelDetail} exact />
      </Switch>
    </Routes>
  );
  
  export default Router;
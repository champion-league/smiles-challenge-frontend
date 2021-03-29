import React from 'react'
import { BrowserRouter as Routes, Switch, Route } from 'react-router-dom'

import Home from '../Components/Pages/Home'
import Login from '../Components/Pages/Login'
import Onboarding from '../Components/Pages/Onboarding'
import SplashScreen from '../Components/Pages/SplashScreen'
import TravelDetail from '../Components/Pages/TravelDetail'
import TravelNew from '../Components/Pages/TravelNew'
import Page404 from '../Components/Pages/Page404'

const Router = () => (
    <Routes>
      <Switch>
        <Route path="/" component={Login} exact />
        <Route path="/login" component={Login} exact />
        <Route path="/onboarding" component={Onboarding} exact />
        <Route path="/home" component={Home} exact />
        <Route path="/detail" component={TravelDetail} exact />
        <Route path="/new" component={TravelNew} exact />
        <Route path="/404" component={Page404} exact />
      </Switch>
    </Routes>
  );
  
  export default Router;
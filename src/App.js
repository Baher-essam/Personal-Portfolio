import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index';

import HeaderComponent from './Components/Header';
import FooterComponent from './Components/Footer';
import CursorComponent from "./Components/Cursor";

import Home from './pages/home/home';
import About from './pages/about/about';
// import Projects from './pages/projects/projects';
// import Service from './pages/services/services';
import ThankYou from './pages/thankyou';
import PageNotFound from './pages/pagenotfound';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <CursorComponent/>
        <HeaderComponent/>
        <Switch>
              <Route path="/" exact component={Home}/>
              <Route path="/about" component={About}/>
              {/* <Route path="/projects" component={Projects}/> */}
              {/* <Route path="/service" component={Service}/> */}
              <Route path="/thankyou" component={ThankYou}/>
              <Route path="*" component={PageNotFound}/>
            </Switch>
        <FooterComponent/>
      </div>
    </BrowserRouter>
  );
}

export default App;
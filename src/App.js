import React from 'react';
import {BrowserRouter , Route, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index';

import HeaderComponent from './Components/Header';
import FooterComponent from './Components/Footer';

import Home from './pages/home/home';

// import About from './pages/about/about';
import Projects from './pages/projects/projects';
// import Service from './pages/services/services';
import pageNotFound from './pages/404.js';
import thankYou from './pages/thankyou.js';

function App() {
  return (
      <BrowserRouter>
         <div className="App">
            <HeaderComponent/>
            <Switch>
              <Route path="/" exact component={Home}/>
              {/* <Route path="/about" component={About}/> */}
              {/* <Route path="/projects" component={Projects}/> */}
              {/* <Route path="/service" component={Service}/> */}
              <Route path="/thankyou" component={thankYou}/>
              <Route path="*" component={pageNotFound}/>
            </Switch>
            <FooterComponent/>
          </div>
      </BrowserRouter>
  );
}

export default App;

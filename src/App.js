import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/projects" element={<Projects />} /> */}
          {/* <Route path="/service" element={<Service />} /> */}
          <Route path="/thankyou" element={<ThankYou />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <FooterComponent/>
      </div>
    </BrowserRouter>
  );
}

export default App;
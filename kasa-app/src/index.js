import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
// import About from './routes/About';
// import Catalogue from './routes/Carrousel';
import Error from './routes/Error404';

import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.sass';

import Header from './components/Header';
import Footer from './components/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>

    <BrowserRouter>
      <Header />
      <Routes >
        <Route path='/' element={<Home />} />
        {/* <Route path='/about' element={<About />} />
        <Route path='/Catalogue' element={<Carrousel />} /> */}
        <Route path='/*' element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    

  </div>

)


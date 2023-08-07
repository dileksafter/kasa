import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './routes/Home';
import About from './routes/About';
import Logement from './routes/Logement';
import Error from './routes/Error404';
import Header from './components/Header';
import Footer from './components/Footer';
import './styles/index.sass';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(


    <BrowserRouter>
      <Header />
      <div className='main'>
        <Routes >
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path="/logement/:id" element={<Logement />} />
          <Route path='/*' element={<Error />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>

)


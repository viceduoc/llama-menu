import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import Home from './Home';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:idSucursal/:mesaUUID" element={<Home />} /> {/* Add this line */}
      <Route path="/app" element={<App />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
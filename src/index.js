import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';
import Notfound from './pages/Notfound';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="*" element={<Notfound />} />
      <Route path="/" element={<App />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);


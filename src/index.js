import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';
import Notfound from './pages/Notfound';
import Anime from './pages/Anime';
import Discord from './pages/Discord';
import Linktree from './pages/Linktree';
ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="*" element={<Notfound />} />
      <Route path="/" element={<App />} />
      <Route path="/Linktree" element={<Linktree />} /> 
      <Route path="/Anime" element={<Anime />} />
      <Route path="/Discord" element={<Discord />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);


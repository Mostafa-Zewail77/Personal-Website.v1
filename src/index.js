import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

import App from './App';
import { Archive } from './components';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/archive" element={<Archive />} />
      </Routes>
      
    </BrowserRouter>
  </React.StrictMode>
);

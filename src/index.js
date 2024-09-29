import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App';
import './index.css';
import { BrowserRouter} from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { SpeedInsights } from "@vercel/speed-insights/react"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <HelmetProvider>
        <SpeedInsights />
        <App/>
      </HelmetProvider>
      
    </BrowserRouter>
  </React.StrictMode>
);

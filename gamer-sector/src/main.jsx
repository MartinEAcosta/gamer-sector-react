import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import { GamerShopApp } from './GamerShopApp';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>    
      <GamerShopApp />      
    </BrowserRouter>
  </React.StrictMode>,
)

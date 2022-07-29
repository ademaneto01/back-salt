import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { MainRoutes } from './routes';
import { BrowserRouter } from 'react-router-dom';

const roots = ReactDOM.createRoot(document.getElementById('root'))
roots.render(
  <React.StrictMode>
    <BrowserRouter>
      <MainRoutes />
    </BrowserRouter>
  </React.StrictMode>
);

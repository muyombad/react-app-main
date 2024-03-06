import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Me from './Mer';
import Nave_ber from './components /nave_ber';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <Nave_ber/>
    <App />
    <Me/>
  </React.StrictMode>
);


reportWebVitals();

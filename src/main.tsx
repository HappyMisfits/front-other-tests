import React from 'react';
import ReactDOM from 'react-dom/client';
import { OrderForm } from './OrderForm';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <OrderForm />
  </React.StrictMode>,
);
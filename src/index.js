import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App/App';
import './index.scss';
import { BrowserRouter } from 'react-router-dom';
import { ProductsProvider } from 'context/ProductsContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProductsProvider>
      <BrowserRouter basename="/osf-store">
        <App />
      </BrowserRouter>
    </ProductsProvider>
  </React.StrictMode>
);

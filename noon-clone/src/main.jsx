import './index.css';

import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { ProductProvider } from './Context/ProductContext'; 

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ProductProvider>      
        <App />
      </ProductProvider>
    </BrowserRouter>
  </StrictMode>
);

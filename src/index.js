
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { CatalogueProvider } from './providers/catalogue';
import { CartProvider } from './providers/cart';
import { ThemeProvider } from '@mui/material/styles';
import theme from './style/theme';
import { AuthProvider } from './providers/auth';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <AuthProvider>
        <CatalogueProvider>
          <CartProvider>
            <ThemeProvider theme={ theme }>
              <App />
            </ThemeProvider>             
          </CartProvider>
        </CatalogueProvider>
      </AuthProvider>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
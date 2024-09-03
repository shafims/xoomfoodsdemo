import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'

import {ApiProvider} from './contexts/FetchingApi.jsx'
import { CartProvider } from './contexts/CartContext.jsx';
import { FormProvider } from './contexts/FormContext.jsx';

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <FormProvider>
      <CartProvider>
        <ApiProvider>
          <App />
        </ApiProvider>
      </CartProvider>
    </FormProvider>
  // </StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider } from "@material-tailwind/react";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import AuthProvider from './context/AuthContext.jsx';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <ThemeProvider>
       <BrowserRouter>
       <AuthProvider>
       <App />
       </AuthProvider>
       </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
)

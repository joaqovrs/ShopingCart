import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.js'
import './index.css'





ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)



// * se utiliza el signo de exclamación para decirle al codigo que el elemento root no va a ser nulo y que si existe
// * El signo de exclamacion (!) significa assertion not null, non null assertation operator  
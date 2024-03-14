import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './normalize.css'
import { BrowserRouter } from 'react-router-dom'
import GlobalStyles from './globalStyles.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/Psychologists.Services">
    <GlobalStyles/>
    <App />
    </BrowserRouter>
  </React.StrictMode>,
)

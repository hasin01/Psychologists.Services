import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './normalize.css'

import { BrowserRouter } from 'react-router-dom'
import GlobalStyles from './globalStyles.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
    <GlobalStyles/>
    <App />
    </BrowserRouter>
  </React.StrictMode>,
)

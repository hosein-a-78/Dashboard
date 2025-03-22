import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import FinanceContext from './context/FinanceContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <FinanceContext>
    <App />
  </FinanceContext>
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import {CreateUserContext} from './Context/EmailContext'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CreateUserContext>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </CreateUserContext>
  </React.StrictMode>
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import {CreateUserContext} from './Context/EmailContext'
import {  HandleContext } from './Context/GoogleAuth'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HandleContext>
    <CreateUserContext>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </CreateUserContext>
    </HandleContext>
  </React.StrictMode>
)

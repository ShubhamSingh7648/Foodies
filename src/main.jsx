import { StrictMode } from 'react'
import UserContext from './context/UserContext.jsx'
import { createRoot } from 'react-dom/client'
import './index.css'
import React from 'react'
import store from "./redux/store";
import App from './App.jsx'
import { Provider } from "react-redux"


createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <UserContext>
    <App />
  </UserContext>
  </Provider>
)
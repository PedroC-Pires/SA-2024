import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter, RouterProvider
} from 'react-router-dom'

import Login from './routes/Login.jsx'
import Register from './routes/Register.jsx'
import Home from './routes/Home.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "login",
    element: <Login />
  },
  {
    path: "register",
    element: <Register />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

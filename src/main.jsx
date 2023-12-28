import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Login from './pages/Login.jsx'
import Home from './pages/Home.jsx'
import './style.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Cartoes_details from './pages/details/Cartoes-details.jsx'
import Saldo_details from './pages/details/Saldo-details.jsx'
import Crediarios_details from './pages/details/Crediarios-details.jsx'
import Cartoes from './pages/Cartoes.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element:<App />,
  },
  {
    path:"/Login",
    element:<Login />,
  },
  {
    path:"/Home",
    element:<Home />,
  },
  {
    path:"/Cartoes-details",
    element:<Cartoes_details />,
  },
  {
    path:"/Saldo-details",
    element:<Saldo_details/>,
  },
  {
    path:"/Crediarios-details",
    element:<Crediarios_details/>,
  },
  {
    path:"/Cartoes",
    element:<Cartoes/>,
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router}/>
  </React.StrictMode>
);
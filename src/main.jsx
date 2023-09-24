import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Products from './Pages/Products/Products.jsx'
import Dashbord from './Pages/Dashbord/Dashbord.jsx'
import Home from './Pages/Home/Home.jsx'
import Error from './Pages/Error/Error.jsx'
import Profile from './Pages/Profile/Profile.jsx'
import Cart from './Pages/Cart/Cart.jsx'
import EditProfile from './Pages/EditProfile/EditProfile.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/products',
        element: <Products></Products>
      },{
        path: '/dashbord',
        element: <Dashbord></Dashbord>,
        children: [
          {
            path: '/dashbord',
            element: <Profile></Profile>
          },
          {
            path: '/dashbord/cart',
            element: <Cart></Cart>
          },
          {
            path: '/dashbord/editProfile',
            element: <EditProfile></EditProfile>
          }
        ]
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)

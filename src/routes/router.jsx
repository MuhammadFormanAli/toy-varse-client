import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../layouts/Main';
import Login from '../pages/Login';
import Register from '../pages/Register';
import AllToys from '../pages/AllToys';
import MyToys from '../pages/MyToys';
import AddToy from '../pages/AddToy';
import Home from '../pages/home/Home';

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
          path:"/",
          element:<Home></Home>
        },
        {
          path:"/login",
          element:<Login></Login>
        },
        {
          path:"/register",
          element:<Register></Register>
        },
        {
          path:"/alltoys",
          element:<AllToys></AllToys>
        },
        {
          path:"/mytoys",
          element:<MyToys></MyToys>
        },
        {
          path:"/addtoy",
          element:<AddToy></AddToy>
        }
      ]
    },
  ]);

export default router;
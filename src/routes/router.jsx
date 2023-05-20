import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../layouts/Main';
import Login from '../pages/login/Login';
import Register from '../pages/register/Register';
import MyToys from '../pages/myToys/MyToys';
import AddToy from '../pages/addToys/AddToy';
import Home from '../pages/home/Home';
import AllToys from '../pages/allToys/AllToys';
import PrivetRoute from './PrivetRoute';
import ToyDetails from '../pages/allToys/ToyDetails';
import UpdateToy from '../pages/myToys/UpdateToy';

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<div>Error page comming soon</div>,
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
          path:"alltoys/toy/:id",
          element:<PrivetRoute><ToyDetails></ToyDetails></PrivetRoute>,
          loader:({params})=>fetch(`https://toy-marketplace-server-side-kohl.vercel.app/toys/${params.id}`)
          
        },
        {
          path:"mytoys/update/:id",
          element:<PrivetRoute><UpdateToy></UpdateToy></PrivetRoute>,
          loader:({params})=>fetch(`https://toy-marketplace-server-side-kohl.vercel.app/toys/${params.id}`)
        },
        {
          path:"/mytoys",
          element:<PrivetRoute><MyToys></MyToys></PrivetRoute>
        },
        {
          path:"/addtoy",
          element:<PrivetRoute><AddToy></AddToy></PrivetRoute>
        },
      ]
    },
    
  ]);

export default router;
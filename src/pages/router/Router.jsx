import React from 'react'
import {
  createBrowserRouter,
} from "react-router-dom";

import Home from '../home/Home';
import AddCraftItems from '../addCraftItems/AddCraftItems';
import AllCraftItems from '../allCraftItems/AllCraftItems';
import MyCraftList from '../myCraftList/MyCraftList';
import Root from '../../layout/Root';
import Login from '../login/Login';
import Register from '../register/Register';
import PrivateRoute from './privateRoute';
import ViewDetails from '../viewDetails/ViewDetails';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('http://localhost:5000/crafts')
      },
      {
        path: "/craftItems/:id",
        element: <PrivateRoute>
          <ViewDetails></ViewDetails>
        </PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/crafts/${params.id}`)
      },
      {
        path: '/addCraftitems',
        element: <PrivateRoute>
          <AddCraftItems></AddCraftItems>
        </PrivateRoute>
      },
      {
        path: '/allCraftitems',
        element: <AllCraftItems></AllCraftItems>,
        loader: () => fetch('http://localhost:5000/crafts')
      },
      {
        path: '/myCraftList',
        element: <PrivateRoute>
          <MyCraftList></MyCraftList>
        </PrivateRoute>,
       
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      }

    ]
  },
]);

export default router;
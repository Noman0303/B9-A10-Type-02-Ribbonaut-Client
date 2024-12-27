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
import UpdatePage from '../updatePage/UpdatePage';
import Error from '../errorPage/Error';
import SubCategoryItems from '../subCategoryItems/SubCategoryItems';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement:<Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('https://ribbonaut-server.vercel.app/crafts')
      },
      {
        path: "/craftItems/:id",
        element: (<PrivateRoute>
          <ViewDetails></ViewDetails>
        </PrivateRoute>),
        loader: ({ params }) => fetch(`https://ribbonaut-server.vercel.app/crafts/${params.id}`)
      },
      {
        path: '/addCraftitems',
        element: (<PrivateRoute>
          <AddCraftItems></AddCraftItems>
        </PrivateRoute>)
      },
      {
        path: '/allCraftitems',
        element: <AllCraftItems></AllCraftItems>,
        loader: () => fetch('https://ribbonaut-server.vercel.app/crafts')
      },
      {
        path: '/myCraftList',
        element: <PrivateRoute>
          <MyCraftList></MyCraftList>
        </PrivateRoute>,
      },
      {
        path: "/subCategoryItems/:subCategoryName",
        element: <SubCategoryItems></SubCategoryItems>
      },
      {
        path: '/updatePage/:id',
        element: (<PrivateRoute>
          <UpdatePage></UpdatePage>
        </PrivateRoute>),
        loader: ({ params }) => fetch(`https://ribbonaut-server.vercel.app/crafts/${params.id}`)
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
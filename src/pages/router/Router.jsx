import React from 'react'
import {
    createBrowserRouter,
  } from "react-router-dom";

import Home from '../home/Home';
import AddCraftItems from '../addCraftItems/AddCraftItems';
import AllCraftItems from '../allCraftItems/AllCraftItems';
import MyCraftList from '../myCraftList/MyCraftList';
import Root from '../../layout/Root';



  const router = createBrowserRouter([
    {
      path: "/",
      element:<Root></Root>,
      children:[
        {
          path:"/",
          element:<Home></Home>
        },
        {
          path:"/addCraftitems",
          element:<AddCraftItems></AddCraftItems>
        },
        {
          path:"/allCraftitems",
          element:<AllCraftItems></AllCraftItems>
        },
        {
          path:"/myCraftList",
          element:<MyCraftList></MyCraftList>
        },

      ]
    },
  ]);

export default router
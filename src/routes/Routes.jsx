import React from "react";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Error from "../pages/Error";
import Home from "../pages/Home";
import ProductDetails from "../pages/ProductDetails";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Dashboard from "../pages/Dashboard";
import Cart from "../pages/Cart";
const Routes = createBrowserRouter([
  {
      path:"/",
      element:<App/>,
      children:[
          {
              path:"",
              element:<Home/>
          },
          {
              path:"/login",
              element:<Login/>
          },
          {
              path:"/signup",
              element:<Signup/>
          },
          {
              path:"/detail",
              element:<ProductDetails/>
          },
          {
              path:"/about",
              element:<About/>
          },
          {
              path:"/contact",
              element:<Contact/>
          },
          {
              path:"/dashboard",
              element:<Dashboard/>
          },
          {
              path:"/cart",
              element:<Cart/>
          },
          {
              path:"/product/:id",
              element:<ProductDetails/>
          },
      ]
  }
])

export default Routes
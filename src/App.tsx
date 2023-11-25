import React from 'react'
import Navbar from './Component/Navbar/Navbar'
import Sidebar from './Component/Sidebar/Sidebar'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
} from "react-router-dom";

import "./Styles/global.scss";
import LeftContent from './Component/Contents/LeftContent';
import Home from './Pages/Home/Home';
import User from './Pages/User/User';

const App = () => {

  const Layout= () =>{
    return ( 
    <>
    <div className='layoutContainer'>
      <Navbar/>
      <div className='menuContainer'>
        <div className="sidebar">
        <Sidebar/>
        </div>
       <div className="contents">
        <Outlet/>
       </div>
      </div>
      </div></>)
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children: [
        {
          path: "/",
          element: <Home/>,
        },
        {
          path: "/user",
          element: <User/>,
        }]}
      
   
  ]);
  return (
    <RouterProvider router={router} />
  )
}

export default App
import React from 'react'
import { Outlet,Navigate } from "react-router-dom";
import Cookies from "js-cookie";

function ProtectedRoutes() {
  const token = Cookies.get('jwt');
  return (
       token !== undefined ? <Outlet/> : <Navigate to='/login' />
  )
}

export default ProtectedRoutes

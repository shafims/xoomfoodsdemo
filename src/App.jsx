import { useState } from 'react'
import './App.css'
import {Routes, BrowserRouter, Route, Navigate} from 'react-router-dom'
import Cookies from 'js-cookie'


import Home from './components/Home'
import Products from './components/Products'
import Cart from './components/Cart'
import Signup from './components/Signup'
import Login from './components/Login'
import ProtectedRoutes from './components/ProtectedRoutes'

function App() {
  const isLoggedIn = Cookies.get('jwt')
  
  return (
    <>
    {/* <h1>Counter: {count}</h1> */}
      <BrowserRouter>
        <Routes>
          {/* unauthorized */}
          {
            !isLoggedIn && (
              <>
                <Route path='/signup' element={<Signup />} />
                <Route path='/login' element={<Login />} />
                <Route path='/' element={<Home />} />
              </>
            )
          }

          {/* ProtectedRoutes */}
          <Route element={<ProtectedRoutes/>}>
            <Route path='/login' element={<Navigate to={'/'} />} /> 
            <Route path='/signup' element={<Navigate to={'/'} />} />
            <Route path='/cart' element={<Cart />} />
          </Route>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />

          {/* {isLoggedIn && <Route path='/protected' element={<ProtectedRoutes />} />} */}
          {/* <Route path='/profile' element={() => {
            return <Profile user={user} />
          }} /> */}

          {/* <Route path='/logout' element={() => {
            Cookies.remove('jwt');
            return <Navigate to='/' />
          }} /> */}

          
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

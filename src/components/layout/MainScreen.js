import React from 'react'
import Home from '../pages/Home'
import Dashboard from '../pages/Dashboard'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Login from '../pages/Login'
import Register from '../pages/Register'
import ForgotPassword from '../pages/ForgotPassword'
import Policy from '../pages/Policy'
import Cart from '../pages/Cart'
import Category from '../pages/Category'
import PageNotFound from '../pages/PageNotFound'
import { Routes, Route } from "react-router-dom"
import PrivateRoute from '../routes/PrivateRoute'

const MainScreen = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/dashboard" element={<PrivateRoute />}>
        <Route exact path="" element={<Dashboard />} />
      </Route>
      <Route exact path="/about" element={<About />} />
      <Route exact path="/contact" element={<Contact />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/register" element={<Register />} />
      <Route exact path="/forgot-password" element={<ForgotPassword />} />
      <Route exact path="/policy" element={<Policy />} />
      <Route exact path="/cart" element={<Cart />} />
      <Route exact path="/category" element={<Category />} />
      <Route exact path="/*" element={<PageNotFound />} />
    </Routes>
  )
}

export default MainScreen

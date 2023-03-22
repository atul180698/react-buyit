import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate, useLocation, Link } from 'react-router-dom'
import toast from 'react-hot-toast';
import { useAuth } from '../context/contextFile';

const Login = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()
  const location = useLocation()
  const [auth, setAuth] = useAuth()

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/login`, { email, password })
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token
        })
        localStorage.setItem('auth', JSON.stringify(res.data))
        navigate(location.state || '/')
      } else {
        toast.error(res.data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error("Something went wrong")
    }
  }

  return (
    <div className='form-container'>
      <h2>Login</h2>
      <form onSubmit={handleSubmit} style={{ marginTop: "25px" }}>
        <div className="mb-3">
          <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value.toLowerCase())} placeholder='Enter your email' />
        </div>
        <div className="mb-3">
          <input type="password" className="form-control" id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter your password' />
        </div>
        <button type="submit" className="btn btn-primary" style={{ width: "100%" }}>Submit</button>
        <div className="forgot-password-link">
          <Link to='/forgot-password'>Forgot Password?</Link>
        </div>
      </form>
    </div>
  )
}

export default Login

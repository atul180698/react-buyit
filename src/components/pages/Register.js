import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast';
import '../.././styles/AuthStyles.css'

const Register = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [phone, setPhone] = useState("")
  const [address, setAddress] = useState("")
  const [answer, setAnswer] = useState("")
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/register`, { name, email, password, phone, address, answer: answer.toLowerCase() })
      if (res.data.success) {
        console.log(res.data.message)
        toast.success(res.data.message)
        navigate('/login')
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
      <h2>Register</h2>
      <form onSubmit={handleSubmit} style={{ marginTop: "5px" }}>
        <div className="mb-3">
          <input type="text" className="form-control" id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter your name' />
        </div>
        <div className="mb-3">
          <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value.toLowerCase())} placeholder='Enter your email' />
        </div>
        <div className="mb-3">
          <input type="password" className="form-control" id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter your password' />
        </div>
        <div className="mb-3">
          <input type="text" className="form-control" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder='Enter your phone no.' />
        </div>
        <div className="mb-3">
          <input type="text" className="form-control" id="address" value={address} onChange={(e) => setAddress(e.target.value)} placeholder='Enter your address' />
        </div>
        <div className="mb-3">
          <input type="text" className="form-control" id="answer" value={answer} onChange={(e) => setAnswer(e.target.value)} placeholder="What's your favorite food" />
        </div>
        <button type="submit" className="btn btn-primary" style={{ width: "100%" }}>Submit</button>
      </form>
    </div>
  )
}

export default Register

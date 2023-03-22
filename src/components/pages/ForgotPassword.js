import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast';

const ForgotPassword = () => {

  const [email, setEmail] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [answer, setAnswer] = useState("")
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/forgot-password`, { email, newPassword, answer: answer.toLowerCase() })
      if (res.data.success) {
        toast.success("Password reset successfully")
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
      <h2>Reset Password</h2>
      <form onSubmit={handleSubmit} style={{ marginTop: "25px" }}>
        <div className="mb-3">
          <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value.toLowerCase())} placeholder='Enter your email' />
        </div>
        <div className="mb-3">
          <input type="password" className="form-control" id="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} placeholder='Enter new password' />
        </div>
        <div className="mb-3">
          <input type="text" className="form-control" id="answer" value={answer} onChange={(e) => setAnswer(e.target.value)} placeholder="What's your favorite food" />
        </div>
        <button type="submit" className="btn btn-primary" style={{ width: "100%" }}>Submit</button>
      </form>
    </div>
  )
}

export default ForgotPassword

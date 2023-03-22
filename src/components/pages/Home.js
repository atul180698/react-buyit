import React from 'react'
import { useAuth } from '../context/contextFile'

const Home = () => {
  const [auth] = useAuth()
  return (
    <div>
      <h2>This is home page</h2>
      <pre>{JSON.stringify(auth, null ,4)}</pre>
    </div>
  )
}

export default Home

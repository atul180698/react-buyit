import React from 'react'
import { Link } from 'react-router-dom'
const PageNotFound = () => {
  return (
    <div className="pnf">
      <h1 className="pnf-title">404</h1>
      <h2 className='pnf-heading'>Page not found</h2>
      <Link className='pnf-btn' to="/">Go To Home</Link>
    </div>
  )
}

export default PageNotFound

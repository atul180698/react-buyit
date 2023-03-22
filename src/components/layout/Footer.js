import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
    return (
        <div className="footer">
            <h3>All Rights Reserved &#169; Atul Singh</h3>
            <p className="text-center mt-1 footer-links">
                <Link to="/about" >About</Link>
                |
                <Link to="/contact" >Contact Us</Link>
                |
                <Link to="/policy" >Privacy Policy</Link>
            </p>
        </div>
    )
}

export default Footer

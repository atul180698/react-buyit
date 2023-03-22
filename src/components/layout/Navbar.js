import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FcShop } from 'react-icons/fc'
import { useAuth } from '../context/contextFile'
import toast from 'react-hot-toast'

const Header = () => {
    const [auth, setAuth] = useAuth()
    const handleLogout = () => {
        setAuth({
            ...auth,
            user: null,
            token: ""
        })
        localStorage.removeItem('auth')
        toast.success("Logout Successfully")
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link className="navbar-brand d-flex align-items-center" to="/"><FcShop />&nbsp;B u y I t</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page" to="/category">Category</NavLink>
                            </li>
                            {!auth.user ? (<>
                                <li className="nav-item">
                                    <NavLink className="nav-link" aria-current="page" to="/register">Register</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" aria-current="page" to="/login">Login</NavLink>
                                </li></>) : (<>
                                    <li className="nav-item dropdown">
                                        <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            {auth?.user?.name}
                                        </Link>
                                        <ul className="dropdown-menu">
                                            <li><NavLink className="dropdown-item " to="/dashboard">Dashboard</NavLink></li>
                                            <li><NavLink className="dropdown-item " onClick={handleLogout} aria-current="page" to="/login">Logout</NavLink></li>
                                        </ul>
                                    </li>
                                </>)}
                            <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page" to="/cart">Cart(0)</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header

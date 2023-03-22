import { useState, useEffect } from "react";
import { useAuth } from "../context/contextFile";
import axios from "axios";
import { Outlet } from "react-router-dom";
import Spinner from "../layout/Spinner";

const PrivateRoute = () => {
    const [ok, setOk] = useState(false)
    const [auth] = useAuth()

    useEffect(() => {
        const authCheck = async () => {
            const res = await axios.get(`${process.env.REACT_APP_API}/api/v1/auth/user-auth`)
            if (res.data.ok) {
                setOk(true)
            } else {
                setOk(false)
            }
        }
        if (auth?.token) {
            authCheck()
        }
    }, [auth?.token])
    return ok ? <Outlet /> : <Spinner />
}

export default PrivateRoute

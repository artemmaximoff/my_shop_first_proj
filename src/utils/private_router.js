import { Outlet, Navigate } from "react-router-dom";

import { useLogin } from '../hooks/useLogin'

export const PrivateRoutes = () => {
    const { token } = useLogin()
    if (!token) return <Navigate to={'/login'} />
    return (
        <Outlet />
    )
}


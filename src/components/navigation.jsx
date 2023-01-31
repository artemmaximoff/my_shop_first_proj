import { Link } from "react-router-dom"
import { useLogin } from "../hooks/useLogin"
import { NavLink } from 'react-router-dom';

export const Navigation = () => {
    const { logoutHandler } = useLogin()
    return (
        <nav className="bg-red-300 h-[50px] flex justify-between items-center px-5">
            <span>
                My first shop
            </span>
            <span> <Link className="mr-5" to="/">Products</Link></span>
            <span> <Link className="mr-5" to="/about">About</Link></span>
            <span>{
                localStorage.getItem('userToken')
                    ? <button onClick={logoutHandler} className="py-1 px-3 border bg-blue-300" >LOG OUT</button>
                    : <NavLink to={'/login'}>Login</NavLink>
            }
            </span>

        </nav>
    )
}
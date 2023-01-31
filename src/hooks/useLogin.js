import axios from 'axios';
import { useState } from "react";
import { useNavigate } from "react-router-dom";



export const useLogin = () => {
    const [token, setToken] = useState(localStorage.getItem('userToken' ?? null))
    const [error, setError] = useState('')
    const navigate = useNavigate();


    const loginHandler = (values) => {
        try {
            setError('')
            let payload = values
            axios.post('https://fakestoreapi.com/auth/login', payload).then(
                response => {
                    localStorage.setItem('userToken', response.data.token)
                    navigate("/products")
                }
            ).catch(err => {
                console.log(err.response.data);
                setError(err.response.data)
            })
        }

        catch {
            setError('username or passord is incorrect')
        }
    }
    const logoutHandler = () => {
        setToken('')
        localStorage.clear()
        console.log(token)
        navigate("/login")

    }



    return { loginHandler, logoutHandler, token, error }
}


import { Formik, Form, Field, ErrorMessage, setFieldValue } from "formik";
import { useLogin } from "../hooks/useLogin";
import React from "react";
import { Navigate } from "react-router-dom"
import { ProductPage } from "../pages/productpage";



const LoginForm = ({ loginHandler, error }) => {

    return (
        <div >
            {error && <span className="text-red-600 py-7">{error}</span>}
            <Formik
                initialValues={{
                    username: "",
                    password: "",
                }}
                onSubmit={(values) => {
                    loginHandler(values);
                }}
            >
                {(error) => (
                    <Form className="flex flex-col" >

                        <Field className="w-[500px] h-[40px] rounded border-2  mb-3 border-red-300 px-2"
                            name={'username'}
                            type={'text'}
                            placeholder={'login'} />


                        <Field className="w-[500px] h-[40px] rounded border-2 border-red-300 mb-3 px-2"
                            name={'password'}
                            type={'password'}
                            placeholder={'password'} />
                        <button className="px-2 py-2 rounded bg-red-300 w-full text-xl" type={'submit'} >Login</button>
                    </Form>
                )}
            </Formik>
        </div >
    )
}


export const Login = () => {
    const { loginHandler, token, error } = useLogin()
    if (token) return <Navigate to={'/products'} />
    return (
        <div className="my-5 flex flex-col items-center ">
            <h1>Enter to manage products:</h1>
            <LoginForm loginHandler={loginHandler} error={error} />

        </div>
    )
}


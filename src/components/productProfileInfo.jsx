import React from "react";
import { Loader } from "./loader";
import axios from 'axios';
import { useProucts } from "../hooks/useProducts";
import { useContext } from 'react';
import { ModalContext } from "../context/modalcontext"
import { ConfirmDelete } from "../components/confirmdelete"
import { Modal } from "./modal";
import { useNavigate } from "react-router-dom";
import React from "react";


export const ProductProfileInfo = ({ setEditMode, profile, error }) => {

    const { modal, open, close } = useContext(ModalContext)
    const { deleteProduct } = useProucts()
    const navigate = useNavigate()
    const deleteHere = async () => {
        await axios.delete(`https://fakestoreapi.com/products/${profile.id}`)
        deleteProduct(profile)
        navigate('/')
    }


    if (Object.keys(profile).length === 0) return <Loader />


    return (
        <div className="container mx-auto max-w-3xl">

            <div className="border px-5 rounded flex flex-col items-center mb-2">
                <img className="w-1/2" src={profile.image}></img>
                <h2 className="fs-20 fw-bold text-lg" >{profile.title}</h2>
                <p className="font-bold" >Price: {profile.price}</p>
                <p>{profile.description}</p>
                <p>Category:{profile.category}</p>
                <p>Rate: {profile.rating?.rate}</p>
                <p>Count: {profile.rating?.count}</p>
                <div>
                    <button onClick={() => setEditMode(true)} className="mx-1 py-2 px-20 rouden bg-red-300 text-2xl">Edit</button>
                    <button onClick={open} className="mx-1 py-2 px-20 rouden bg-blue-300 text-2xl">Delete</button>
                </div>
            </div >
            {error && <p className='text-center text-red-900'>{error}</p>}
            {modal &&
                <Modal title={"Confirm deleting?"} onClose={close}>
                    <ConfirmDelete deleteHere={deleteHere} onClose={close} />
                </Modal>}
        </div>

    )
}
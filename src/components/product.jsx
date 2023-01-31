import { useProucts } from "../hooks/useProducts";
import { useState } from "react"
import { NavLink } from 'react-router-dom';
import axios from "axios";



export const Product = ({ title, price, image, description, product, deleteProduct }) => {

    const [more, setMore] = useState(false)
    const btnClass = more ? `bg-yellow-500` : `bg-blue-400`
    const btnCommon = [`px-2 py-4 border ${btnClass} hover:text-white rounded`]
    const deleteHere = async () => {
        await axios.delete(`https://fakestoreapi.com/products/${product.id}`)
        deleteProduct(product)
        console.log('dddd');

    }

    return (
        <>
            <div className="border rounded flex flex-col items-center mb-2">
                <div className="flex w-full">
                    <button onClick={deleteHere} className="px-1 py-1 border ml-auto font-bold">X</button>
                </div>
                <NavLink className="w-1/6 center" to={'product/' + product.id}>
                    <img src={image}></img>
                </NavLink>
                <h2 className="fs-20 fw-bold text-lg" >{title}</h2>
                <p className="font-bold" >Price:{price}</p>
                <p>Rate:{product.rating?.rate}</p>
                <button
                    onClick={() => setMore(prev => !prev)}
                    className={btnCommon}>{more ? `Hide description` : `Show description`}</button>
                {more && <p className="p-2">{description}</p>}

            </div >
        </>
    )
}
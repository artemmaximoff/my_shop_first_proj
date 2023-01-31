import React from "react";
import { useState } from "react";
import axios, { AxiosError } from 'axios';
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const useProucts = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    const createProduct = (product) => {
        setProducts(prev => [product, ...prev])
        console.log(products);
    }

    const deleteProduct = (product) => {
        setProducts(prev => [...prev.filter(p => p.id !== product.id)])
    }


    const fetchProducts = async () => {
        setLoading(true)
        try {
            const response = await axios.get('https://fakestoreapi.com/products?')
            setProducts(response.data)
        }
        catch {
            setError(`Request failed with status code 404`);
        }
        finally {
            setLoading(false)
        }

    }

    useEffect(() => {
        fetchProducts()
        console.log(products);
    }, [])


    return { products, loading, error, createProduct, deleteProduct, setProducts, fetchProducts }
}
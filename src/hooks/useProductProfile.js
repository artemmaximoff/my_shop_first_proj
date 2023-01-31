import React from "react";
import { useState } from "react";
import axios, { AxiosError } from 'axios';
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router";

export const useProuctProfile = () => {
    const [editMode, setEditMode] = useState(false)
    const [profile, setProfile] = useState({})
    const [error, setError] = useState('')
    const params = useParams();
    const productId = params.productId
    const fetchProfile = async () => {
        try {
            const response = await axios.get(`https://fakestoreapi.com/products/${productId}`)
            setProfile(response.data)
        }
        catch {
            setError(`Request failed with status code 404`);
        }
    }


    const editProfile = async (photoFile) => {
        const formData = new FormData();
        formData.append('image', photoFile);
        await axios.put(`https://fakestoreapi.com/products/${productId}`, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            }
        })

        //const productData = values
        //await axios.put(`https://fakestoreapi.com/products/${productId}`, productData)
        setEditMode(false)
    }

    useEffect(() => {
        fetchProfile()

    }, [])
    useEffect(() => {
        editProfile()

    }, [])


    return { profile, error, editMode, setEditMode, editProfile }
}



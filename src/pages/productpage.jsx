import React from "react";
import { useProucts } from "../hooks/useProducts";
import { ProductList } from "../components/productList";
import { Loader } from "../components/loader";
import { Modal } from "../components/modal";
import { AddProduct } from "../components/addproduct";
import { useContext } from 'react';
import { ModalContext } from "../context/modalcontext"

import { Sort } from "../components/sort";
import { useState } from "react";

export const ProductPage = () => {
    const { modal, open, close } = useContext(ModalContext)
    const { products, loading, error, createProduct, deleteProduct, setProducts } = useProucts()
    const [selectedSort, setSelectedSort] = useState('')
    const sortPost = (sort) => {
        setSelectedSort(sort)
        setProducts([...products].sort((a, b) => a[sort].localeCompare(b[sort])))
    }

    return (
        <div className="container mx-auto max-w-3xl">
            <Sort
                defaultvalue={'сортировка'}
                value={selectedSort}
                onChange={sortPost}
                options={[
                    {
                        value: 'title', name: 'По названию'
                    },
                    {
                        value: 'rating', name: 'По рейтингу'
                    }
                ]}
            />
            {(products.length == 0) && (loading == false)
                ? <h2>Товары не найдены</h2>
                : <ProductList products={products} deleteProduct={deleteProduct} />
            }
            {loading && <Loader />}
            {error && <p className='text-center text-red-900'>{error}</p>}
            {modal &&
                <Modal title={"Add product"} onClose={close}>
                    <AddProduct createProduct={createProduct} onClose={close} />
                </Modal>}


            {modal || <button onClick={open} className='fixed bottom-5 right-5 rounded-full py-2 px-4 border bg-red-300 text-2xl'>Add product</button>}
        </div>

    )
}
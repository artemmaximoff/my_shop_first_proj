import React from "react";
import { Product } from "./product";


export const ProductList = ({ products, deleteProduct }) => {


    return (
        <div>
            {products.map(product => <Product
                key={product.id}
                product={product}
                title={product.title}
                image={product.image}
                category={product.category}
                description={product.description}
                price={product.price}
                deleteProduct={deleteProduct}

            />)}
        </div>
    )
}
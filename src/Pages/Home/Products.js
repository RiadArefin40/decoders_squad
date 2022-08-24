import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Product from './Product';

const Products = () => {
    const[products,setProducts]= useState([])
    useEffect(()=>{
        fetch("product.json")
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    return (
        <div className='grid lg:grid-cols-3 gap-2 lg:mx-20 mx-8 my-20'>
            {products.map(product=> <Product key={product.id} product={product}></Product>)}
        </div>
    );
};

export default Products;
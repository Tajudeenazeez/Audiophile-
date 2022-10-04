import React from 'react'
import { Link } from 'react-router-dom'
import {products} from '../utils/data'


const Products = () => {
            
  return (
    <div>
       {
        products.map((product) => (
            <div key={product.id}>
                <h1 className='bg-slate-500'>{product.category}</h1>
                <h2>{product.productName}</h2>
                <img src={product.image} alt="product" />
            </div>
        ))
       }

    </div>
  )
}

export default Products
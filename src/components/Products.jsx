import React from 'react'
import ProductItems from "./ProductItems"
const Products = ({product}) => {

 console.log(product)
  return (
    <div className=' grid sm:grid-cols-12 md:grid-cols-3 lg:grid-cols-5'>
        
        {
          product.map(item => 
            <ProductItems product={item}  key={item.id} />
          )
        }
      
    </div>
   
)

   
    
  
}

export default Products;
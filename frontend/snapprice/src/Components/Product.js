import React from 'react'

import '../App.css'

function Product(props) {
    const product = props.product
    let altColor = False

    return(
       <>
       {product.variants.map(variant => (
           <div className="product-row" key={product.id}>
               <span>{product.title}</span>
               <span>{variant.title}</span>
               <span>${variant.price}</span>
           </div>
    ))}
       </>
    )
}

export default Product
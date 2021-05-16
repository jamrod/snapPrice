import React, {useState} from 'react'

import '../App.css'

import Product from "./Product"

function Edit(props) {
    const [collection, setCollection] = useState(props.collection.products)
    
    
    return(
        <div>
            {collection ? collection.map(product => (
                <Product product={product}></Product>
            )) : null}
        </div>
    )
}

export default Edit
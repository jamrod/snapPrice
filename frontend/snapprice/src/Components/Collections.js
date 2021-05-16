import React from 'react'

import '../App.css'
import getCollection from "../helpers"

function Collections(props) {
    const collections = props.collections
    // console.log(collections.custom_collections)

    return(
        <ul>
            { collections.custom_collections.map(collection => (
                <li onClick={() => props.selectCollection(collection.id,collection.title)}>{collection.title}</li>
            ))}
            { collections.smart_collections.map(collection => (
                <li>{collection.title}</li>
            ))}
        </ul>
    )
}

export default Collections
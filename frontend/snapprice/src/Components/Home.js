import React, { useEffect, useState } from 'react'

import {getCollections, getCollection} from "../helpers"

import '../App.css'

import Collections from './Collections'
import Edit from './Edit'

function Home (props) {
    const [customer, setCustomer] = useState(props.customer)
    const [collections, setCollections] = useState([{}])
    const [view, setView] = useState("")
    const [activeCollection, setActive] = useState(null)
    const [subtitle, setSubtitle] = useState(null)

    useEffect(() => {
        getCollections()
        .then(res => {
            setCollections(res)
            setView("Collections")
        })
    },[])

    function loadCollection (collectionId,title) { 
        getCollection(collectionId)
        .then(res => 
            setActive(res),
            setSubtitle(title),
            setView("Edit")
        )
    }

    return (
        <div className="home flex-container-column">
            <div className="flex-container-row" id="customer-name">
                <span>{customer}</span>
                <span> : : </span>
                {activeCollection ? <span>{subtitle}</span> : <span></span>}
            </div>
            <div className="view-container">
                {view === "Collections" ? <Collections collections={collections} selectCollection={loadCollection}></Collections> : null}
                {view === "Edit" && activeCollection ? <Edit collection={activeCollection}></Edit> : null}
            </div>        
        </div>
    )
}

export default Home
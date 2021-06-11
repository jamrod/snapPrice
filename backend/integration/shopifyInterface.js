const fetch = require("node-fetch")

exports.getCollections = (baseURL) => {
    let url = `${baseURL}custom_collections.json`
    console.log(url)
    return new Promise ((resolve, reject) => {
        fetch(url)
        .then(res => res.json())
        .then(res => resolve(res))
        .catch(err => reject(err))
    })
}

exports.getCollectionProducts = (baseURL, id) => {
    let url = `${baseURL}collections/${id}/products.json?limit=250`
    //TODO manage pagination for large collections
    return new Promise ((resolve, reject) => {
        fetch(url)
        .then(res => res.json())
        .then(res => resolve(res))
        .catch(err => reject(err))
    })
}

exports.getProduct = (baseURL, id) => {
    let url = `${baseURL}products/${id}.json`
    return new Promise ((resolve, reject) => {
        fetch(url)
        .then(res => res.json())
        .then(res => resolve(res))
        .catch(err => reject(err))
    })
}

exports.updateProduct = (baseURL, id, newData) => {
    const url = `${baseURL}products/${id}.json`
    return new Promise ((resolve, reject) => {
        fetch(url, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newData)
        })
        .then(res => res.json())
        .then(res => resolve(res))
        .catch(err => reject(err))
    })
}

exports.updateVariant = (baseURL, id, newData) => {
    const url = `${baseURL}variants/${id}.json`
    return new Promise ((resolve, reject) => {
        fetch(url, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newData)
        })
        .then(res => res.json())
        .then(res => resolve(res))
        .catch(err => reject(err))
    })
}
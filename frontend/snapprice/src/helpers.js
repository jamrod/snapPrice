export function getCollections() {
    return new Promise((resolve, reject) => {
        console.log("get Collections called")
        fetch(`http://localhost:3001/collections`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
            .then( res => resolve(res))
            .catch(err => console.log(err))
        })
    
}

export function getCollection(id) {
    return new Promise((resolve, reject) => {
        console.log("Get Collection called on ", id)
        fetch(`http://localhost:3001/bulk-herbs`,{
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(res => res.json())
        .then(res => resolve(res))
        .catch(err => console.log(err))
    })
    
}


export function sendUpdates(data) {
    return null
}
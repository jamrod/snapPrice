const express = require('express')
const cors = require('cors')
const herbs = require('./data/full_products')
const collections = require('./data/collections')

const app = express()

app.use(cors())

app.get("/", async (req, res) => {
    console.log("request received: ", req.params)
    res.json("SnapPrice Running!")
})

app.get("/collections", async (req, res) => {
    console.log("request received: ", req.params)
    res.json(collections)
})

app.get("/bulk-herbs", async (req, res) => {
    console.log("request received: ", req.params)
    res.json(herbs)
})

app.listen(3001, () => console.log("SnapPrice running on port 3001"))

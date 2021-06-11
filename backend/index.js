const express = require('express')
const cors = require('cors')
const herbs = require('./data/full_products')
const collections = require('./data/collections')
const externalController = require('./controllers/shopify')

const app = express()

app.use(cors())
// app.use(parser.urlencoded({ extended: true}))
app.use(express.json())

app.use("/external", externalController)

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

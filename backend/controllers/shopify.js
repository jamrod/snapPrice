const express = require("express")
const router = express.Router()
const secrets = require("./secrets")
const baseURL = secrets.baseURL

const apiCalls = require("../integration/shopifyInterface")
// console.log(baseURL)

router.get("/", (req,res) => {
    res.json("Hi from Shopify.js")
})

router.get("/collections", (req,res) => {
    apiCalls.getCollections(baseURL, req.params.id)
    .then(data => res.json(data))
    .catch(err => console.log(err))
})

router.get("/collections/:id", (req,res) => {
    apiCalls.getCollectionProducts(baseURL, req.params.id)
    .then(data => res.json(data))
    .catch(err => console.log(err))
})

router.get("/product/:id", (req,res) => {
    apiCalls.getProduct(baseURL, req.params.id)
    .then(data => res.json(data))
    .catch(err => console.log(err))
})

router.put("/product/:id", (req,res) => {
    apiCalls.updateProduct(baseURL, req.params.id, req.body)
    .then(response => res.json(response))
    .catch(err => console.log(err))
})

router.put("/variant/:id", (req,res) => {
    apiCalls.updateVariant(baseURL, req.params.id, req.body)
    .then(response => res.json(response))
    .catch(err => console.log(err))
})


module.exports = router
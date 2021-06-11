const csv = require('./node-csv')
const shopifyInterface = require('../integration/shopifyInterface')

//get all products for a collection
//then get all variants for each product
//create 'table' of products then convert to a csv file that can be downloaded

exports.makeCSVFromCollection = (baseURL, id) => {
    let products = shopifyInterface.getCollectionProducts()
}
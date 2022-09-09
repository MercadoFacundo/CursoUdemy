const express = require('express');

const {ProductsController} = require('./controller');

const router = express.Router();

module.exports.ProductsAPI = (app) => {
    router
        .get('/', ProductsController.getProducts) //https://localhost:3000/api/product/
        .get("/report", ProductsController.generateReport)
        .get('/:id', ProductsController.getProduct)//https://localhost:3000/api/product/23
        .post('/', ProductsController.createProducts);
        //update
        //delete
        

    app.use('/api/products', router)
}
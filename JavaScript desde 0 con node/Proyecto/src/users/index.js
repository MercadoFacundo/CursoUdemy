const express = require('express');

const {UsersController} = require('./controller');

const router = express.Router();

module.exports.UsersAPI = (app) => {
    router
        .get('/', UsersController.getUsers) //https://localhost:3000/api/product/
        .get('/:id', UsersController.getUser)//https://localhost:3000/api/product/23
        .post('/', UsersController.createUsers);
        //update
        //delete
        

    app.use('/api/users', router)
}
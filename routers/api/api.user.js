const express = require("express");
const api = express.Router();
const UserController = require("../../controllers/user.controller");
const userController = new UserController;

// Endpoint user
api.post('/v1/users/register', userController.register);
api.get('/v1/users', userController.getUser);
api.delete('/v1/users/:id', userController.deleteUser);
api.put('/v1/users/:id', userController.editUser);

module.exports = api;



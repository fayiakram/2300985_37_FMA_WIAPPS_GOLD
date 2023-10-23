const express = require("express");
const HomeController = require("../controllers/home.controller");
const homeRouter = express.Router();

const homeController = new HomeController;

homeRouter.get("/", homeController.indexLogin);
homeRouter.get("/home", homeController.indexHome);
homeRouter.get("/login", homeController.indexLogin);
homeRouter.get("/orders", homeController.indexOrders);
homeRouter.get("/customers", homeController.indexCustomers);
homeRouter.get("/messages", homeController.indexMessages);
homeRouter.get("/reports", homeController.indexReports);
homeRouter.get("/services", homeController.indexServices);
homeRouter.get("/staff", homeController.indexStaff);
homeRouter.get('/register', homeController.indexRegister);

module.exports = homeRouter;
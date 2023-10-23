const UserService = require("../services/user.service");

const userService = new UserService();
class HomeController {
    indexHome(req, res) {
        res.render("admins/home");
    }
    indexLogin(req, res) {
        res.render("admins/login");
    }
    indexOrders(req, res) {
        res.render("admins/orders");
    }
    indexServices(req, res) {
        res.render("admins/services");
    }
    async indexCustomers(req, res) {
        const customers = await userService.getUser()
        res.render("admins/customers", { customers });
    }
    indexReports(req, res) {
        res.render("admins/reports");
    }
    indexStaff(req, res) {
        res.render("admins/staff");
    }
    indexMessages(req, res) {
        res.render("admins/messages");
    }
    indexRegister(req, res) {
        res.render('users/register', {
            layout: "layouts/layouts",
            pageTitle: 'Registration',
            user: req.user
        })
    }
}

module.exports = HomeController;
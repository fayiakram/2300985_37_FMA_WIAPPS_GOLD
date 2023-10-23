const express = require("express");
const homeRouter = require("./home");
const api = require("./api/api.user");
const authRouter = require("./web/auth");
const apiLayanan = require("./api/api.layanan");
const router = express.Router();
router.use("/api", api)
router.use("/api", apiLayanan)
router.use('/', authRouter);

router.use("/", homeRouter)
router.use("/", (req, res) => {
    res.render("errors/404")
})



module.exports = router;
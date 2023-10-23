const express = require("express");
const LayananController = require("../../controllers/layanan.controller");
const apiLayanan = express.Router();
const layananController = new LayananController


apiLayanan.post('/v1/layanan', layananController.addLayanan);
apiLayanan.get('/v1/layanan', layananController.getLayanan);
apiLayanan.delete('/v1/layanan/:id', layananController.deleteLayanan);
apiLayanan.put('/v1/layanan/:id', layananController.editLayanan);


module.exports = apiLayanan;
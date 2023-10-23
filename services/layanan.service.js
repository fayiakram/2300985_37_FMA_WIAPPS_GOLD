const { layanan } = require("../models");

class LayananService {
    constructor() {
        this.layananModel = layanan;
    }
    async store(payload) {
        const date = new Date();
        const {
            service_name,
            price
        } = payload;
        const data = await this.layananModel.create({
            service_name,
            price,
            createdAt: date,
            updatedAt: date
        });
        return data
    }
    async getLayanan(id) {
        let data;
        data = await this.layananModel.findAll();

        return data;
    }

    async delete(id) {
        const deleteLayanan = this.layananModel.destroy({
            where: {
                id,
            },
        });
        return deleteLayanan;
    }
}

module.exports = LayananService;
const LayananService = require("../services/layanan.service");


const layananService = new LayananService();

class LayananController {
    async addLayanan(req, res) {
        try {
            await layananService.store(req.body);
            res.status(201).json({ message: "Layanan berhasil ditambah" });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Gagal menambahkan layanan" });
        }
    }

    async getLayanan(req, res) {
        try {
            const data =
                await layananService.getLayanan(null);

            res.status(200).json({ message: "Layanan diambil", data });
        } catch (error) {
            console.error(error);
        }

    }

    async deleteLayanan(req, res) {
        try {
            const layanan = await layananService.delete(req.params.id)
            res.status(201).json({
                data: layanan, message: "Berhasil menghapus layanan"
            })
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: "Gagal menghapus buku." });

        }
    }
    async editLayanan(req, res) {
        try {
            const layananId = req.params.id;
            const updatedLayananData = req.body;

            const editedLayanan = await layananService.update(layananId, updatedLayananData);

            if (editedLayanan) {

                res.status(200).json({ data: editedLayanan, message: "Layanan berhasil diubah" });
            } else {

                res.status(404).json({ message: "Layanan tidak ditemukan" });
            }
        } catch (error) {

            console.error(error);
            res.status(500).json({ error: "Gagal mengedit Layanan." });
        }
    }
}

module.exports = LayananController;
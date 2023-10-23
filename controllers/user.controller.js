const UserService = require("../services/user.service");
const userService = new UserService();

class UserController {
    async register(req, res) {
        try {
            await userService.store(req.body);
            // Tampilkan pesan sukses atau respons yang sesuai
            res.status(201).json({ message: 'Registrasi berhasil' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Gagal mendaftar' });
        }
    }

    async getUser(req, res) {
        try {
            const data =
                await userService.getUser(null);

            res.status(200).json({ message: "Data User diambil", data });
        } catch (error) {
            console.error(error)
        }
    }

    async deleteUser(req, res) {
        try {
            const user = await userService.delete(req.params.id)
            res.status(201).json({
                data: user, message: "Berhasil menghapus user"
            })
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: "gagal menghapus user." });

        }
    }

    async editUser(req, res) {
        try {
            const userId = req.params.id;
            const updatedUserData = req.body;
            const editedUser = await userService.update(userId, updatedUserData);

            if (editedUser) {
                res.status(200).json({ data: editedUser, message: "Data User Berhasil diubah" });
            } else {
                res.status(404).json({ message: "user tidak ditemukan " });
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Gagal mengedit user." });

        }
    }
}

module.exports = UserController;
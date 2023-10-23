const { user } = require("../models");
const bcrypt = require("bcrypt");

class UserService {
    constructor() {
        this.userModel = user;
    }
    async store(payload) {
        const date = new Date();
        const { name, email, password } = payload;
        const encript = await bcrypt.hash(password, 10);

        // Simpan data pengguna ke database
        const data = await this.userModel.create({
            name,
            email,
            password: encript,
            createdAt: date,
            updatedAt: date,
        });
        return data;
    }

    async getUser(id) {
        let data;
        data = await this.userModel.findAll();

        return data;
    }

    async delete(id) {
        const deleteUser = this.userModel.destroy({
            where: {
                id,
            },
        });
        return deleteUser;
    }

    async update(id, payload) {
        try {
            const {
                name,
                email,
                password
            } = payload

            const user = await this.userModel.findOne({
                where: { id }
            });

            if (!user) {
                throw new Error("User Tidak Ditemukan");
            }
            await user.update({
                name,
                email,
                password
            })
            return user;
        } catch (error) {
            console.error('Gagal memperbarui User:', error);
            throw error;

        }
    }
}

module.exports = UserService;
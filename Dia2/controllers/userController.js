const userRepository = require('../repositories/UserRepository');

const createUser = async (req, res) => {
    try {
        const user = await userRepository.create(req.body);
        // La "Vista" es esta respuesta JSON
        res.status(201).json({
            message: "Usuario creado exitosamente",
            data: user
        });
    } catch (error) {
        res.status(500).json({ message: "Error en el servidor", error: error.message });
    }
};

const getUserById = async (req, res) => {
    // Lógica para obtener un usuario...
};

module.exports = {
    createUser,
    getUserById
};
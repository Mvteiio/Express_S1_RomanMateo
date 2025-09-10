const userRepository = require('../repositories/UserRepository');

const createUser = async (req, res) => {
    try {
        const user = await userRepository.create(req.body);
        
        res.status(201).json({
            message: "Usuario creado exitosamente",
            data: user
        });
    } catch (error) {
        res.status(500).json({ message: "Error en el servidor", error: error.message });
    }
};

const getUserById = async (req, res) => {
    try{
        const  user = await userRepository.findById(req.params.id)
        if (!user){
            res.status(404).json({message: "El usuario no existe"})
        } else {
            res.status(200).json({
            message: "Usuario encontrado",
            data: user
        });
        }
    } catch (error) {
        res.status(500).json({ message: "Error en el servidor", error: error.message });
    }

};

module.exports = {
    createUser,
    getUserById
};
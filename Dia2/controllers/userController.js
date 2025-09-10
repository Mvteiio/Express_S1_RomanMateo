const userRepository = require('../repositories/userRepository');

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

const getAllUsers = async (req, res) => {
    try {
        const users = await userRepository.findAll();
        if (!users){
            res.status(404).json({message: "No existen usuarios en esta coleccion"})
        } else {
            res.status(200).json({
            message: "Usuarios encontrados",
            data: users
        });
        }
    } catch (error) {
        res.status(500).json({ message: "Error en el servidor!!", error: error.message });
    }
};

const deleteUser = async (req, res) => {
    try {
        const userDeleted = await userRepository.delete(req.params.id)
        if (!userDeleted){
            res.status(404).json({message: "No existe usuario con este id"})
        } else {
            res.status(200).json({
            message: "Usuario eliminado con exito",
            data: userDeleted
        });
        }
    } catch (error) {
        res.status(500).json({ message: "Error en el servidor!!", error: error.message });
    }
}



module.exports = {
    createUser,
    getUserById,
    getAllUsers,
    deleteUser
};
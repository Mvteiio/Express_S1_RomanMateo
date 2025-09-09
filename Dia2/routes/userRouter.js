const express = require('express');
const router = express.Router();

// 2. Importamos las funciones del controlador
const { createUser, getUserById } = require('../controllers/UserController');

// 3. Definimos las rutas y las conectamos a los controladores
// POST /api/users/ -> Llama a la función createUser
router.post('/', createUser);

// GET /api/users/:id -> Llama a la función getUserById
router.get('/:id', getUserById);

// 4. Exportamos para que app.js pueda usar estas definiciones
module.exports = router;
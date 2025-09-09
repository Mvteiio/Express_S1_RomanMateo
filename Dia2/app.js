const express = require('express');
const Database = require('./db'); // Importas tu clase Database
const userRoutes = require('./routes/userRoutes'); // Tus rutas

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

// Rutas de la API
app.use('/api/users', userRoutes);

// Función para iniciar el servidor
const startServer = async () => {
    try {
        // Obtenemos la instancia de la DB. Esto la conecta si no lo está.
        await Database.getInstance();
        
        app.listen(PORT, () => {
            console.log(`🚀 Servidor corriendo en el puerto ${PORT}`);
        });
    } catch (error) {
        console.error('❌ Falló el inicio del servidor', error);
        process.exit(1);
    }
};

startServer();
const Database = require('../db'); // Ajusta la ruta a tu archivo db.js

class UserRepository {
    constructor() {
        this.collectionName = 'users'; // Define el nombre de la colección
        this.collection = null; // Se inicializará de forma asíncrona
    }

    // Método para obtener la colección de forma segura
    async getCollection() {
        if (!this.collection) {
            // Obtenemos la instancia de la base de datos
            const dbInstance = await Database.getInstance();
            // Accedemos al objeto 'db' y luego a la colección
            this.collection = dbInstance.db.collection(this.collectionName);
        }
        return this.collection;
    }

    async create(user) {
        const collection = await this.getCollection();
        const result = await collection.insertOne(user);
        return result.ops[0]; // Devuelve el documento insertado
    }

    async findById(id) {
        const collection = await this.getCollection();
        // sigo aqui
    }

    // ... otros métodos CRUD (findAll, update, delete)
}

module.exports = new UserRepository(); // Exportamos una única instancia del repositorio
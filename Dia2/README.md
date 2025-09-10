# API de sistema Campuslands 🚀🧑‍🚀

Esta es una API RESTful construida con **Node.js**, **Express** y **MongoDB**, diseñada para gestionar un sistema campuslands a menor escala. La aplicación sigue una arquitectura limpia y escalable para facilitar su mantenimiento y expansión.

---

##  Arquitectura

El proyecto está estructurado siguiendo patrones de diseño y arquitecturas modernas para asegurar la separación de responsabilidades y la eficiencia:

* **Modelo-Vista-Controlador (MVC):** Se adapta para un entorno de API, donde la "Vista" es la respuesta JSON que se envía al cliente.
* **Patrón Repositorio:** Abstrae la lógica de acceso a datos, separando la lógica de negocio de la comunicación con la base de datos.
* **Patrón Singleton:** Asegura una única instancia de conexión a la base de datos de MongoDB, optimizando el uso de recursos.

---

##  Endpoints de la API

Actualmente, la API cuenta con los siguientes endpoints:

### 1. Crear un Nuevo Usuario

Este endpoint permite registrar un nuevo usuario en la base de datos.

* **URL:** `/api/users`
* **Método:** `POST`
* **Cuerpo de la Petición (Body):** Se debe enviar un objeto JSON con los datos del usuario. El campo `identificacion` debe ser un número único.

    ```json
    {
        "identificacion": 12345,
        "nombre": "Mateo Roman",
        "rol": "Developer"
    }
    ```

* **Respuestas:**
    * **`201 Created`** (Éxito): Se devuelve cuando el usuario es creado exitosamente. El cuerpo de la respuesta incluye un mensaje y los datos del usuario recién creado, incluyendo su `_id` asignado por MongoDB.
        ```json
        {
            "message": "Usuario creado exitosamente",
            "data": {
                "_id": "63f1e3b4c5d6e7f8a9b0c2d1",
                "identificacion": 12345,
                "nombre": "Mateo Roman",
                "rol": "Developer"
            }
        }
        ```
    * **`500 Internal Server Error`** (Error): Se devuelve si ocurre un problema en el servidor al intentar crear el usuario.

### 2. Obtener un Usuario por su `identificacion`

Este endpoint permite buscar y obtener los datos de un usuario específico utilizando su campo `identificacion`.

* **URL:** `/api/users/:id`
* **Método:** `GET`
* **Parámetros de URL:**
    * `id` (requerido): El número de `identificacion` del usuario que se desea buscar.
        * Ejemplo: `/api/users/12345`

* **Respuestas:**
    * **`200 OK`** (Éxito): Se devuelve si se encuentra el usuario. El cuerpo de la respuesta incluye un mensaje y el objeto completo del usuario.
        ```json
        {
            "message": "Usuario encontrado",
            "data": {
                "_id": "63f1e3b4c5d6e7f8a9b0c2d1",
                "identificacion": 12345,
                "nombre": "Mateo Roman",
                "rol": "Developer"
            }
        }
        ```
    * **`404 Not Found`** (No Encontrado): Se devuelve si no existe ningún usuario con la `identificacion` proporcionada.
        ```json
        {
            "message": "Usuario no encontrado."
        }
        ```
    * **`500 Internal Server Error`** (Error): Se devuelve si ocurre un problema en el servidor durante la búsqueda.

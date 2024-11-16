# Blog API con Node.js, Express y MySQL

Este proyecto es una API para gestionar un blog. Permite realizar operaciones CRUD (crear, leer, actualizar y eliminar) sobre dos entidades principales: **Posts** y **Authors** (Autores). Está construida con Node.js, Express y utiliza MySQL como base de datos.

---

## Requisitos

- **Node.js**: 20.12.2
- **MySQL**: XAMPP o similar
- **NPM** (Node Package Manager)
- **Git**

---

## Configuración del Proyecto

### 1. Clonar el Repositorio

```
git clone https://github.com/tu-usuario/blog-api.git
cd blog
```

### 2. Instalar dependencias
```
npm install
```
### Configurar la Base de Datos
1. Abre MySQL (en XAMPP o cualquier servidor MySQL).

2. Crea una base de datos llamada blog:
```
CREATE DATABASE blog;
```
4. Configurar Variables de Entorno
Crea un archivo .env en la raíz del proyecto y configura tus credenciales de base de datos:
```
DB_HOST=localhost
DB_USER=tu_usuario
DB_PASSWORD=tu_contraseña
DB_NAME=blog
PORT=3000
```
5. Ejecutar el Servidor
Para ejecutar el servidor en modo desarrollo con nodemon, utiliza el siguiente comando:

```
npm run dev

```
--- 
## Endpoints de la API
### Endpoints de Autores
1. Crear un nuevo autor
    * URL: `POST /api/authors`
    * Body:
    ```
    {
      "name": "Laura Miller",
      "email": "laura.miller@example.com",
      "image": "https://example.com/images/laura.jpg"
    }
    ```
2. Obtener todos los autores
    * URL: `GET /api/authors`
### Endpoints de Posts
1. Crear un nuevo post
    * URL: `POST /api/posts
    * Body: 
    ```
    {
      "title": "Exploring the Cosmos",
      "description": "An in-depth look at the wonders of the universe.",
      "category": "Science",
      "author_id": 1
    }
     ```
2. Obtener todos los posts
    * URL: `GET /api/posts`
3. Obtener un post por ID
    * URL: GET `/api/posts/:id`
4. Obtener todos los posts de un autor específico
    * URL: `GET /api/authors/:authorId/posts`
## Estructura del Proyecto
```
blog-api/
├── config/
│   └── db.js               # Configuración de conexión a MySQL
├── controllers/
│   ├── authorController.js  # Controladores para autores
│   └── postController.js    # Controladores para posts
├── models/
│   ├── authorModel.js       # Modelo de la tabla authors
│   └── postModel.js         # Modelo de la tabla posts
├── routes/
│   ├── authorRoutes.js      # Rutas para autores
│   └── postRoutes.js        # Rutas para posts
├── index.js                 # Archivo principal del servidor
├── .env                     # Variables de entorno (configurar en tu máquina)
├── .gitignore               # Archivos y carpetas a ignorar en Git
└── package.json             # Dependencias y scripts del proyecto

```
const db = require('../config/db');

// Obtener todos los posts junto con la información del autor
exports.getAllPosts = (req, res) => {
    const query = `
        SELECT posts.*, authors.name AS author_name, authors.email AS author_email, authors.image AS author_image
        FROM posts
        JOIN authors ON posts.author_id = authors.id
    `;
    db.query(query, (err, results) => {
        if (err) return res.status(500).send(err);
        res.json(results);
    });
};

// Obtener un post por su ID junto con la información del autor
exports.getPostById = (req, res) => {
    const query = `
        SELECT posts.*, authors.name AS author_name, authors.email AS author_email, authors.image AS author_image
        FROM posts
        JOIN authors ON posts.author_id = authors.id
        WHERE posts.id = ?
    `;
    db.query(query, [req.params.id], (err, results) => {
        if (err) return res.status(500).send(err);
        res.json(results[0]);
    });
};

// Crear un nuevo post
exports.createPost = (req, res) => {
    const { title, description, category, author_id } = req.body;
    const query = `
        INSERT INTO posts (title, description, category, author_id)
        VALUES (?, ?, ?, ?)
    `;
    db.query(query, [title, description, category, author_id], (err, results) => {
        if (err) return res.status(500).send(err);
        res.json({ message: 'Post created successfully', postId: results.insertId });
    });
};

// Obtener todos los posts de un autor específico
exports.getPostsByAuthorId = (req, res) => {
    const query = `
        SELECT posts.*, authors.name AS author_name, authors.email AS author_email, authors.image AS author_image
        FROM posts
        JOIN authors ON posts.author_id = authors.id
        WHERE authors.id = ?
    `;
    db.query(query, [req.params.authorId], (err, results) => {
        if (err) return res.status(500).send(err);
        res.json(results);
    });
};

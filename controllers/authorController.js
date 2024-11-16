const db = require('../config/db');

// Obtener todos los autores
exports.getAllAuthors = (req, res) => {
    const query = `SELECT * FROM authors`;
    db.query(query, (err, results) => {
        if (err) return res.status(500).send(err);
        res.json(results);
    });
};

// Obtener un autor por su ID
exports.getAuthorById = (req, res) => {
    const query = `SELECT * FROM authors WHERE id = ?`;
    db.query(query, [req.params.id], (err, results) => {
        if (err) return res.status(500).send(err);
        res.json(results[0]);
    });
};

// Crear un nuevo autor
exports.createAuthor = (req, res) => {
    const { name, email, image } = req.body;
    const query = `
        INSERT INTO authors (name, email, image)
        VALUES (?, ?, ?)
    `;
    db.query(query, [name, email, image], (err, results) => {
        if (err) return res.status(500).send(err);
        res.json({ message: 'Author created successfully', authorId: results.insertId });
    });
};

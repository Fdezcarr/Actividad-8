const express = require('express');
const app = express();
const postRoutes = require('./routes/postRoutes');
const authorRoutes = require('./routes/authorRoutes');

app.use(express.json());
app.use('/api/posts', postRoutes);
app.use('/api/authors', authorRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

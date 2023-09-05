const express = require('express');
const databaseModule = require('../../db/database');

const app = express();
const port = process.env.port || 3000;

app.get('/api/books', async (req, res) => {
    try {
        const data = await databaseModule.readDatabase();
        res.send(data);
    } catch (err) {
        console.error(`Error reading database:`, err.message);
    }
});

app.delete('/api/books/:index', async (req, res) => {
    const bookToDelete = req.params.index;

    try {
        const data = await databaseModule.readDatabase(); 
        data.books.splice(bookToDelete, 1);
        await databaseModule.writeDatabase(data);
        res.status(200).json({ message: 'Book deleted successfully' });
    } catch (error) {
        console.error(`Error deleting book ${error.message}`);
    }
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
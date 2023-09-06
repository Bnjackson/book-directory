const express = require('express');
const databaseModule = require('../../db/database');

const app = express();
app.use(express.json());

const port = process.env.port || 3000;

app.get('/api/books', async (req, res) => {
    try {
        const data = await databaseModule.readDatabase();
        res.send(data);
    } catch (err) {
        console.error(`Error reading database:`, err.message);
    }
});

app.put('/api/books/:index', async (req, res) => {
    const index = req.params.index;
    const updatedBook = req.body;
    try {
        const data = await databaseModule.readDatabase();
        data.books[index] = updatedBook;
        await databaseModule.writeDatabase(data);
        res.status(200).json({ message: 'Book updated successfully' });
    } catch (error) {
        console.error(`Error updating book ${error}`);
    }
});

app.post('/api/books', async (req, res) => {
    const newBook = req.body;
    try {
        const data = await databaseModule.readDatabase();
        data.books.push(newBook);
        //Acess the newBook object from the request body
        await databaseModule.writeDatabase(data);
        res.status(200).json({ message: 'New book added successfully' });
    } catch (error) {
        console.error(`Error adding a new book ${error.message}`);
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
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
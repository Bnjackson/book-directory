const express = require('express');
const databaseModule = require('../../db/database');

const app = express();
const port = process.env.port || 3000;

app.get('/api/books', async (req, res) => {
    try {
        const data = await databaseModule.readDatabase()
        res.send(data);
    } catch (err) {
        console.error(`Error reading database:`, err.message);
    }
});



app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
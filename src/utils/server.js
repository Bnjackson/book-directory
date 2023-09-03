const express = require('express');

const app = express();
const port = process.env.port || 3000;

app.get('/api/books', (req, res) => {
    try {
        const data = 'Hello World!';
        res.send(data);
    } catch (err) {
        console.error(`Error reading database:`, err.message);
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})
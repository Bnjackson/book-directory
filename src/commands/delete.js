const axios = require('axios');
const inputModule = require('../utils/input.js');

const apiUrl = 'http://localhost:3000';

async function deleteBook() {
    const indexToDelete = await inputModule.getBookIndex('What is the index of the book you want to delete from the directory? ');
    try {
        await axios.delete(`${apiUrl}/api/books/${indexToDelete}`);
    } catch (error) {
        console.error(`Error calling the DELETE API endpoint: ${error.message}`);
        throw error;
    }
}

module.exports = {
    deleteBook
}
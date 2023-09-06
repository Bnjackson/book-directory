const axios = require('axios');

const apiUrl = 'http://localhost:3000';

async function getBooks() {
    try {
        const response = await axios.get(`${apiUrl}/api/books`);
        return response.data;
    } catch (error) {
        console.error(`Error calling API GET endpoint: ${error.message}`);
        throw error;
    }
}

async function outputBooks() {
    try {
        const bookData = await getBooks();
        console.table(bookData['books']);
    } catch (error) {
        console.error(`Error outputting the books data: ${error.message}`);
        throw error;
    }
}

module.exports = {
    getBooks,
    outputBooks
}
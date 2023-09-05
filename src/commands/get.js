const axios = require('axios');

const apiUrl = 'http://localhost:3000';

async function getBooks() {
    try {
        const response = await axios.get(`${apiUrl}/api/books`);
        return response.data;
    } catch (error) {
        console.error(`Error getting books: ${error.message}`);
        throw error;
    }
}

async function outputBooks() {
    try {

    } catch (error) {
        console.error(`Error getting outputting the books data: ${error.message}`);
    }
    const bookData = await getBooks();
    console.table(bookData['books directory']);
}

module.exports = {
    getBooks,
    outputBooks
}
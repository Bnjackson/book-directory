const axios = require('axios');
const inputModule = require('../utils/input.js');

const axiosConfig = {
    headers: {
        'Content-Type' : 'application/json',
    },
};

const apiUrl = 'http://localhost:3000';

async function putBook() {
    const indexToUpdate = await inputModule.getBookIndex('What is the index of the book you want to update? ');
    const updatedBook = await inputModule.getNewBook();
    try {
        await axios.put(`${apiUrl}/api/books/${indexToUpdate}`, updatedBook, axiosConfig);
    } catch (error) {
        console.error(`ERROR: Calling the PUT API endpoint?`);
        throw error;
    }
}

module.exports = {
    putBook
}
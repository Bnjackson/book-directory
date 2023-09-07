const axios = require('axios');
const inputModule = require('../utils/input.js');

const axiosConfig = {
    headers: {
        'Content-Type' : 'application/json',
    },
};

const apiUrl = 'http://localhost:3000';

async function postBook() {
    const newBook = await inputModule.getNewBook();
    try {
        await axios.post(`${apiUrl}/api/books`, newBook, axiosConfig);
        console.log('New book added successfully.');
    } catch (error) {
        console.error(`Error calling POST API endpoint ${error}`);
        throw error;
    }
}

module.exports = {
    postBook
}
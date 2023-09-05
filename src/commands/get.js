const axios = require('axios');

const apiUrl = 'http://localhost:3000/';

function getBooks() {
    axios.get(`${apiUrl}api/books`)
    .then((response) => {
        console.table(response.data['books directory']);
    })
    .catch((error) => {
        console.error(`Error getting books: ${error.message}`)
    })
}

module.exports = {
    getBooks
}
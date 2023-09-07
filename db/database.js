const fs = require('fs');
const path = require('path');

const databaseFilePath = path.join(__dirname, '../db/books.json')

async function readDatabase() {
    try {
        const jsonData = fs.readFileSync(databaseFilePath, 'utf-8');
        return JSON.parse(jsonData);
    } catch (error) {
        console.error(`Error reading database: ${error}`);
        throw error;
    }
} 

async function writeDatabase(data) {
    try {
        fs.writeFileSync(databaseFilePath, JSON.stringify(data, null, 2), 'utf-8');
    } catch (error) {
        console.error(`Error writing to database: ${error}`)
        throw error;
    }
}

module.exports = {
    readDatabase, 
    writeDatabase
}
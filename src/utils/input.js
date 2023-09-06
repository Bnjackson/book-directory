const readlineSync = require('readline-sync');
const getModule = require('../commands/get.js');

function getUserInput(question, inputType) {
    let userInput;
    if (inputType === 'number') {
        userInput = Number(readlineSync.question(`${question}`));
    } else {
        userInput = readlineSync.question(`${question}`);
    }
    return userInput ? userInput : getUserInput(question, inputType);
}

function getUserCommand() {
    const userCommand = getUserInput('Enter a command? ');
    const allowedCommands = ['get', 'post', 'put', 'delete'];
    if (allowedCommands.includes(userCommand)) {
        return userCommand;
    } else {
        console.log(`ERROR: Input must match one of ${allowedCommands}`);
        return getUserCommand();
    }
}

async function getBookIndex(message) {
    await getModule.outputBooks();
    const bookData = await getModule.getBooks();
    const inputtedIndex = Number(readlineSync.question(message));
    if (isNaN(inputtedIndex)) {
        console.log('ERROR: Input must be a number');
    } else if (!bookData.books[inputtedIndex]) {
        console.log('Error: Input must match a books index')
    } else {
        return inputtedIndex;
    }
    return getBookIndex(message)
}

async function getNewBook() {
    let newBook = {
        Title : getUserInput('What is the books title? '),
        Author : getUserInput('Who is the books author? '),
        Pages : getUserInput('What is the number of pages? ', 'number'),
        Genre : getUserInput('What is the books genre? '),
        Language : getUserInput('What language is the book written in? '),
        Country : getUserInput('What country was the book published in? ')
    };
    return newBook;
}

module.exports = {
    getUserCommand,
    getBookIndex,
    getNewBook
}
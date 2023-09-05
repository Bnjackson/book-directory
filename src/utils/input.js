const readlineSync = require('readline-sync');
const getModule = require('../commands/get.js');

function getUserInput(question) {
    const userInput = readlineSync.question(`${question}`).toLowerCase();
    return userInput;
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

module.exports = {
    getUserCommand,
    getBookIndex
}
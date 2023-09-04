const readlineSync = require('readline-sync');

function getUserInput(question) {
    const userInput = readlineSync.question(`${question}`).toLowerCase();
    return userInput;
}

function getUserCommand () {
    const userCommand = getUserInput('Enter a command? ');
    const allowedCommands = ['get', 'post', 'put', 'delete'];
    if (allowedCommands.includes(userCommand)) {
        return userCommand;
    } else {
        console.log(`ERROR: Input must match one of ${allowedCommands}`);
        return getUserCommand();
    }
}

module.exports = {
    getUserCommand
}
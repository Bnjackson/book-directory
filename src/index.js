'use strict';

const inputModules = require('./utils/input.js');
const getModule = require('./commands/get.js');
const postModule = require('./commands/post.js');
const putModule = require('./commands/put.js');
const deleteModule = require('./commands/delete.js');

console.log(`
This program stores a directory of books in a database, and uses a REST API to connect to and update the database from the command line. 
The commands you can enter are:
get - gets all books,
post - adds a new book to the database,
put - updates a book in the database, 
delete - deletes a book in the database
`);

async function main() {
    const userCommand = inputModules.getUserCommand();
    if (userCommand === 'get') {
        await getModule.outputBooks();
    } else if (userCommand === 'post') {
        await postModule.postBook();
    } else if (userCommand === 'put') {
        await putModule.putBook();
    } else if (userCommand === 'delete') {
        await deleteModule.deleteBook();
    }
    anotherCommand();
}

function anotherCommand() {
    const userAnswer = inputModules.getUserInput('Would you like to enter another command? y/n ');
    if (userAnswer.toLowerCase() === 'y') {
        main();
    } else if (userAnswer.toLowerCase() === 'n') {
        console.log('Thanks for using this program');
    } else {
        console.log(`ERROR: Input must be either y/n`);
        return anotherCommand();
    }
}

main();
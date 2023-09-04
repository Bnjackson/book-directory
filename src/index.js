'use strict';

const inputModules = require('./utils/input.js');

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
    console.log(userCommand);
}

main();
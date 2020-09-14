// const fs = require('fs')

// fs.writeFileSync("notes.txt", "Some Notes for the day!");
// fs.appendFileSync("notes.txt", "Finish the 10 lessons of the course!");

// const name = require('./utils')
// const note = require('./notes')
// const validator = require('validator')
// const chalk = require('chalk')
const yargs = require('yargs');
const notes = require('./notes');

// const myNote = note();

// console.log(chalk.cyan(name));
// console.log(chalk.bgCyanBright(myNote));
// console.log(chalk.red(validator.isEmail(myNote)));
// console.log(chalk.green(validator.isEmail("dorisinjari@gmail.com")));

// console.log(process.argv);
// console.log(process.argv[2]);

// const input = process.argv[2];

// if (input === 'add') {
//     console.log('You may insert youre note!');
// } else if (input === 'remove') {
//     console.log('You may remove youre note!');
// }

// console.log(yargs.argv);

// ADD A NOTE COMMAND
yargs.command({
    command: 'add',
    describe: 'Add a new note:',
    builder: {
        title: {
            describe: 'Note title!',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body!',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        console.log('Note Title: ', argv.title);
        console.log('Note: ', argv.body);
        notes.addNotes(argv.title, argv.body);
    }
});

// REMOVE A NOTE COMMAND
yargs.command({
    command: 'remove',
    describe: 'Remove note:',
    builder: {
        title: {
            describe: 'Note title!',
            demandOption: true,
            type: 'string'
        },
    },
    handler: (argv) => {
        console.log('Remove note:', argv.title);
        notes.removeNote(argv.title);
    }
});

// LIST NOTES COMMAND
yargs.command({
    command: 'list',
    describe: 'List the notes:',
    handler: () => {
        console.log('Notes list:');
        notes.listNotes();
    }
});

// READ A NOTE COMMAND
yargs.command({
    command: 'read',
    describe: 'Read the note:',
    builder: {
        title: {
            describe: 'Note title!',
            demandOption: true,
            type: 'string'
        },
    },
    handler: (argv) => {
        console.log('Read note:', argv.title);
        notes.readingNotes(argv.title);
    }
});

// console.log(yargs.argv);
yargs.parse();
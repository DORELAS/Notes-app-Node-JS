const fs = require('fs')
const chalk = require('chalk')

const getNotes = () => { return "My notes ..." };

const addNotes = (title, body) => {

    // LOAD THE NOTES
    const notes = loadNotes();
    const duplicateNotes = notes.filter( (note) => { return note.title === title } );
    const duplicateNote = notes.find( (note) => { return note.title === title } );
    console.log(notes);

    debugger
    
    if (!duplicateNote) {
        // CHANGE THE NOTES
        notes.push({
            title: title,
            body: body
        });

        // SAVE THE NOTES
        saveNotes(notes);
        console.log(chalk.bgGreen('Note was added successfully!'));
    } else {
      
        console.log(chalk.bgRed('Note was not added!'));
    }

}

const removeNote = (title) => {
    
    const notes = loadNotes();
    const notesToKeep = notes.filter( (note) => {
        return note.title !== title;
    });
    console.log(notes);

    if (notesToKeep.length === notes.length) {
        console.log(chalk.bgRed('Note was not found!'));
    } else {
        console.log(chalk.bgGreen('Note was removed!'));
        saveNotes(notesToKeep);
    }
}

const listNotes = () => {

    console.log(chalk.inverse('Your notes!'));

    const notes = loadNotes();
    notes.forEach( note => {

        console.log(chalk.magenta(note.title));
    });
}

const readingNotes = (title) => {
     // LOAD THE NOTES
     const notes = loadNotes();
     const searchedNote = notes.find( (note) => { return note.title === title } );
 
     if (searchedNote) {

         console.log(chalk.cyan(searchedNote.title));
         console.log(searchedNote.body);
        } else {
         console.log(chalk.bgRed('Note was not found!'));
     }
}

const saveNotes = (notes) => {

   const dataJSON = JSON.stringify(notes);
   fs.writeFileSync('notes.json', dataJSON);
}

const loadNotes = () => {
    try {
        const databuffer = fs.readFileSync('notes.json');
        const dataJSON = databuffer.toString();
        return JSON.parse(dataJSON);

    } catch(error) {
        return [];
    }
}



module.exports = {

    getNotes: getNotes,
    addNotes: addNotes,
    removeNote: removeNote,
    listNotes: listNotes,
    readingNotes: readingNotes
}
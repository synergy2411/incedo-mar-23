const { readFileSync, writeFileSync } = require("fs")
const color = require("colors");

const loadNotes = () => {
    try {
        const allNotes = readFileSync("./notes.json")
        const stringNotes = allNotes.toString()
        return JSON.parse(stringNotes)
    } catch (err) {
        return []
    }
}
const saveNotes = (notes) => {
    writeFileSync("./notes.json", JSON.stringify(notes))
    console.log(color.green("Notes Saved"));
}

const addNote = (title, body) => {
    let newNote = { title, body }
    const allNotes = loadNotes();
    const position = allNotes.findIndex(note => note.title === title)
    if (position === -1) {
        allNotes.push(newNote);
        return saveNotes(allNotes)
    }
    console.log(color.red("Title already exist. Try again!"))
}

const readNote = () => { }
const removeNote = () => { }
const listNotes = () => { }

module.exports = {
    addNote,
    readNote,
    removeNote,
    listNotes
}
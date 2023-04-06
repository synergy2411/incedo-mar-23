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
const saveNotes = (notes, op) => {
    writeFileSync("./notes.json", JSON.stringify(notes))
    let msg = "";
    op === 'saved' ? msg = "Saved successfully!!" : msg = "Deleted the item.";
    console.log(color.green(msg))
}

const addNote = (title, body) => {
    let newNote = { title, body }
    const allNotes = loadNotes();
    const position = allNotes.findIndex(note => note.title === title)
    if (position === -1) {
        allNotes.push(newNote);
        return saveNotes(allNotes, "saved")
    }
    console.log(color.red("Title already exist. Try again!"))
}

const readNote = (title) => {
    const allNotes = loadNotes();
    const foundNote = allNotes.find(note => note.title === title)
    if (foundNote) {
        console.log(color.blue("--------------"))
        console.log(color.grey("FOUND NOTE"))
        console.log(color.blue("--------------"))
        console.log("Title : ", foundNote.title);
        console.log("Body : ", foundNote.body);
        return;
    }
    console.log(color.red("Unable to find note for " + title))
}

const removeNote = (title) => {
    const allNotes = loadNotes();
    const position = allNotes.findIndex(note => note.title === title)
    if (position === -1) {
        return console.log(color.red("Unable to find for title " + title));
    }
    allNotes.splice(position, 1)
    saveNotes(allNotes);
}

const listNotes = () => {
    const allNotes = loadNotes();
    console.log(color.blue("--------------"))
    console.log(color.grey("LISTING ALL NOTES"))

    allNotes.forEach(note => {
        console.log(color.blue("--------------"))
        console.log("Title : ", note.title);
        console.log("Body : ", note.body);
    })
}

module.exports = {
    addNote,
    readNote,
    removeNote,
    listNotes
}
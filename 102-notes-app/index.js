const yargs = require("yargs");
const { addNote, readNote, listNotes, removeNote } = require("./utils/notes")

yargs.command({
    command: "add",
    description: "to add new note",
    builder: {
        title: {
            type: "string",
            demandOption: true,
            description: "title for new note"
        },
        body: {
            type: "string",
            demandOption: true,
            description: "body for new note"
        }
    },
    handler: (args) => {
        const { title, body } = args;
        addNote(title, body)
    }
})


// read

yargs.command({
    command: "read",
    description: "to read one note",
    builder: {
        title: {
            type: "string",
            demandOption: true,
            description: "title for new note"
        }
    },
    handler: (args) => {
        const { title } = args;
        readNote(title)
    }
})
// remove

yargs.command({
    command: "remove",
    description: "to remove one note",
    builder: {
        title: {
            type: "string",
            demandOption: true,
            description: "title for new note"
        }
    },
    handler: (args) => {
        const { title } = args;
        removeNote(title)
    }
})


// list

yargs.command({
    command: "list",
    description: "to list down all notes",
    handler: () => {
        listNotes()
    }
})

yargs.parse()


// > node index.js add --title="New Title" --body="New Title Body"
// > node index.js read --title="Some Title"
// > node index.js remove --title="Some Title"
// > node index.js list

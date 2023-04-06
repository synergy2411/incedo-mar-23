const yargs = require("yargs");
const { addNote } = require("./utils/notes")

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
// remove
// list

yargs.parse()


// > node index.js add --title="New Title" --body="New Title Body"
// > node index.js read --title="Some Title"
// > node index.js remove --title="Some Title"
// > node index.js list

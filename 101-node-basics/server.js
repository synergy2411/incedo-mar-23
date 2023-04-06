// const { totalmem, freemem, cpus, arch } = require("os")

// console.log("Total Memeory : ", totalmem())
// console.log("Free Memeory : ", freemem())

// console.log("Number of CPU's : ", cpus().length)

// console.log("Architecture : ", arch());


// const { readFile, writeFile } = require("fs")

// readFile("./example.mp4", function (err, data) {
//     if (err) {
//         console.log(err)
//     }
//     console.log(data)
//     writeFile("./new-filename.mp4", data, () => { })
// })



// const content = readFileSync("./test1.md");

// console.log(content.toString());

// writeFileSync("test2.md", content)





// const { createServer } = require("http")
// const { readFileSync } = require("fs")

// const server = createServer((req, res) => {
//     console.log("URL : ", req.url)
//     console.log("Method : ", req.method)
//     const content = readFileSync("./home.html")
//     res.write(content)
//     res.end();
// })

// server.listen(9090, () => console.log("Server started at PORT : 9090"))




// const { sum, mul } = require("./utils/maths")
// const color = require("colors")

// console.log(color.green("Smm : ", sum(2, 4)))


const yargs = require("yargs")

yargs.command({
    command: "create",
    description: "Creating new command",
    builder: {
        title: {
            type: String,
            demandOption: true
        }
    },
    handler: (args) => {
        console.log("ARGS : ", args)
    }
})

yargs.parse();
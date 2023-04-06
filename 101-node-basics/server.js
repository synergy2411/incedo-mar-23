// const { totalmem, freemem, cpus, arch } = require("os")

// console.log("Total Memeory : ", totalmem())
// console.log("Free Memeory : ", freemem())

// console.log("Number of CPU's : ", cpus().length)

// console.log("Architecture : ", arch());


const { readFile, writeFile } = require("fs")

readFile("./example.mp4", function (err, data) {
    if (err) {
        console.log(err)
    }
    console.log(data)
    writeFile("./new-filename.mp4", data, () => { })
})



// const content = readFileSync("./test1.md");

// console.log(content.toString());

// writeFileSync("test2.md", content)



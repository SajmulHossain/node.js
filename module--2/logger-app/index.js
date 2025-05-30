const path = require('path');
const fs = require('fs');
const inputArguments = process.argv.slice(2);

const text = inputArguments.join(" ").concat("\n");

if(!text) {
    console.log("❌ There are not text!");
    console.log("Node index.js Hello world");
    process.exit(1);
}


// const filePath = __dirname + "\\log.txt";
const filePath = path.join(__dirname, 'log.txt');

fs.appendFile(filePath, text, { encoding: "utf-8" }, () => {
    console.log('Log added successfully!');
})

console.log(filePath);

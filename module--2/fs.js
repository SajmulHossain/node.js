// * data read write

const { fstat } = require("fs");


// ! file read____ signle thread |___|  -- I/O intensive ---> block -> not go to thread pool

// ! file read ____ single thread  > event loop > thread pool > task completed


const fs = require('fs');

console.log('Task 1');

const text = 'I will do something great by learning it.'

fs.writeFileSync("./index.txt", text);
console.log('task 2');

const data = fs.readFileSync("./index.txt", {encoding: "utf-8"})

console.log('task 3');
console.log(data);
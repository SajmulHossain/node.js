const fs = require("fs");

// console.log('task -1');

let text = 'node vai';
fs.readFile("./index.txt", { encoding: "utf-8" }, (err, data) => {
    if(err) {
        console.log('Something went wrong!', err);
        return;
    }

    text = data;
    // console.log(text, " inside callback");
});

// console.log(text);
// console.log('task- -2');


fs.writeFile("./index.txt", text, { encoding: "utf-8"}, (err) => {
    if (err) {
      console.log("Something went wrong!", err);
      return;
    }

    console.log("Wrote successfully!");
})
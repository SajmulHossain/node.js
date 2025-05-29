const EventEmitter = require("node:events");

class SchooBell extends EventEmitter {}

const schoolBell = new SchooBell();
schoolBell.on("ring", () => {
  console.log("Yahoo! Class has ended");
});

schoolBell.on("ring", () => {
  console.log("Oh no! Another class left.");
});

schoolBell.on('broken', () => {
    console.log(`Sad bell is broken!`);
})

schoolBell.emit("broken");


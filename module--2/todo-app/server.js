const http = require("http");

const data = [
    {
        title: "Prisma",
        body:  "learning node js"
    },
    {
        title: "typescipt",
        body: "learned typescripted"
    }
]

const server = http.createServer((req, res) => {
  // res.end("Welcome to todo app server");
  if (req.url === "/todos" && req.method === "GET") {
    res.writeHead(200, {
        // "content-type" : 'application/json',
        "content-type" : 'text',
        // "email": 'ph@gmail.com'
    })
    // res.setHeader("content-type", "text/plain");
    // res.setHeader("email", "ph@gmail.com");
    // res.statusCode = 201;
    
    // res.end(JSON.stringify(data));
    res.end('<h1>Hello vai</h1>' + ` <br> <h2>Hello world</h2>`);
  } else if (req.url === "/todos/create-todo" && req.method === "POST") {
    res.end("Todo created");
  } else {
    res.end("Route not found");
  }
});

server.listen(3000, "127.0.0.1", () => {
  console.log("Server is running on PORT: 3000");
});

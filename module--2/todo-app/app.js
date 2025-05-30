const http = require("http");
const path = require("path");
const fs = require("fs");

const filePath = path.join(__dirname, "./db/todo.json");

const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);
  const pathname = url.pathname;

  if (pathname === "/todos" && req.method === "GET") {
    const data = fs.readFileSync(filePath, { encoding: "utf-8" });
    res.writeHead(200, {
      "content-type": "application/json",
    });
    res.end(data);
  } else if (pathname === "/todos/create-todo" && req.method === "POST") {
    let data = "";

    req.on("data", (chunk) => {
      data += chunk;
    });

    req.on("end", () => {
      const { title, body } = JSON.parse(data);

      const createdAt = new Date().toLocaleString();

      const todoJson = fs.readFileSync(filePath, { encoding: "utf-8" });
      const allTodos = JSON.parse(todoJson);

      allTodos.push({ title, body, createdAt });

      fs.writeFileSync(filePath, JSON.stringify(allTodos, null, 2), {
        encoding: "utf-8",
      });

      res.end(JSON.stringify({ title, body, createdAt }));
    });
  } else if (pathname === "/todo" && req.method === "GET") {
    const title = url.searchParams.get("title");

    const allTodos = fs.readFileSync(filePath, { encoding: "utf-8" });
    const data = JSON.parse(allTodos);

    const singleData = data.find((d) => d.title === title);

    res.end(JSON.stringify(singleData));
  } else if (pathname === "/todo/update-todo" && req.method === "PATCH") {
    const title = url.searchParams.get("title");
    let data = "";

    req.on("data", (chunk) => {
      data += chunk;
    });

    req.on("end", () => {
      const { body } = JSON.parse(data);

      const todoJson = fs.readFileSync(filePath, { encoding: "utf-8" });
      const allTodos = JSON.parse(todoJson);

      const index = allTodos.findIndex((todo) => todo.title === title);
      allTodos[index].body = body;

      fs.writeFileSync(filePath, JSON.stringify(allTodos, null, 2), {
        encoding: "utf-8",
      });

      res.end(JSON.stringify({ title, body }));
    });
  } else if (pathname === "/todo/delete-todo") {
    const title = url.searchParams.get("title");

    const plainTodo = fs.readFileSync(filePath, { encoding: "utf-8" });
    const todos = JSON.parse(plainTodo);

    const newArr = todos.filter((todo) => todo.title !== title);

    fs.writeFileSync(filePath, JSON.stringify(newArr, null, 2), {
      encoding: "utf-8",
    });
    res.end(JSON.stringify(todos.find((todo) => todo.title === title)));
  } else {
    res.end("Route not found");
  }
});

server.listen(3000, "127.0.0.1", () => {
  console.log("Server is running on PORT: 3000");
});

import { createServer, Server } from "http";
import { routeHandler } from "./routes/routeHandler";

const server:Server = createServer((req, res) => {
     routeHandler(req, res);
}) 

server.listen(3000, () => {
    console.log('Node js server is running on port:3000');
})
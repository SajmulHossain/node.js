import { IncomingMessage, ServerResponse } from "http";

export const routeHandler = async (
  req: IncomingMessage,
  res: ServerResponse
) => {
  const url = req.url;

  if (url === "/" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Welcome to my server");
  }
};

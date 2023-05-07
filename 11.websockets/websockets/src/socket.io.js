import http from "node:http";
import { Server } from "socket.io";
import registerProductHandlers from "./events/product.event.js";

export default function createSocketServer(app, Products) {
  const server = http.createServer(app);
  const io = new Server(server);

  io.on("connection", (socket) => {
    registerProductHandlers(io, socket, Products);
  });

  return server;
}

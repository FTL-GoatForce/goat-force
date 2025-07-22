import { Server } from "socket.io";

let io;
export const initializeWebSocket = (server) => {
  io = new Server(server, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"],
    },
  });
  console.log("WebSocket server initialized");

  io.on("connection", (socket) => {
    console.log("Client WebSocket connection");
    socket.on("disconnect", (reason) => {
      console.log("Client disconnected:", reason);
    });
  });
  return io;
};

export const getSocketInstance = () => {
  if (!io) {
    throw new Error("WebSocket server is not initialized");
  }
  return io;
};

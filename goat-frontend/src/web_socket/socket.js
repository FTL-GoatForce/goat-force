import { io } from "socket.io-client";
const API_URL = import.meta.env.VITE_API_URL;
// Create socket connection configuration
const socket = io(`${API_URL}`, {
  autoConnect: true,
  reconnection: true,
  reconnectionDelay: 1000,
  reconnectionAttempts: 5,
  timeout: 20000,
});

// Add connection event listeners for debugging
socket.on("connect", () => {
  console.log("WebSocket connected to server");
});

socket.on("disconnect", (reason) => {
  console.log("WebSocket disconnected:", reason);
});

socket.on("connect_error", (error) => {
  console.error("WebSocket connection error:", error);
});

export default socket;

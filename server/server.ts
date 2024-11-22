// import { Elysia } from "elysia";
import { Server } from "socket.io";
import { createServer } from "node:http";

const server = createServer();
const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000", // Allow Next.js dev server
        methods: ["GET", "POST"],
    },
});

io.on("connection", (socket) => {
    console.log("a user connected");

    socket.on("disconnect", () => {
        console.log("user disconnected");
    });

    socket.on("hello", (text) => {
        console.log(text);
    });
});

server.listen(
    {
        host: "localhost",
        port: 3002,
    },
    () => {
        console.log("Server is running on port 3002");
    },
);

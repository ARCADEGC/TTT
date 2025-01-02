import { Server } from "socket.io";
import { createServer } from "node:http";
import { onDisconnect, onHello } from "@/server/functions";

const server = createServer();
const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000", // Allow Next.js dev server
        methods: ["GET", "POST"],
    },
});

io.on("connection", (socket) => {
    socket.on("disconnect", onDisconnect);
    socket.on("hello", onHello);

    socket.on("join-room", async (roomName: string, callback: (response: string) => void) => {
        socket.rooms.forEach((room) => {
            socket.leave(room);
        });

        const sockets = await io.in(roomName).fetchSockets();
        const users = sockets.map((socket) => socket.id);

        socket.join(roomName);

        socket.broadcast
            .to(roomName)
            .emit("message", `${socket.id} joined room  ${roomName} together with ${users.join(", ")}`);

        console.log(`User ${socket.id} joined room ${roomName}`);

        callback(roomName);
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

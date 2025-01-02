import { Server } from "socket.io";
import { createServer } from "node:http";
import { onDisconnect, onHello } from "@/server/functions";
import arcjet, { shield, tokenBucket } from "@arcjet/node";
import { Logger } from "next-axiom";
import { TJoinRoomCallback } from "@/types/room";

const aj = arcjet({
    key: process.env.ARCJET_KEY!,
    characteristics: ["socket"],
    rules: [
        tokenBucket({
            mode: "LIVE",
            refillRate: 1,
            interval: 6,
            capacity: 5,
        }),
        shield({
            mode: "LIVE",
        }),
    ],
});

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

    socket.on("join-room", async (roomName: string, callback: (response: TJoinRoomCallback) => void) => {
        const log = new Logger({ source: "Join Room" });
        const decision = await aj.protect(socket, { requested: 1, socket: socket.id });

        if (decision.isDenied()) {
            log.info(JSON.stringify(decision.reason));
            callback({ success: false, errorMessage: "You can't join" });
            return;
        }

        if (decision.isErrored()) {
            log.error(JSON.stringify(decision.reason));
            callback({ success: false, errorMessage: "Something went wrong" });
            return;
        }

        if (decision.isChallenged()) {
            log.warn(JSON.stringify(decision.reason));
            callback({ success: false, errorMessage: "You can't join" });
            return;
        }

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

        callback({ success: true, roomName });
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

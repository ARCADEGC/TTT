"use client";

import { io } from "socket.io-client";

export const socket = io("localhost:3002", {
    transports: ["websocket", "polling"],
    autoConnect: true,
});

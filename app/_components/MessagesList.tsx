"use client";

import { socket } from "@/lib/socket";
import { useEffect, useState } from "react";

export function MessagesList() {
    const [messages, setMessages] = useState<string[]>([]);

    useEffect(() => {
        socket.on("message", (message: string) => {
            setMessages((prev) => [...prev, message]);
        });

        return () => {
            socket.off("message");
        };
    }, []);

    return (
        <ul className="min-h-12 w-full rounded-lg border p-4 shadow">
            {messages.map((message, index) => (
                <li key={index}>{message}</li>
            ))}
        </ul>
    );
}

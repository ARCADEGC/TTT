"use client";

import { useEffect, useState } from "react";
import { socket } from "@/lib/socket";
import { Button } from "@/components/ui/button";
import Link from "next/link";

import { HowlButton } from "@/components/HowlButton";
import { RoomJoinForm } from "@/components/RoomJoinForm";

export default function Home() {
    const [isConnected, setIsConnected] = useState(false);
    const [messages, setMessages] = useState<string[]>([]);

    useEffect(() => {
        if (socket.connected) {
            onConnect();
        }

        function onConnect() {
            setIsConnected(true);
        }

        function onDisconnect() {
            setIsConnected(false);
        }

        socket.on("connect", onConnect);
        socket.on("disconnect", onDisconnect);

        socket.on("message", (message: string) => {
            setMessages((prev) => [...prev, message]);
        });

        return () => {
            socket.off("connect", onConnect);
            socket.off("disconnect", onDisconnect);
        };
    }, []);

    function handleOnClick() {
        socket.emit("hello", "world");
    }

    return (
        <div>
            <p>Status: {isConnected ? "connected" : "disconnected"}</p>

            <Button
                onClick={handleOnClick}
                asChild
            >
                <Link href="/test">click</Link>
            </Button>

            <HowlButton />

            <RoomJoinForm />

            <div>
                <ul>
                    {messages.map((message, index) => (
                        <li key={index}>{message}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

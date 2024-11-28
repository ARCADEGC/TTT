"use client";

import { useEffect, useState } from "react";
import { socket } from "@/lib/socket";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
    const [isConnected, setIsConnected] = useState(false);
    const [transport, setTransport] = useState("N/A");

    useEffect(() => {
        if (socket.connected) {
            onConnect();
        }

        function onConnect() {
            setIsConnected(true);
            setTransport(socket.io.engine.transport.name);

            socket.io.engine.on("upgrade", (transport) => {
                setTransport(transport.name);
            });
        }

        function onDisconnect() {
            setIsConnected(false);
            setTransport("N/A");
        }

        socket.on("connect", onConnect);
        socket.on("disconnect", onDisconnect);

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
            <p>Transport: {transport}</p>

            <Button
                onClick={handleOnClick}
                asChild
            >
                <Link href="/test">click</Link>
            </Button>
        </div>
    );
}

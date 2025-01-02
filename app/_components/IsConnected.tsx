"use client";

import { socket } from "@/lib/socket";
import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export function IsConnected() {
    const [isConnected, setIsConnected] = useState(false);

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

        return () => {
            socket.off("connect", onConnect);
            socket.off("disconnect", onDisconnect);
        };
    }, []);

    return (
        <Badge
            variant={"default"}
            className={cn("w-fit hover:text-white", isConnected ? "bg-green-300 text-green-900" : "bg-red-500")}
        >
            {isConnected ? "Connected" : "Disconnected"}
        </Badge>
    );
}

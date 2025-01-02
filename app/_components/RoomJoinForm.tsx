"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { socket } from "@/lib/socket";
import { toast } from "sonner";
import { useArcjetJoinRoom } from "@/actions/joinRoom";

export function RoomJoinForm() {
    async function joinRoomOnSubmit(data: any) {
        if (!socket.connected) {
            toast.error("You are not connected");
            return;
        }

        const isAllowed = await useArcjetJoinRoom();

        if (!isAllowed) {
            toast.error("You can't join");
            return;
        }

        socket.emit("join-room", data.roomName, (roomName: string) => {
            toast(
                <p className="text-muted-foreground">
                    You joined room <code className="text-white">{roomName}</code>
                </p>,
            );
        });
    }

    return (
        <form
            action={joinRoomOnSubmit}
            className="flex max-w-prose gap-4"
        >
            <Input
                type="text"
                name="roomName"
                placeholder="Room Name"
            />
            <Button type="submit">Join Room</Button>
        </form>
    );
}

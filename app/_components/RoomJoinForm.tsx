"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { socket } from "@/lib/socket";
import { toast } from "sonner";
import { TJoinRoomCallback } from "@/types/room";

export function RoomJoinForm() {
    async function joinRoomOnSubmit(data: any) {
        if (!socket.connected) {
            toast.error("You are not connected");
            return;
        }

        socket.emit("join-room", data.roomName, (callback: TJoinRoomCallback) => {
            if (!callback.success) {
                toast.error(callback.errorMessage);
                return;
            }

            toast(
                <p className="text-muted-foreground">
                    You joined room <code className="text-white">{callback.roomName}</code>
                </p>,
            );
        });
    }

    return (
        <form
            action={joinRoomOnSubmit}
            className="ml-auto flex max-w-prose gap-4"
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

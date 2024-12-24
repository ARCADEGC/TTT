import { Input } from "@/components/ui/input";
import Form from "next/form";
import { Button } from "@/components/ui/button";
import { socket } from "@/lib/socket";
import { toast } from "sonner";
import { useArcjetJoinRoom } from "@/actions/joinRoom";

export function RoomJoinForm() {
    async function joinRoomOnSubmit(data: any) {
        const isAllowed = await useArcjetJoinRoom();

        if (!isAllowed) {
            toast.error("You are not allowed to join");
            return;
        }

        if (!socket.connected) {
            toast.error("You are not connected");
            return;
        }

        socket.emit("join-room", data.roomName, (res: string) =>
            toast(
                <p className="text-muted-foreground">
                    You joined room <code className="text-white">{res}</code>
                </p>,
            ),
        );
    }

    return (
        <Form
            action={joinRoomOnSubmit}
            className="flex max-w-prose gap-4"
        >
            <Input
                type="text"
                name="roomName"
                placeholder="Room Name"
            />
            <Button type="submit">Join Room</Button>
        </Form>
    );
}

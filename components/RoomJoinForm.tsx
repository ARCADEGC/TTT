import { Input } from "@/components/ui/input";
import Form from "next/form";
import { Button } from "@/components/ui/button";
import { socket } from "@/lib/socket";
import { toast } from "sonner";

export function RoomJoinForm() {
    function joinRoomOnSubmit(data: any) {
        socket.connected ?
            socket.emit("join-room", data.get("roomName"), (res: string) =>
                toast(
                    <p className="text-muted-foreground">
                        You joined room <code className="text-white">{res}</code>
                    </p>,
                ),
            )
        :   toast(<p>You are not connected</p>);
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

import { HowlButton } from "@/app/_components/HowlButton";
import { RoomJoinForm } from "@/app/_components/RoomJoinForm";
import { TestButton } from "@/app/_components/TestButton";
import { IsConnected } from "@/app/_components/IsConnected";
import { MessagesList } from "@/app/_components/MessagesList";

export default function Home() {
    return (
        <div className="mx-auto my-12 grid max-w-prose gap-8">
            <TestButton />

            <HowlButton />

            <IsConnected />
            <MessagesList />

            <RoomJoinForm />
        </div>
    );
}

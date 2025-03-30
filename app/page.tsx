"use client";

import { HowlButton } from "@/app/_components/HowlButton";
import { RoomJoinForm } from "@/app/_components/RoomJoinForm";
import { TestButton } from "@/app/_components/TestButton";
import { IsConnected } from "@/app/_components/IsConnected";
import { MessagesList } from "@/app/_components/MessagesList";
import { motion } from "framer-motion";
import { Typography } from "@/components/ui/Typography";
import { Train } from "lucide-react";

export default function Home() {
    return (
        <div className="grid h-full gap-8">
            <motion.header
                initial={{ top: "-100%" }}
                animate={{ top: "0%" }}
                className="relative flex items-center justify-center border-b p-4"
            >
                <div className="flex w-full max-w-7xl flex-wrap items-center justify-between gap-16">
                    <Typography
                        variant="h1"
                        as="h2"
                        className="flex items-end gap-2 tracking-wider"
                    >
                        <Train className="size-12 stroke-2" />
                        TTT
                    </Typography>

                    <div className="flex items-center gap-4">
                        <RoomJoinForm />
                    </div>
                </div>
            </motion.header>

            <motion.main
                initial={{ opacity: "0%" }}
                animate={{ opacity: "100%" }}
                className="relative mx-auto flex min-h-[calc(100svh_-_10rem)] w-full max-w-7xl flex-col justify-center gap-4 p-4"
            >
                <Typography variant="h1">Welcome to TTT</Typography>
                <Typography variant="lead">
                    TTT is a text-to-text application that allows you to chat with other users in real-time.
                </Typography>
                <Typography variant="lead">To get started, enter a room name and join the chat.</Typography>

                <MessagesList />
            </motion.main>

            <motion.footer
                initial={{ bottom: "-100%", opacity: 0 }}
                animate={{ bottom: "0%", opacity: 1 }}
                className="relative mt-auto grid items-center gap-8 border-t p-4"
            >
                <div className="mx-auto grid w-full max-w-7xl gap-2">
                    <Typography
                        variant="h2"
                        as="h6"
                        className="border-b-0"
                    >
                        Debug Controller
                    </Typography>

                    <IsConnected />

                    <TestButton />

                    <HowlButton />
                </div>
            </motion.footer>
        </div>
    );
}

"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePostHog } from "posthog-js/react";

export default function Home() {
    const posthog = usePostHog();

    function throwError() {
        throw new Error("This is an error");
    }

    return (
        <>
            <Button
                onClick={() => posthog.capture("test")}
                asChild
            >
                <Link href="/">back</Link>
            </Button>
            <Button
                onClick={throwError}
                variant={"destructive"}
            >
                Throw
            </Button>
        </>
    );
}

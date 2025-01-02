"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export function TestButton() {
    function handleOnClick() {
        console.log("hello");
    }

    return (
        <Button
            onClick={handleOnClick}
            asChild
        >
            <Link href="/test">click</Link>
        </Button>
    );
}

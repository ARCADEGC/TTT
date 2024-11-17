"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect, useState } from "react";

export default function Home() {
    const [state, setState] = useState<number | null>(null);

    useEffect(() => {
        setState(Math.round(Math.random() * 100) / 100);
    }, [setState]);

    return (
        <main className="p-8">
            <h1 className="text-7xl font-black">Card Game</h1>

            <Card className="grid w-64 [aspect-ratio:2.5_/_3.5]">
                <CardContent className="my-auto text-center">
                    <span className="text-6xl">{state}</span>
                </CardContent>
                <CardHeader className="mb-12 mt-auto text-center">
                    <CardTitle className="text-3xl font-bold">Role</CardTitle>
                    <CardDescription className="tracking-wide">Role description</CardDescription>
                </CardHeader>
            </Card>
        </main>
    );
}

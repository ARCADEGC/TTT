"use server";

import arcjet, { request, shield, tokenBucket } from "@arcjet/next";

const aj = arcjet({
    key: process.env.ARCJET_KEY!,
    rules: [
        tokenBucket({
            mode: "LIVE",
            capacity: 5,
            interval: 6,
            refillRate: 1,
        }),
        shield({
            mode: "LIVE",
        }),
    ],
    characteristics: ["ip.src"],
});

export async function useArcjetJoinRoom() {
    const req = await request();
    const decision = await aj.protect(req, { requested: 1 });

    if (decision.isErrored()) {
        console.warn(decision.reason.message); // TODO: Add Axiom
    }

    return decision.isAllowed();
}

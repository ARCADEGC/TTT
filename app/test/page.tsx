"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePostHog } from "posthog-js/react";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { useLogger } from "next-axiom";

export default function Home() {
    const posthog = usePostHog();
    const log = useLogger();

    function throwError() {
        throw new Error("error tested");
    }

    return (
        <>
            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button
                            onClick={() => {
                                posthog.capture("test");
                                log.warn("back");
                            }}
                            asChild
                        >
                            <Link href="/">back</Link>
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>PostHog Capture "test" & Axiom log "back"</p>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>

            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button
                            onClick={throwError}
                            variant={"destructive"}
                        >
                            Throw
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>Sentry throw "error tested"</p>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
        </>
    );
}

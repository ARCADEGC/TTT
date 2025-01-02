"use client";

import { Howl } from "howler";

import { Button } from "@/components/ui/button";

export function HowlButton() {
    const buttonOnClickAudio = new Howl({
        src: ["/audio/audioOnClickTest.wav"],
    });

    const buttonOnHoverAudio = new Howl({
        src: ["/audio/audioOnHoverTest.wav"],
    });

    function handleOnClick() {
        buttonOnClickAudio.play();
    }

    function handleOnHover() {
        buttonOnHoverAudio.play();
    }

    return (
        <Button
            onClick={handleOnClick}
            onMouseEnter={handleOnHover}
            variant={"outline"}
        >
            Play
        </Button>
    );
}

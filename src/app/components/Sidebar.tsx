'use client';

import { Button, Card, CardBody, CardHeader, Chip, CircularProgress, Divider, Image, Tooltip } from "@nextui-org/react";
import { Icon } from '@iconify/react';

export default function Hero() {
    return (
        <div className="h-screen w-1/4 text-white bg-zinc-100 p-10 border-r-2 border-zinc-600 flex flex-col justify-center">

            <p className="text-4xl text-zinc-900 font-bold">Emerson Hicks</p>

            <div className="flex mt-4 gap-4 justify-left">
                <Tooltip showArrow={true} content="@emerson on Discord" placement="bottom">
                    <Icon className="text-zinc-900" width={26} icon="ic:baseline-discord" />
                </Tooltip>
                <Tooltip showArrow={true} content="@emerson-xyz on GitHub" placement="bottom">
                    <Icon className="text-zinc-900" width={26} icon="mdi:github" />
                </Tooltip>
                <Tooltip showArrow={true} content="Linkedin profile" placement="bottom">
                    <Icon className="text-zinc-900" width={26} icon="mdi:linkedin" />
                </Tooltip>
                <Tooltip showArrow={true} content="Contact me" placement="bottom">
                    <Icon className="text-zinc-900" width={26} icon="mdi:email" />
                </Tooltip>
            </div>

            <Card isPressable className="mt-4">
                <CardBody>
                    <p className="text-zinc-900">Hey, I'm Emerson! 👋</p>
                    <p className="text-zinc-900 ">I'm currently in school for Computer Science.</p>
                    <p className="text-zinc-900 ">I enjoy doing freelance development and building out client-side applications. </p>
                </CardBody>
            </Card>

        </div>
    )
}
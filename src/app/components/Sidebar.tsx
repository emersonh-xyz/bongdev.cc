'use client';

import { Button, Card, CardBody, CardHeader, Chip, CircularProgress, Divider, Image, Link, Skeleton, Tooltip } from "@nextui-org/react";
import { Icon } from '@iconify/react';
import SpotifyCard from "./Cards/SpotifyCard";
import useSWR from 'swr'
import { useEffect, useState } from "react";
import { ThemeSwitcher } from "./Utils/ThemeSwitcher";
import { useTheme } from "next-themes";

export default function Sidebar() {

    const fetcher = (url: any) => fetch(url).then((res) => res.json())

    const { data } = useSWR('/api/spotify', fetcher)

    const { theme, setTheme } = useTheme()

    return (


        <div className="sm:flex sm:flex-col sm:w-1/4 w-fit justify-center h-full bg-zinc-100 p-10 border-r-1 light:border-zinc-200 dark:bg-zinc-800 dark:border-zinc-600 ">
            <Tooltip showArrow={true} content="Click for a surprise">
                <Image
                    onClick={() => { theme === "light" ? setTheme('dark') : setTheme('light') }}
                    src="./bongo.png"

                />
            </Tooltip>
            <p className="text-4xl light:text-zinc-900 font-bold text-center sm:text-left">Emerson Hicks</p>
            <div className="flex mt-4 gap-4 sm:justify-start justify-center">
                <Tooltip showArrow={true} content="@emerson on Discord" placement="bottom">
                    <Icon className="text-zinc-900 dark:text-zinc-50" width={26} icon="ic:baseline-discord" />
                </Tooltip>
                <Tooltip showArrow={true} content="@emerson-xyz on GitHub" placement="bottom">
                    <Link target="_blank" href="https://github.com/emersonh-xyz">
                        <Icon className="text-zinc-900 dark:text-zinc-50" width={26} icon="mdi:github" />
                    </Link>
                </Tooltip>
                <Tooltip showArrow={true} content="Linkedin profile" placement="bottom">
                    <Link target="_blank" href="https://www.linkedin.com/in/emerson-hicks-2975a1220/">
                        <Icon className="text-zinc-900 dark:text-zinc-50" width={26} icon="mdi:linkedin" />
                    </Link>
                </Tooltip>
                <Tooltip showArrow={true} content="Contact me" placement="bottom">
                    <Icon className="text-zinc-900 dark:text-zinc-50" width={26} icon="mdi:email" />
                </Tooltip>
            </div>
            <Card shadow="sm" className="mt-4">
                <CardBody className="sm:text-xs sm:text-left text-sm text-center">
                    <p className="text-zinc-900 dark:text-zinc-50">Hey, I'm Emerson! 👋</p>
                    <p className="text-zinc-900 dark:text-zinc-50">I enjoy doing freelance development and building out client-side applications. </p>
                </CardBody>
            </Card>
            <div className="mt-4 flex justify-center sm:justify-start">
                <SpotifyCard props={data} />
            </div>
        </div >
    )
}
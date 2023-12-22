'use client';

import { Icon } from "@iconify/react/dist/iconify.js";
import { Button, Card, CardBody, CardFooter, CardHeader, Chip, Divider, Image, Link, Skeleton, Tooltip } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export default function ProjectCard({ props }: any) {

    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        setLoaded(true)
    },)

    if (props === undefined) {
        props = {
            title: "test",
            content: "Developer and lead designer of web application for all-in-one SMS number provider.",
            link: "simple-sms.io",
            logo: "https://pbs.twimg.com/profile_images/1620568363108892672/Cq1o18fU_400x400.png"
        }
    }

    return (
        <Card className="max-w-[460px]">
            <CardHeader className="flex gap-3">

                {props.logo ?
                    <Image
                        alt="nextui logo"
                        height={40}
                        radius="sm"
                        src={props.logo}
                        width={40}
                    />
                    :
                    <Icon width={40} icon={"mdi:picture-in-picture-bottom-right"} />
                }

                <div className="flex flex-col">
                    <p className="text-md">{props.title}</p>
                    <div className="flex gap-1 justify-left">
                        {props.link &&
                            <Tooltip showArrow={true} content="View application" placement="bottom">
                                <Link target="_blank" href={props.link}>
                                    <Icon className="text-zinc-600 dark:text-zinc-50" width={22} icon="mdi:link" />
                                </Link>
                            </Tooltip>
                        }
                        {props.github &&
                            <Tooltip showArrow={true} content="Open on GitHub" placement="bottom">
                                <Link target="_blank" href={props.github}>
                                    <Icon className="text-zinc-600 dark:text-zinc-50" width={22} icon="mdi:github" />
                                </Link>
                            </Tooltip>
                        }
                    </div>
                </div>
            </CardHeader>
            <Divider />
            <CardBody>
                <p>{props.content}</p>
            </CardBody>

            <Divider />
            <CardFooter className="sm:h-24 flex items-start">
                <div className="flex flex-wrap gap-2">
                    {props.title === "Brevity" && <Chip color="primary">⭐️ 2nd Place Winner HackNC 2022</Chip>}
                    {props.skills.map((skill: any, key: any) => {
                        return (
                            <Chip key={key}>{skill}</Chip>
                        )
                    })}
                </div>
            </CardFooter>
        </Card >
    )
}
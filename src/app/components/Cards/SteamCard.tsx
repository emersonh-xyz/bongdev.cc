'use client';

import { Icon } from "@iconify/react/dist/iconify.js";
import { Card, CardBody, Divider, Image, Link, Progress, Skeleton } from "@nextui-org/react";
import { useEffect, useState } from "react";
import useSWR from 'swr'



export default function SteamCard() {

    const fetcher = (url: any) => fetch(url).then((res) => res.json())
    const { data, error, isLoading } = useSWR('/api/steam', fetcher)

    if (error) return <div>failed to load</div>
    if (isLoading) return <Skeleton><Card><CardBody>loading...</CardBody></Card></Skeleton>
    return (
        <div>
            {data.steam.personastate === "Offline" ?

                <Card className="w-72" isPressable >
                    <CardBody className="p-2">
                        <div className="flex items-center">
                            <Icon className="" icon="mdi:steam" width={40} />
                            <div className="ml-2">
                                <div className="flex items-center ">
                                    <p className="text-sm ml-1">Not playing any games</p>
                                </div>
                                <p className="text-sm ml-1">Offline</p>
                            </div>
                        </div>
                    </CardBody>
                </Card>
                :
                <Link target="_blank" href={data.steam.getprofileUrl}>
                    <Card className="w-72" isPressable >
                        <CardBody className="p-2">
                            <div className="flex items-center">
                                <Icon className="" icon="mdi:steam" width={40} />
                                <div className="ml-2">
                                    <div className="flex items-center ">
                                        <p className="text-sm ml-1">{data.steam.getStatus}</p>
                                    </div>

                                    {!data.steam.getGames ?
                                        <p className="text-sm ml-1">Not playing any games</p>
                                        :
                                        <p className="text-sm ml-1">{data.steam.getGames} 🎮</p>
                                    }
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </Link>
            }
        </div>
    )
}
import { Icon } from "@iconify/react/dist/iconify.js";
import { Card, CardBody, Divider, Image, Link, Progress, Skeleton } from "@nextui-org/react";
import { useEffect, useState } from "react";
import useSWR from 'swr'

const fetcher = (url: any) => fetch(url).then((res) => res.json())

export default function SteamCard({ props }: any) {

    const { data, error, isLoading } = useSWR('/api/steam', fetcher)

    if (error) return <div>failed to load</div>
    if (isLoading) return <div>loading...</div>
    return (

        <Link target="_blank" href={data.steam.getprofileUrl}>
            <Card shadow="sm" isPressable >
                <CardBody className="p-2">
                    <div className="flex items-center">
                        <Image
                            alt="Album cover"
                            className="object-cover"
                            shadow="md"
                            src={data.steam.getAvatar}
                            width="50px"
                        />
                        <div className="ml-2">
                            <div className="flex items-center ">
                                <Icon width={15} icon={"mdi:steam"} /><p className="text-sm ml-1">{data.steam.getStatus}</p>
                            </div>
                            {data.steam.getGames ?
                                <p className="text-sm ml-1">{data.steam.getGames}</p>
                                :
                                <p className="text-sm ">{data.steam.getStatus === "Offline" && "😴"}😃</p>
                            }

                        </div>
                    </div>
                </CardBody>
            </Card>
        </Link>
    )
}
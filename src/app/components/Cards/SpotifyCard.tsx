import { Icon } from "@iconify/react/dist/iconify.js";
import { Card, CardBody, Divider, Image, Link, Progress, Skeleton } from "@nextui-org/react";
import { useEffect, useState } from "react";
import useSWR from 'swr'

export default function SpotifyCard({ props }: any) {

    const [songProgress, setSongProgress] = useState(0);

    const fetcher = (url: any) => fetch(url).then((res) => res.json())
    const { data, error, isLoading } = useSWR('/api/spotify', fetcher)

    useEffect(() => {

        let interval: any;

        if (data?.data) {
            setSongProgress(data.data.progress);
            if (data.data.isPlaying) {
                interval = setInterval(() => {
                    setSongProgress((x) => x + 1000)
                }, 1000)
            }
        }

        return () => clearInterval(interval);
    }, [data])

    if (error) return <Skeleton><Card><CardBody>loading...</CardBody></Card></Skeleton>
    if (isLoading) return <Skeleton><Card><CardBody>loading...</CardBody></Card></Skeleton>
    return (
        <div>
            {!data.data?.isPlaying ?
                <Card isPressable >
                    <CardBody className="p-2">
                        <div className="flex items-center">
                            <Icon className="text-[#1DB954]" icon="mdi:spotify" width={40} />
                            <div className="ml-2">
                                <div className="flex items-center ">
                                    <Icon width={15} icon={"mdi:mute"} /><p className="text-sm ml-1">Currently listening to nothing</p>
                                </div>

                            </div>
                        </div>
                    </CardBody>
                </Card>
                :
                <Link target="_blank" href={data.songUrl} >
                    <Card shadow="sm" isPressable >
                        <CardBody className="p-2">
                            <div className="flex items-center">
                                <Image
                                    alt="Album cover"
                                    className="object-cover"
                                    shadow="md"
                                    src={data.data.albumImageUrl}
                                    width="50px"
                                />
                                <div className="ml-2">
                                    <div className="flex items-center ">
                                        <Icon width={15} icon={"mdi:spotify"} /><p className="text-sm ml-1">Listening to Spotify</p>
                                    </div>
                                    <p className="text-sm ml-1">{data.data.title} - {data.data.artist[0].name}</p>
                                    <Progress color="success" className="mt-1" size="sm" aria-label="Loading..." value={songProgress} maxValue={data.data.duration} />
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </Link>
            }
        </div>

    )
}
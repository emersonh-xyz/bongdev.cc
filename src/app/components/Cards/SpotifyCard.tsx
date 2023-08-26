import { Icon } from "@iconify/react/dist/iconify.js";
import { Card, CardBody, Divider, Image, Link, Progress, Skeleton } from "@nextui-org/react";
import { useEffect, useState } from "react";

export default function SpotifyCard({ props }: any) {

    const [songProgress, setSongProgress] = useState(0);

    useEffect(() => {

        let interval: any;

        if (props?.data !== undefined) {
            setSongProgress(props.data.progress);

            if (props?.data.isPlaying) {
                interval = setInterval(() => {
                    setSongProgress((x) => x + 1000)
                }, 1000)
            }
        }

        return () => clearInterval(interval);
    }, [props])

    return (

        <div>

            {props?.data ?

                <Link target="_blank" href={props?.data.songUrl} >
                    <Card shadow="sm" isPressable >
                        <CardBody className="p-2">
                            <div className="flex items-center">
                                <Image
                                    alt="Album cover"
                                    className="object-cover"
                                    shadow="md"
                                    src={props?.data.albumImageUrl}
                                    width="50px"
                                />
                                <div className="ml-2">
                                    <div className="flex items-center ">
                                        <Icon width={15} icon={"mdi:spotify"} /><p className="text-sm ml-1">Listening to Spotify</p>
                                    </div>

                                    <p className="text-sm ml-1">{props?.data.title} - {props?.data.artist[0].name}</p>
                                    <Progress color="success" className="mt-1" size="sm" aria-label="Loading..." value={songProgress} maxValue={props?.data.duration} />
                                </div>

                            </div>
                        </CardBody>
                    </Card>
                </Link>
                :

                <Card isPressable >

                    <CardBody className="p-2">
                        <div className="flex items-center">
                            <Icon icon="mdi:spotify" width={40} />
                            <div className="ml-2">
                                <div className="flex items-center ">
                                    <Icon width={15} icon={"mdi:mute"} /><p className="text-sm ml-1">Not listening to anything</p>
                                </div>
                                <p className="text-sm ml-1">Focused...</p>
                            </div>
                        </div>
                    </CardBody>

                </Card>

            }
        </div>

    )
}
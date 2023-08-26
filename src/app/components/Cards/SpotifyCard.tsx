import { Icon } from "@iconify/react/dist/iconify.js";
import { Card, CardBody, Divider, Image, Link, Progress } from "@nextui-org/react";

export default function SpotifyCard({ props }: any) {
    return (
        <Link target="_blank" href={props?.data.songUrl} >
            <Card isPressable >
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
                        </div>



                    </div>
                </CardBody>
            </Card>
        </Link>
    )
}
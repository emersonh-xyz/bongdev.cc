import { Icon } from "@iconify/react/dist/iconify.js";
import { Button, Card, CardBody, CardFooter, CardHeader, Chip, Divider, Image, Link, Tooltip } from "@nextui-org/react";

export default function ProjectCard({ props }: any) {

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
                <Image
                    alt="nextui logo"
                    height={40}
                    radius="sm"
                    src={props.logo}
                    width={40}
                />
                <div className="flex flex-col">
                    <p className="text-md">{props.title}</p>
                    <p className="text-small text-default-500">{props.link}</p>
                </div>

                <div className="flex mt-4 gap-4 justify-left">
                    <Tooltip showArrow={true} content="Contact me" placement="bottom">
                        <Icon className="text-zinc-600" width={22} icon="mdi:github" />
                    </Tooltip>
                </div>

            </CardHeader>
            <Divider />
            <CardBody>
                <p>{props.content}</p>

            </CardBody>
            <Divider />
            <CardFooter>
                <div className="flex gap-2">
                    <Chip variant="shadow">Next.js</Chip>
                    <Chip variant="flat">Tailwind CSS</Chip>
                    <Chip variant="shadow" >Node.js</Chip>
                    <Chip variant="flat">Mongo</Chip>
                </div>
            </CardFooter>
        </Card>
    )
}
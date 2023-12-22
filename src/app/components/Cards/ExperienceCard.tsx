'use client';

import { Card, CardBody, CardHeader, Divider, Image } from "@nextui-org/react";

export default function ExperienceCard({ props }: any) {
    return (
        <Card className="mt-4 max-w-[460px] h-auto">
            <CardHeader className="flex gap-2 justify-start items-start">
                <Image
                    alt="nextui logo"
                    height={40}
                    radius="sm"
                    src={props.icon}
                    width={40}
                />
                <div className='flex-col'>
                    <p className="font-bold md:text-md text-xs">{props.company}</p>
                    <p className="text-xs">{props.role}</p>
                </div>
                <div className="flex justify-end">
                    <p className="text-xs">{props.date}</p>
                </div>
            </CardHeader>
            <Divider></Divider>
            <CardBody>
                <p className="text-xs sm:text-sm">{props.description}</p>
            </CardBody>
        </Card>
    )
}
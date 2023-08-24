'use client';

import { Button, Card, CardBody, Chip, CircularProgress, Divider, Image } from "@nextui-org/react";
import { Icon } from '@iconify/react';

export default function Hero() {
    return (
        <div className="relative flex flex-col place-items-center ">
            <Image width="240px" src="/bongo.png"></Image>



            <Card>
                <CardBody>
                    <p className="text-2xl ">bongodev.cc </p>
                </CardBody>
            </Card>


            <div className="flex mt-2 gap-4">
                <Button variant="light" isIconOnly color="primary" aria-label="Like">
                    <Icon width={20} icon="ic:baseline-discord" />
                </Button>

                <Button variant="light" isIconOnly color="primary" aria-label="Like">
                    <Icon width={20} icon="mdi:twitter" />
                </Button>

                <Button variant="light" isIconOnly color="primary" aria-label="Like">
                    <Icon width={20} icon="mdi:youtube" />
                </Button>
            </div>
        </div>
    )
}
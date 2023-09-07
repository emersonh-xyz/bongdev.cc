'use client';
import { Card, CardBody, CardFooter, CardHeader, Link } from "@nextui-org/react";

export default function BlogPost({ props }: any) {

    if (!props) {
        props = {
            title: "example title",
            date: 'example date'
        }
    }

    return (
        <Card isPressable isHoverable className="mt-2 w-full">
            <CardBody>
                <div className="mt-2">
                    <div className="flex flex-row">
                        <div>
                            <Link className="text-xl">{props.name}</Link>
                        </div>
                        <div className="justify-end ml-10">August 21st, 2023</div>
                    </div>
                    <p className="font-light">Ever wondered how to do this?</p>
                </div>
            </CardBody>
        </Card>
    )
}
'use client';
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/react";

export default function BlogPost({ props }: any) {

    if (!props) {
        props = {
            title: "example title",
            date: 'example date'
        }
    }

    return (
        <Card className="w-96 mt-4">
            <CardHeader>
                <p>{props.title}</p>
            </CardHeader>
            <CardBody>
                ?????
            </CardBody>
            <CardFooter>
                <p>{props.date}</p>
            </CardFooter>
        </Card>
    )
}
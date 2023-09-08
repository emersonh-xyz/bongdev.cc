'use client';
import timeAgo from "@/app/lib/timeAgo";
import { Card, CardBody, CardFooter, CardHeader, Link } from "@nextui-org/react";

export default function BlogCard({ props }: any) {
    if (!props) return;
    return (
        <Card isPressable className="mt-2 w-full">
            <CardBody>
                <div className="mt-2">
                    <div className="flex flex-row justify-between items-center">
                        <div>
                            <Link href={`blog/${props.slug}`} className="text-xl">{props.title}</Link>
                        </div>
                        <p className="ml-20 text-sm">{timeAgo(props.date)}</p>
                    </div>
                    <div>
                        <p className="font-light">{props.summary}</p>
                    </div>
                </div>
            </CardBody>
        </Card>
    )
}
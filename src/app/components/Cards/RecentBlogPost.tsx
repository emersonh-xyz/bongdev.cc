import { Icon } from "@iconify/react/dist/iconify.js";
import { Card, CardBody, Image, Link, Skeleton } from "@nextui-org/react";
import { useEffect, useState } from "react";

export default function RecentBlogPost() {

    const [post, setPost] = useState<any>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function getPosts() {
            const res = await fetch('/api/blog/all', {
                cache: "no-store"
            })
            // The return value is *not* serialized

            if (!res.ok) {
                throw new Error('Failed to fetch data')
            }

            const data = await res.json()

            setPost(data.posts[0]);
            setLoading(false);

        }

        getPosts();

    }, [])

    if (loading) return <Skeleton><Card><CardBody>loading...</CardBody></Card></Skeleton>
    return (
        <div>
            {/* <Link target="_blank" href=""> */}
            <Card onClick={() => window.location.href = "/blog"} className="w-72" isPressable>
                <CardBody className="p-2">
                    <div className="flex items-center">
                        <Icon className="text-md" icon="la:blog" width={40} />
                        <div className="ml-2">
                            <div className="flex items-center ">
                                <p className="text-sm ml-1">Recent Blog post</p>
                            </div>
                            <Link href={`/blog/${post.slug}`} className="text-sm ml-1 font-bold">{post.title}</Link>
                        </div>
                    </div>
                </CardBody>
            </Card>
            {/* </Link > */}
        </div>
    )
}
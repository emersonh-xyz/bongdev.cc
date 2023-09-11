'use client';
import { Suspense, useEffect, useState } from "react";
import BlogCard from "../Cards/BlogCard";
import { Card, CardBody, Divider, Link, Skeleton } from "@nextui-org/react";

export default function BlogPosts() {

    const [posts, setPosts] = useState([]);
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

            setPosts(data.posts);
            setLoading(false);
        }

        getPosts();

    }, [])

    return (
        <div className="flex justify-center flex-col items-center">
            <p className="text-3xl font-bold">Emerson's Blog</p>
            <p className="text-thin font-light ">Stuff I talk about</p>
            <div className="mt-2 w-full">
                {loading && <Skeleton><BlogCard /></Skeleton>}
                {posts.map((post: Post, key: number) => {
                    return (
                        <BlogCard key={key} props={post} />
                    )
                })}
            </div>
        </div>
    )
}
'use client';

import Post from "@/app/components/Heroes/Post";
import Sidebar from "@/app/components/Sidebar";
import { Skeleton } from "@nextui-org/react";
import { useEffect, useState } from "react";


export default function BlogPost({ params }: any) {

    const { id } = params;

    const [post, setPost] = useState();
    useEffect(() => {

        const getPost = async (id: any) => {
            const response = await fetch('/api/blog', {
                method: "POST",
                body: JSON.stringify(id)
            }).then((res) => res.json());

            setPost(response.post);
        }

        getPost(id)

    }, [])

    return (
        <main className="h-screen flex flex-col sm:flex-row">
            <Sidebar />
            <div className="sm:flex-1 sm:overflow-y-auto px-4">
                {post ? <Post props={post} /> : <Skeleton />}
            </div>
        </main>
    )
}
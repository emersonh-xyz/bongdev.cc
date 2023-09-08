import { NextResponse } from 'next/server';
import clientPromise from '@lib/mongo'

export async function POST(request: Request) {

    try {

        // Get request params
        const slug = await request.json();

        const client = await clientPromise
        if (!client) {
            throw new Error("Client could not be created")
        }

        const db = client.db("blog")
        const post = await db.collection('posts').find({ slug: slug }).toArray();

        return NextResponse.json({ post: post[0] })

    }
    catch (error) {
        return NextResponse.json({ error: error })
    }



}
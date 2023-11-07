import { NextResponse } from 'next/server';
import clientPromise from '../../../lib/mongo'

export async function GET() {

    try {

        const client = await clientPromise
        if (!client) {
            throw new Error("Client could not be created")
        }

        const db = client.db("blog")
        const posts = (await db.collection('posts').find().toArray()).reverse();

        return NextResponse.json({ posts: posts })

    }
    catch (error) {
        return NextResponse.json({ error: error })
    }



}
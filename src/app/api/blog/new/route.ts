import { NextResponse } from 'next/server'
import clientPromise from "@lib/mongo"


// Peter Boughton stackoverflow
function convertToSlug(title: any) {
    return title.toLowerCase()
        .replace(/ /g, "-")
        .replace(/[^\w-]+/g, "");
}

export async function POST(request: Request) {

    try {

        // Get request params
        const res = await request.json()

        const { title, content, summary, password } = res

        if (password !== process.env.SECRET) {
            return NextResponse.json({ message: "Error: Incorrect password" })
        }

        const date = new Date();
        const slug = convertToSlug(title);

        // Create mongo instance
        const client = await clientPromise

        if (!client) {
            return NextResponse.json({ message: "Error: No client could be created from Mongo" })
        }

        const db = client.db("blog")
        const collection = db.collection("posts")

        // Insert into collection
        await collection.insertOne({
            title: title,
            content: content,
            summary: summary,
            slug: slug,
            date: date,

        })

        return NextResponse.json({ message: `Blog ${title} has been created!`, slug: slug })

    }
    catch (e) {
        return NextResponse.json({ message: e })
    }

}
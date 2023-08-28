import clientPromise from "@lib/mongo.jsx"
import { NextResponse } from "next/server"

export default function GET() {

    NextResponse.json({ message: "hello world" });
}
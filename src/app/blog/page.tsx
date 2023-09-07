import { Card } from '@nextui-org/react'
import Image from 'next/image'

import { Metadata } from 'next'
import Sidebar from '../components/Sidebar'
import Hero from '../components/Landing'
import RecentPosts from '../components/Heroes/BlogPosts'
import BlogLanding from '../components/BlogLanding'

export const metadata: Metadata = {
    title: 'bongodev.cc | Portfolio',
    description: 'Portfolio website',
    themeColor: "#FFFFFF"
}

export default function Blog() {

    return (

        <main className="h-screen flex flex-col sm:flex-row">
            <Sidebar />
            <div className="sm:flex-1 sm:overflow-y-auto px-4">
                <BlogLanding />
            </div>
        </main>
    )
}

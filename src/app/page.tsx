import { Card } from '@nextui-org/react'
import Image from 'next/image'
import Sidebar from './components/Sidebar'
import Hero from './components/Hero'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'bongodev.cc | Portfolio',
  description: 'Portfolio website',
  themeColor: "#FFFFFF"
}

export default function Home() {

  return (

    <main className="h-screen flex flex-col sm:flex-row">
      <Sidebar />
      <div className="sm:flex-1 sm:overflow-y-auto px-4">
        <Hero />
      </div>
    </main>
  )
}

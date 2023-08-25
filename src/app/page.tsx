import { Card } from '@nextui-org/react'
import Image from 'next/image'
import Sidebar from './components/Sidebar'
import Hero from './components/Hero'

export default function Home() {
  return (

    <main className="h-screen flex">
      <Sidebar />
      <div className="flex-1 overflow-y-auto px-4">
        <Hero />
      </div>
    </main>
  )
}

import { Card } from '@nextui-org/react'
import Image from 'next/image'
import Sidebar from './components/Sidebar'

export default function Home() {
  return (
    <main className="flex-col items-center justify-between ">
      <Sidebar />
    </main>
  )
}

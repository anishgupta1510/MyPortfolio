import DisplayCard from '@/components/DisplayCard'
import GetInTouch from '@/components/GetInTouch'
import Projects from '@/components/Projects'
import Resume from '@/components/Resume'
import Topnavbar from '@/components/Topnavbar'
import WhatIKnow from '@/components/WhatIKnow'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
      <>
        <Topnavbar/>
        <DisplayCard/>
        <Projects/>
        <WhatIKnow/>
        <GetInTouch/>
        <Resume/>
      </>
  )
}

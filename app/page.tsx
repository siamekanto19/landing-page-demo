import HeroSection from '@/components/HeroSection'
import Navbar from '@/components/Navbar'
import TopBanner from '@/components/TopBanner'
import React, { Fragment } from 'react'

export default function Home() {
  return (
    <Fragment>
      <TopBanner />
      <Navbar />
      <HeroSection />
    </Fragment>
  )
}

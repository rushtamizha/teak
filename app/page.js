import AboutSection from '@/components/AboutSection'
import CategoryPackages from '@/components/CategoryPackages'
import Gallery from '@/components/Gallery'
import HeroWithForm from '@/components/HeroSection'
import ModernHoneymoonHome, { HoneymoonChecklist } from '@/components/HoneymoonCheck'
import HoneymoonHero, { HoneymoonPerks } from '@/components/Honeymoonperks'
import Services from '@/components/Services'
import Testimonials from '@/components/Testimonials'
import React from 'react'

const Home = () => {
  return (
    <div>
      <HeroWithForm/>
      <AboutSection/>
      <CategoryPackages/>
      <Gallery/>
      <Services/>
      <HoneymoonHero/>
      <Testimonials/>
    </div>
  )
}

export default Home
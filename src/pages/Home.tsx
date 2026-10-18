// import React from 'react'
import BelieveSection from '../components/Home/BelieveSection/BelieveSection'
import BioSection from '../components/Home/BioSection/BioSection'
import BookSection from '../components/Home/BookSection/BookSection'
import Hero from '../components/Home/hero/Hero'
import ImpactStats from '../components/Home/impactstats/ImpactStats'
import MoldSection from '../components/Home/MoldSection/MoldSection'
import ServicesSection from '../components/Home/ServicesSection/ServicesSection'
import VideoSection from '../components/Home/VideoSection/VideoSection'
import Footer from '../layout/footer/Footer'

const Home = () => {
  return (
    <div>
      <Hero />
      <ImpactStats />
      <BioSection />
      <BelieveSection />
      <MoldSection />
      <VideoSection />
      <ServicesSection />
      <BookSection />
      <Footer />
    </div>
  )
}

export default Home
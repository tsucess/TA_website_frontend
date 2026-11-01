// import React from 'react'
import BelieveSection from '../components/Home/BelieveSection'
import BioSection from '../components/Home/BioSection'
import BookSection from '../components/Home/BookSection'
import Hero from '../components/Home/Hero'
import ImpactStats from '../components/Home/ImpactStats'
import MoldSection from '../components/Home/MoldSection'
import ServicesSection from '../components/Home/ServicesSection'
import VideoSection  from '../components/Home/VideoSection'
import TestimonialsSection from '../components/Home/TestimonialsSection'
import Newsletter from '../components/Newsletter'
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
      <TestimonialsSection />
      <Newsletter />
      <Footer />
    </div>
  )
}

export default Home
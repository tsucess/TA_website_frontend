import FAQSections from '../components/services/FAQSections'
import GetStartedSections from '../components/services/GetStartedSections'
import Hero from '../components/services/Hero'
import HowCanIHelpSections from '../components/services/HowCanIHelpSections'
import ServicesInfoSection from '../components/services/ServicesInfoSection'
import ServicesSection from '../components/services/ServicesSection'
import Footer from '../layout/footer/Footer'

const Services = () => {
  return (
    <div>
      <Hero />
      <HowCanIHelpSections />
      <ServicesSection />
      <GetStartedSections />
      <ServicesInfoSection />
      <FAQSections />
      <Footer />
    </div>
  )
}

export default Services
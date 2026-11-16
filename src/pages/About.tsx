import EarlyYearsSection from "../components/about/EarlyYearsSection";
import EducationSection from "../components/about/EducationSection";
import Hero from "../components/about/Hero";
import LeadershipSection from "../components/about/LeadershipSection";
import MinistrySection from "../components/about/MinistrySection";
import ProfessionalSection from "../components/about/ProfessionalSection";
import PurposeSection from "../components/about/PurposeSection";
import MoldSection from "../components/about/MoldSection";
import FaithSection from "../components/about/FaithSection";
import BeyondPulpitSection from "../components/about/BeyondPulpitSection";
import SpeakingSection from "../components/about/SpeakingSection";
import Footer from "../layout/footer/Footer";
import Newsletter from "../components/Newsletter";
import PhotoSection from "../components/about/PhotoSection";
import StackingLayout from "../layout/StackingLayout";

const About = () => {
  return (
    <div>
      <Hero />
      <PurposeSection />
      <StackingLayout>
        <EarlyYearsSection />
        <EducationSection />
        <ProfessionalSection />
        <MinistrySection />
        <LeadershipSection />
        <FaithSection />
      </StackingLayout>
        <MoldSection />
      <BeyondPulpitSection />
      <SpeakingSection />
      <PhotoSection />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default About;

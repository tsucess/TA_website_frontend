import AfterHeroSection from "../components/mold/AfterHeroSection";
import ExperienceSection from "../components/mold/ExperienceSection";
import GallerySection from "../components/mold/GallerySection";
import Hero from "../components/mold/Hero";
import MoldEventSection from "../components/mold/MoldEventSection";
import MoldExistSection from "../components/mold/MoldExistSection";
import MoldForSection from "../components/mold/MoldForSection";
import MoldPhilosophy from "../components/mold/MoldPhilosophy";
import PastEditionsSections from "../components/mold/PastEditionsSections";
import VisionSection from "../components/mold/VisionSection";
import Footer from "../layout/footer/Footer";

const Mold = () => {
  return (
    <div>
      <Hero />
      <AfterHeroSection />
      <MoldExistSection />
      <MoldPhilosophy />
      <ExperienceSection />
      <MoldForSection />
      <VisionSection />
      <MoldEventSection />
      <PastEditionsSections />
      <GallerySection />
      <Footer />
    </div>
  );
};

export default Mold;

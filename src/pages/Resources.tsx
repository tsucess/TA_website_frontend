import Newsletter from "../components/Newsletter";
import ArticlesSection from "../components/resources/ArticlesSection";
import AudioConverstaionSection from "../components/resources/AudioConverstaionSection";
import CategoriesSections from "../components/resources/CategoriesSections";
import ConversationChannelsSection from "../components/resources/ConversationChannelsSection";
import FeaturedResourcesSection from "../components/resources/FeaturedResourcesSection";
import Hero from "../components/resources/Hero";
import TeachingSections from "../components/resources/TeachingSections";
import VideoSection from "../components/resources/VideoSection";
import Footer from "../layout/footer/Footer";

const Resources = () => {
  return (
    <div>
      <Hero />
      <FeaturedResourcesSection />
      <CategoriesSections />
      <TeachingSections />
      <ArticlesSection />
      <VideoSection />
      <AudioConverstaionSection />
      <ConversationChannelsSection />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Resources;

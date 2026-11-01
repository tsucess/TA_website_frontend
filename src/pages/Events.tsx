import Hero from "../components/events/Hero";
import MoldEventSection from "../components/events/MoldEventSection";
import PastEditionsSections from "../components/events/PastEditionsSections";
import UpcomingEventsSections from "../components/events/UpcomingEventsSections";
import Newsletter from "../components/Newsletter";
import Footer from "../layout/footer/Footer";

const Events = () => {
  return (
    <div>
      <Hero />
      <MoldEventSection />
      <UpcomingEventsSections />
      <PastEditionsSections />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Events;

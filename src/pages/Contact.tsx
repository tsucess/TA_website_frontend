import ContactForm from "../components/contact/ContactForm";
import FAQSections from "../components/contact/FAQSections";
import Hero from "../components/contact/Hero";
import WaysToConnect from "../components/contact/WaysToConnect";
import Newsletter from "../components/Newsletter";
import Footer from "../layout/footer/Footer";

const Contact = () => {
  return (
    <div>
      <Hero />
      <WaysToConnect />
      <ContactForm />
      <FAQSections />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Contact;

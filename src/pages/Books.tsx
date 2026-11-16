import AuthorSection from "../components/books/AuthorSection"
import BookInsightSection from "../components/books/BookInsightSection"
import GetBooksSection from "../components/books/GetBooksSection"
import Hero from "../components/books/Hero"
import TheBookSection from "../components/books/TheBookSection"
import WhyTheseBooksSection from "../components/books/WhyTheseBooksSection"
import Newsletter from "../components/Newsletter"
import Footer from "../layout/footer/Footer"


const Books = () => {
  return (
    <div>
      <Hero />
      <TheBookSection />
      <WhyTheseBooksSection />
      <AuthorSection />
      <BookInsightSection />
      <GetBooksSection />
      <Newsletter />
      <Footer />
    </div>
  )
}

export default Books
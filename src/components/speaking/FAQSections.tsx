import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

interface FAQ {
  id: number;
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    id: 1,
    question: "Does Pastor Tunde speak outside Nigeria?",
    answer:
      "Our platform provides users with the tools and resources they need to achieve their goals.",
  },
  {
    id: 2,
    question: "What types of events does he speak at?",
    answer:
      "You can create an account by clicking the sign-up button and completing the registration form.",
  },
  {
    id: 3,
    question: "What topics does he speak about?",
    answer:
      "Yes, you can access some features for free. Premium features may require a subscription.",
  },
  {
    id: 4,
    question: "Can I request a specific topic?",
    answer:
      "You can contact our support team through the contact page or by sending us an email.",
  },
  {
    id: 5,
    question: "Does he participate in panels?",
    answer:
      "You can contact our support team through the contact page or by sending us an email.",
  },
  {
    id: 6,
    question: "Can organizations invite him for private sessions?",
    answer:
      "You can contact our support team through the contact page or by sending us an email.",
  },
  {
    id: 7,
    question: "How far in advance should I submit a request?",
    answer:
      "You can contact our support team through the contact page or by sending us an email.",
  },
  {
    id: 8,
    question: "How do I invite Pastor Tunde?",
    answer:
      "You can contact our support team through the contact page or by sending us an email.",
  },
];

const FAQSections = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className="bg-black text-white text-center p-6 md:px-16 lg:py-11 xl:py-22">
      <div className="mb-4 md:mb-10">
        <p className="text-[4vw] md:text-[1.5vw] mb-2 font-Oswald">
          FREQUENTLY ASKED QUESTIONS
        </p>
        <h2 className="text-[8vw] md:text-[3.5vw] xl:text-[4vw] font-Oswald font-bold uppercase leading-9 lg:leading-12 xl:leading-18 mb-4 md:mb-4 ">
          Before you send your invitation
        </h2>
      </div>
      <div className="mb-8 md:p-6 lg:px-8 ">
        {/* FAQ Items */}
        <div className="space-y-4 text-white">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;

            return (
              <div
                key={faq.id}
                className="border border-gray-200 rounded-xl overflow-hidden text-white"
              >
                {/* Question */}
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  className={
                    "w-full flex justify-between items-center text-left p-4 text-[4vw] md:text-[2vw] lg:text-[1.2vw] hover:bg-gray-50 hover:text-black transition-colors" +
                    ` ${isOpen ? "bg-white text-black" : ""}
                      `
                  }
                >
                  <span>{faq.question}</span>

                  <span
                    className={`text-xl transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  >
                    <FaChevronDown className="text-[4vw] md:text-[2vw] lg:text-[1.2vw]" />
                  </span>
                </button>

                {/* Answer */}
                {isOpen && (
                  <div className="p-5 pb-5 leading-relaxed text-left text-[4vw] md:text-[2vw] lg:text-[1.2vw]">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQSections;

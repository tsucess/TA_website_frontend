import { assetUrl } from "../../lib/assets";
import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "./TestimonialsSection.css";

const testimonials = [
  {
    photo: assetUrl("/images/slider_image_1.png"),
    quote:
      "The MOLD Bootcamp is a transformational coaching experience designed to help you rediscover your identity, align with your purpose, and move forward with clarity. Created and led by Tunde Adisa, it combines biblical wisdom, mindset training, and strategic life planning to equip you for personal and leadership growth.",
    name: "Robert,",
    role: "Software Developer",
  },
  {
    photo: assetUrl("/images/slider_image_1.png"),
    quote:
      "Sample testimonial: The sessions gave me practical tools to lead with confidence and make meaningful progress toward my goals.",
    name: "Sample Participant,",
    role: "Bootcamp Member",
  },
  {
    photo: assetUrl("/images/slider_image_1.png"),
    quote:
      "Sample testimonial: I left with a clearer sense of direction, a stronger mindset, and steps I could put into action right away.",
    name: "Sample Participant,",
    role: "Bootcamp Member",
  },
  {
    photo: assetUrl("/images/slider_image_1.png"),
    quote:
      "Sample testimonial: The experience challenged me to grow and helped me build habits that support my personal development.",
    name: "Sample Participant,",
    role: "Bootcamp Member",
  },
  {
    photo: assetUrl("/images/slider_image_1.png"),
    quote:
      "Sample testimonial: I appreciated the thoughtful guidance and practical lessons. I now feel better prepared for the next chapter.",
    name: "Sample Participant,",
    role: "Bootcamp Member",
  },
  {
    photo: assetUrl("/images/Figure%20(7).png"),
    quote:
      "Sample testimonial: The community and coaching helped me reflect on my purpose and take a more intentional path forward.",
    name: "Sample Participant,",
    role: "Bootcamp Member",
  },
];

const TestimonialsSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const activeTestimonial = testimonials[activeSlide];

  const showSlide = (index: number) => {
    setActiveSlide((index + testimonials.length) % testimonials.length);
  };

  return (
    <section className="testimonials-section">
      <div className="testimonials-content">
        <header className="testimonials-heading">
          <p className="testimonials-eyebrow">TESTIMONIALS</p>
          <h2>
            Great people
            <br />
            saying great things
          </h2>
        </header>

        <div className="testimonial-slide">
          <img
            key={activeTestimonial.photo}
            className="testimonial-photo"
            src={activeTestimonial.photo}
            alt="MOLD Bootcamp participant"
          />
          <article className="testimonial-card">
            <p key={activeSlide}>{activeTestimonial.quote}</p>
            <p className="testimonial-attribution">
              <strong>{activeTestimonial.name}</strong>{" "}
              <span>{activeTestimonial.role}</span>
            </p>
          </article>
          <div className="testimonial-arrows">
            <button
              type="button"
              onClick={() => showSlide(activeSlide - 1)}
              aria-label="Show previous testimonial photo"
            >
              <FaArrowLeft />
            </button>
            <button
              type="button"
              onClick={() => showSlide(activeSlide + 1)}
              aria-label="Show next testimonial photo"
            >
              <FaArrowRight />
            </button>
          </div>
        </div>

        <div className="testimonial-pagination" aria-label="Testimonials">
          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.photo}
              type="button"
              className={index === activeSlide ? "is-active" : ""}
              onClick={() => showSlide(index)}
              aria-label={`Show testimonial ${index + 1}`}
              aria-current={index === activeSlide ? "true" : undefined}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

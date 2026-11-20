import { Suspense, lazy, useEffect, useRef } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router";
import CustomCursor from "./components/CustomCursor";
import Loader from "./components/Loader";


const Homepage = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Books = lazy(() => import("./pages/Books"));
const Mold = lazy(() => import("./pages/Mold"));
const Contact = lazy(() => import("./pages/Contact"));
const Events = lazy(() => import("./pages/Events"));
const Resources = lazy(() => import("./pages/Resources"));
const Services = lazy(() => import("./pages/Services"));
const Speaking = lazy(() => import("./pages/Speaking"));

function SiteEffects() {
  const location = useLocation();
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const page = pageRef.current;
    if (!page) return;

    if (!("IntersectionObserver" in window)) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );

    const reveal = (element: Element) => {
      if (element.classList.contains("scroll-reveal")) return;
      element.classList.add("scroll-reveal");
      observer.observe(element);
    };

    const observeSections = (root: ParentNode) => {
      if (root instanceof Element && root.matches("section, article")) {
        reveal(root);
      }

      root.querySelectorAll("section, article").forEach((section) => {
        reveal(section);
      });
    };

    const observePageContent = () => {
      const routeContent = page.firstElementChild;
      if (!routeContent || routeContent.matches("[role='status']")) return;

      Array.from(routeContent.children).forEach((component) => {
        if (
          !component.matches("section, article") &&
          !component.querySelector("section, article")
        ) {
          reveal(component);
        }
      });

      observeSections(page);
    };

    observePageContent();
    const mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node instanceof Element) {
            observeSections(node);
          }
        });
      });
      observePageContent();
    });

    mutationObserver.observe(page, { childList: true, subtree: true });

    return () => {
      mutationObserver.disconnect();
      observer.disconnect();
    };
  }, [location.pathname]);

  return (
    <>
      <CustomCursor />
      <div key={location.pathname} ref={pageRef} className="site-page">
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Homepage />}/>
            <Route path="/about" element={<About/>} />
            <Route path="/books" element={<Books />} />
            <Route path="/mold" element={<Mold />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/events" element={<Events />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/services" element={<Services />} />
            <Route path="/speaking" element={<Speaking />} />
          </Routes>
        </Suspense>
      </div>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <SiteEffects />
    </BrowserRouter>
  );
}

export default App;
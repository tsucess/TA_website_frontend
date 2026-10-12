import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router";


const Homepage = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Books = lazy(() => import("./pages/Books"));
const Mold = lazy(() => import("./pages/Mold"));
const Contact = lazy(() => import("./pages/Contact"));
const Events = lazy(() => import("./pages/Events"));
const Resources = lazy(() => import("./pages/Resources"));
const Services = lazy(() => import("./pages/Services"));
const Speaking = lazy(() => import("./pages/Speaking"));


function App() {
  return (
      <BrowserRouter>
        <Suspense fallback={<div role="status" className="w-auto h-auto text-center p-4">Loading page...</div>}>
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
      </BrowserRouter>
    
  );
}

export default App;
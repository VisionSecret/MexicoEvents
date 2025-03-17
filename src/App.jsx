import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import { Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound ";
import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { FaArrowUp } from "react-icons/fa";
import Loading from "./components/Loading";

function App() {
  const cursorRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show loading screen for 5 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useGSAP(() => {
    const moveCursor = (e) => {
      const { clientX, clientY } = e;

      gsap.to(cursorRef.current, {
        x: clientX,
        y: clientY,
        duration: 0.2,
        ease: "power2.out",
      });
    };

    document.addEventListener("mousemove", moveCursor);
    return () => {
      document.removeEventListener("mousemove", moveCursor);
    };
  });

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="relative">
      {/* Cursor */}
      <div
        ref={cursorRef}
        className="fixed w-6 h-6 rounded-full bg-[#394BE4] pointer-events-none z-10"
      />
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 p-3 bg-blue-500 text-white rounded-full shadow-lg transition-all duration-300 ${
          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
        } hover:bg-blue-600`}
      >
        <FaArrowUp size={20} />
      </button>

      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/us" element={<NotFound />} />
        <Route path="/conferences" element={<NotFound />} />
        <Route path="/memberships" element={<NotFound />} />
        <Route path="/partners" element={<NotFound />} />
        <Route path="/suppliers" element={<NotFound />} />
        <Route path="/contact" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

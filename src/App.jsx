import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import { Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound ";
import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import Loading from "./components/Loading";
import Supplier from "./pages/Suppliers";
import CustomCursor from "./components/CustomCursor";

function App() {
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

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="relative">
      {/* Cursor */}
      <CustomCursor />

      {/* Bootom to Top button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 p-3 bg-blue-500 text-white rounded-full shadow-lg transition-all duration-300 animate-bounce z-50 ${
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
        <Route path="/suppliers" element={<Supplier />} />
        <Route path="/contact" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

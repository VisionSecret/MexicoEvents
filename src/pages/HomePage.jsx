import Hero from "../components/HomePage components/Hero";
import Card from "../components/HomePage components/Card";
import Slider from "../components/HomePage components/Slider";
import Join from "../components/HomePage components/Join";
import FAQSection from "../components/HomePage components/FaqsSection";
import OurMission from "../components/HomePage components/OurMission";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-[#FFFFFF]">
      {/* Hero Section */}
      <Hero />

      {/* New Section: card */}
      <Card />

      {/* New Slider Event Highlights Section */}
      <Slider />

      {/* New Section: FAQs */}
      <FAQSection />

      {/* New Section: Mission */}
      <OurMission />

      {/* New Section: Call to Action */}
      <Join />
    </div>
  );
};

export default HomePage;

import React, { useState, useRef, useEffect } from "react";
import SupplierSearch from "../components/Supplier/SupplierSearch";
import SupplierCard from "../components/Supplier/SupplierCard";
import FeatureSupplier from "../components/Supplier/FeatureSupplier";

// External Libraries
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiSearch } from "react-icons/fi";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const suppliers = [
  {
    name: "Automation Anywhere",
    url: "automation.com",
    status: "Active",
    address: "1234 Tech Park, Silicon Valley",
    tags: ["RPA", "AI", "Process Automation"],
  },
  {
    name: "Appian",
    url: "appian.com",
    status: "Inactive",
    address: "3344 Low-code Blvd, Austin, TX",
    tags: ["Low-code", "Automation"],
  },
  {
    name: "UiPath",
    url: "uipath.com",
    status: "Active",
    address: "5678 Innovation Drive, New York, NY",
    tags: ["RPA", "AI", "Workflow"],
  },
  {
    name: "Blue Prism",
    url: "blueprism.com",
    status: "Inactive",
    address: "9012 Blue St, London, UK",
    tags: ["RPA", "Digital Workforce"],
  },
  {
    name: "WorkFusion",
    url: "workfusion.com",
    status: "Active",
    address: "3456 Automation Ave, Boston, MA",
    tags: ["Intelligent Automation", "AI"],
  },
  {
    name: "Kofax",
    url: "kofax.com",
    status: "Active",
    address: "7890 Capture Ln, Chicago, IL",
    tags: ["Document Automation", "KTA"],
  },
  {
    name: "Pegasystems",
    url: "pega.com",
    status: "Active",
    address: "1122 Agile Rd, Cambridge, MA",
    tags: ["CRM", "Automation"],
  },
];

const Suppliers = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [notFound, setNotFound] = useState("");
  const container = useRef();
  const swiperRef = useRef();
  const gridRef = useRef();
  const [displayedSuppliers, setDisplayedSuppliers] = useState(suppliers);

  // Search filtering logic
  useEffect(() => {
    const query = searchQuery.trim().toLowerCase();

    if (query) {
      const filtered = suppliers.filter(
        (supplier) =>
          supplier.name.toLowerCase().includes(query) ||
          supplier.tags.some((tag) => tag.toLowerCase().includes(query))
      );

      if (filtered.length === 0) {
        setNotFound("Search not found");
        setDisplayedSuppliers([]);
      } else {
        setNotFound(""); // ✅ reset notFound here
        setDisplayedSuppliers(filtered);
      }
    } else {
      setNotFound(""); // ✅ also reset here when query is cleared
      setDisplayedSuppliers(suppliers);
    }
  }, [searchQuery]);

  // GSAP Animations
  useGSAP(
    () => {
      // Header animation
      gsap.from(".search-header", {
        duration: 1,
        y: 50,
        opacity: 0,
        ease: "power3.out",
      });

      // Carousel animation
      gsap.from(".featured-card", {
        duration: 0.8,
        scale: 0.9,
        opacity: 0,
        stagger: 0.1,
        ease: "back.out(1.7)",
        delay: 0.3,
      });

      // Grid animation setup
      const setupGridAnimations = () => {
        ScrollTrigger.batch(".supplier-card", {
          start: "top 90%",
          onEnter: (batch) =>
            gsap.to(batch, {
              opacity: 1,
              y: 0,
              stagger: 0.1,
              duration: 0.6,
              ease: "power2.out",
            }),
          once: true,
        });
      };

      // Initial setup
      gsap.set(".supplier-card", { opacity: 0, y: 100 });
      setupGridAnimations();

      // Hover effects
      gsap.utils.toArray(".supplier-card").forEach((card) => {
        card.addEventListener("mouseenter", () =>
          gsap.to(card, {
            duration: 0.2,
            y: -5,
            scale: 1.02,
            ease: "power2.out",
          })
        );

        card.addEventListener("mouseleave", () =>
          gsap.to(card, {
            duration: 0.2,
            y: 0,
            scale: 1,
            ease: "power2.out",
          })
        );
      });

      // Refresh ScrollTrigger on updates
      return () => ScrollTrigger.refresh();
    },
    { scope: container }
  );

  return (
    <div
      ref={container}
      className="min-h-screen bg-gradient-to-br from-gray-50 to-[#f8faff] px-6 py-32 md:px-8"
    >
      {/* Search Header */}
      <SupplierSearch
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      {/* Featured Carousel - Only show if not searching */}
      {searchQuery.trim() === "" && (
        <div className="max-w-7xl mx-auto mb-12 md:mb-20 px-2 md:px-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 ml-2">
            Featured Suppliers
          </h2>
          <Swiper
            ref={swiperRef}
            modules={[EffectCoverflow, Navigation]}
            spaceBetween={20}
            slidesPerView={1.1}
            centeredSlides={true}
            loop={true}
            effect="coverflow"
            touchRatio={1}
            allowTouchMove={true}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2,
              slideShadows: false,
            }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            breakpoints={{
              640: {
                slidesPerView: 1.5,
                spaceBetween: 30,
                coverflowEffect: {
                  depth: 150,
                  modifier: 2.5,
                },
              },
              1024: {
                slidesPerView: 2.5,
                spaceBetween: 40,
                coverflowEffect: {
                  depth: 200,
                  modifier: 3,
                },
              },
            }}
            className="relative"
          >
            {suppliers.slice(0, 5).map((supplier, i) => (
              <SwiperSlide key={i}>
                <FeatureSupplier key={supplier.name + i} supplier={supplier} />
              </SwiperSlide>
            ))}
            <div
              className="swiper-button-prev"
              style={{ display: window.innerWidth > 768 ? "flex" : "none" }}
            ></div>
            <div
              className="swiper-button-next"
              style={{ display: window.innerWidth > 768 ? "flex" : "none" }}
            ></div>
          </Swiper>
        </div>
      )}

      {/* Supplier Grid */}
      <div ref={gridRef} className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 px-2 md:px-4">
          {searchQuery.trim() === "" ? "All Suppliers" : "Search Results"}
        </h2>

        {notFound ? (
          <div className="flex flex-col items-center justify-center py-12 text-gray-600 px-4">
            <FiSearch className="text-5xl text-gray-400 mb-4" />
            <h3 className="text-xl font-medium mb-2">No results found</h3>
            <p className="text-center max-w-md">
              We couldn't find any suppliers matching "
              <span className="font-semibold">{searchQuery}</span>". Try using
              different keywords or check your spelling.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 px-2 md:px-4">
            {displayedSuppliers.map((supplier, idx) => (
              <SupplierCard
                key={supplier.name + idx}
                supplier={supplier}
                idx={idx}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Suppliers;

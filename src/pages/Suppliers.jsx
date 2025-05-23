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
    url: "www.automationanywhere.com",
    imageUrl: "/images/Suppliers/automation.jpg",
    status: "Active",
    details:
      "Company / Consultant Name: Automation Anywhere Website: www.automationanywhere.com Location (Physical Address): Av. [...]",
    address:
      "Av. Insurgentes Sur 1425 - 16th Floor, Insurgentes Mixcoac, Benito Juárez, 03920 CDMX",
    tags: [
      "RPA",
      "AI",
      "Task Automation",
      "Bot Automation",
      "Process Automation",
      "Digital Transformation",
    ],
  },
  {
    name: "Alvatrix Global Services",
    url: "www.alvatrix.com",
    imageUrl: "/images/Suppliers/AlvatrixLogo.png",
    status: "Inactive",
    details:
      "Company / Consultant Name: Alvatrix Global Services Website: www.alvatrix.com Location (Physical Address): [...]",
    address: "Blvd. Antonio L. Rodriguez #3000. Torre Albia, Monterrey, NL",
    tags: [
      "Low-code",
      "Appian",
      "Business Applications",
      "Workflow Automation",
      "Digital Transformation",
    ],
  },
  {
    name: "BMC",
    url: "www.bmc.com",
    imageUrl: "/images/Suppliers/BMC.jpg",
    status: "Active",
    details:
      "Company / Consultant Name: BMC Website: www.bmc.com Location (Physical Address): Volcán 150 [...]",
    address:
      "Volcán 150, 2nd Floor, Off 202, Lomas de Chapultepec, Miguel Hidalgo, CDMX",
    tags: [
      "RPA",
      "AI",
      "Workflow Automation",
      "ITSM",
      "Enterprise Software",
      "AIOps",
      "Service Automation",
    ],
  },
  {
    name: "Equal-Plus, Inc",
    url: "www.equal-plus.com",
    imageUrl: "/images/Suppliers/equal-plus.jpg",
    status: "Active",
    details:
      "Company/Consultant Name: Equal-Plus, Inc. Website: www.equal-plus.com Physical Address: 555 [...]",
    address: "555 North Point Center East 4th Floor Alpharetta, GA 30022, USA",
    tags: [
      "RPA",
      "Staffing",
      "Digital Workforce",
      "IT Consulting",
      "Talent Solutions",
      "Automation Services",
    ],
  },
  {
    name: "Flo Networks",
    url: "www.flo.net",
    imageUrl: "/images/Suppliers/flo.jpg",
    status: "Inactive",
    details:
      "Company / Consultant Name: Flo Networks Website: www.flo.net Location (Physical Address): Areas [...]",
    address: "Mexico, USA, and some LATAM countries",
    tags: [
      "AI",
      "Intelligent Automation",
      "Network Services",
      "Cloud Networking",
      "Managed Services",
      "Connectivity",
    ],
  },
  {
    name: "HUAWEI",
    url: "https://www.huawei.com/mx/",
    imageUrl: "/images/Suppliers/Huawei.png",
    status: "Active",
    details:
      "Company / Consultant Name: HUAWEI Website: www.huawei.com/mx/ Physical Address: Ricardo Margain [...]",
    address:
      " Ricardo Margain 315, Santa Engracia neighborhood, San Pedro Garza García",
    tags: [
      "Cloud",
      "IoT",
      "5G",
      "AI Infrastructure",
      "Document Automation",
      "KTA",
      "Telecom",
    ],
  },
  {
    name: "CONSIST",
    url: "www.consiss.com",
    imageUrl: "/images/Suppliers/consiss.jpeg",
    status: "Active",
    details:
      "Company / Consultant Name: CONSISS Website: www.consiss.com Location (Physical Address): Blvd Díaz [...]",
    address:
      "Blvd Díaz Ordaz 140, tower 2 ph1, Colonia Santa María, Monterrey Nuevo León",
    tags: [
      "CRM",
      "ERP",
      "Automation",
      "Business Software",
      "Consulting",
      "Digital Transformation",
    ],
  },
  {
    name: "Inetum",
    url: "www.inetum.com",
    imageUrl: "/images/Suppliers/Inetum.png",
    status: "Active",
    details:
      "Company / Consultant Name: Inetum Website: www.inetum.com Location (Physical Address): Mexico / [...]",
    address: "Mexico / Monterrey",
    tags: [
      "CRM",
      "ERP",
      "Automation",
      "Business Software",
      "Consulting",
      "Digital Transformation",
    ],
  },
  {
    name: "Intelligence",
    url: "www.Intelligence.com",
    imageUrl: "/images/Suppliers/IntelligenIT.jpeg",
    status: "Active",
    details:
      "Company / Consultant Name: Intelligenit Website: https://www.intelligenit.com/ Location (Physical Address): Sendero Sur [...]",
    address: "Sendero Sur 2900, Balcones del Mirador, 64790 Monterrey, NL",
    tags: [
      "CRM",
      "ERP",
      "Automation",
      "Business Software",
      "Consulting",
      "Digital Transformation",
    ],
  },
  {
    name: "ISITA",
    url: "www.isitatech.com",
    imageUrl: "/images/Suppliers/isita.jpg",
    status: "Active",
    details:
      "Company / Consultant Name: ISITA Website: www.isitatech.com Physical Address: Av. Lázaro [...]",
    address: "Av. Lázaro Cárdenas 435, Floor 12 -1230 Loma Larga Oriente Zone",
    tags: [
      "CRM",
      "ERP",
      "Automation",
      "Business Software",
      "Consulting",
      "Digital Transformation",
    ],
  },
  {
    name: "IT Matters",
    url: "www.itmatters.pro",
    imageUrl: "/images/Suppliers/it-matters.jpg",
    status: "Active",
    details:
      "Company / Consultant Name: IT Matters Website: www.itmatters.pro Location (Physical Address): Ave. [...]",
    tags: [
      "CRM",
      "Automation",
      "ERP",
      "Consulting",
      "Business Software",
      "Digital Transformation",
    ],
  },
  {
    name: "Lumina Software",
    url: "www.luminasoftware.com/site/",
    imageUrl: "/images/Suppliers/lumina.jpg",
    status: "Active",
    details:
      "Company / Consultant Name: Lumina Software Website: www.luminasoftware.com/site/ Location (Physical Address): Jdn. [...]",
    tags: [
      "CRM",
      "Automation",
      "ERP",
      "Consulting",
      "Business Software",
      "Digital Transformation",
    ],
  },
  {
    name: "Kairós Digital Solutions",
    url: "https://kairosds.com/",
    imageUrl: "/images/Suppliers/kairos.png",
    status: "Active",
    details:
      "Company / Consultant Name: Kairós Digital Solutions Website: https://kairosds.com/ Location (Physical Address): [...]",
    tags: [
      "CRM",
      "Automation",
      "ERP",
      "Consulting",
      "Business Software",
      "Digital Transformation",
    ],
  },
  {
    name: "Madiba Consulting",
    url: "www.linkedin.com/in/arturo-equihua-pmp-mba-msc-itilv4-a40187",
    imageUrl: "/images/Suppliers/Madiba.png",
    status: "Active",
    details:
      "Company / Consultant Name: Madiba Consulting Website: www.linkedin.com/in/arturo-equihua-pmp-mba-msc-itilv4-a401875 Physical Address: Av. [...]",
    tags: [
      "CRM",
      "Automation",
      "ERP",
      "Consulting",
      "Business Software",
      "Digital Transformation",
    ],
  },
  {
    name: "MICRO NETWORK",
    url: "www.microred.com.mx",
    imageUrl: "/images/Suppliers/microred.jpg",
    status: "Active",
    details:
      "Company / consultant name: MICRO RED Website: www.microred.com.mx Location (Physical Address): Monterrey, [...]",
    tags: [
      "CRM",
      "Automation",
      "ERP",
      "Consulting",
      "Business Software",
      "Digital Transformation",
    ],
  },
  {
    name: "MCM TELECOM",
    url: "www.mcmtelecom.com/",
    imageUrl: "/images/Suppliers/MCM.png",
    status: "Active",
    details:
      "Company / Consultant Name: MCM TELECOM Website: www.mcmtelecom.com/ Location (Physical Address): Av. [...]",
    tags: [
      "CRM",
      "Automation",
      "ERP",
      "Consulting",
      "Business Software",
      "Digital Transformation",
    ],
  },
  {
    name: "MISSIO in ACTIO",
    url: "www.missioinactio.com/",
    imageUrl: "/images/Suppliers/Missio.png",
    status: "Active",
    details:
      "Company / Consultant Name: MISSIO in ACTIO Website: www.missioinactio.com Location (Physical Address): [...]",
    tags: [
      "CRM",
      "Automation",
      "ERP",
      "Consulting",
      "Business Software",
      "Digital Transformation",
    ],
  },
  {
    name: "MovIT Solutions Group",
    url: "www.movitsg.com",
    imageUrl: "/images/Suppliers/MovIT.jpeg",
    status: "Active",
    details:
      "Company / Consultant Name: MovIT Solutions Group Website: www.movitsg.com Location (Physical Address): México / [...]",
    address: "México / Ubicación no especificada",
    tags: ["IT Solutions", "Consulting"],
  },
  {
    name: "Netsoft",
    url: "www.netsoft.com",
    imageUrl: "/images/Suppliers/Netsoft.jpg",
    status: "Active",
    details:
      "Company / Consultant Name: Netsoft Website: www.netsoft.com Location (Physical Address): Av. Lazaro [...]",
    address: "México / Av. Lazaro",
    tags: ["ERP", "NetSuite", "Business Consulting"],
  },
  {
    name: "Nexta Technology Services, S.A. de C.V.",
    url: "www.nexta.mx",
    imageUrl: "/images/Suppliers/Nexta.jpg",
    status: "Active",
    details:
      "Company / Consultant Name: Nexta Technology Services, S.A. de C.V. Website: www.nexta.mx Location (Physical Address): México / [...]",
    address: "México / Ubicación no especificada",
    tags: ["Cloud", "ERP", "CRM", "Consulting"],
  },
  {
    name: "Teledinámica México",
    url: "www.teledinamica.com.mx",
    imageUrl: "/images/Suppliers/Teledinamica.jpg",
    status: "Active",
    details:
      "Company / Consultant Name: Teledinámica México Website: www.teledinamica.com.mx Location (Physical Address): PM / [...]",
    address: "México / PM",
    tags: ["VoIP", "Telecom", "IT", "Consulting"],
  },
  {
    name: "Tesys21",
    url: "https://tesys21.com",
    imageUrl: "/images/Suppliers/Tesys21.png",
    status: "Active",
    details:
      "Company / Consultant Name: Tesys21 Website: https://tesys21.com Location (Physical Address): Maurice Ravel / [...]",
    address: "México / Maurice Ravel",
    tags: ["ERP", "Cloud", "Business Consulting"],
  },
  {
    name: "TRANSNOTE (T-NOTE) / Carlos Ramírez",
    url: "https://tn-note.com",
    imageUrl: "/images/Suppliers/TNote.png",
    status: "Active",
    details:
      "Company / Consultant Name: TRANSNOTE (T-NOTE) / Carlos Ramírez Website: https://tn-note.com Location (Physical Address): México / [...]",
    address: "México / Ubicación no especificada",
    tags: ["ERP", "Consulting", "Digital Transformation"],
  },
  {
    name: "ZENTIUS",
    url: "www.zentius.com.mx",
    imageUrl: "/images/Suppliers/Zentius.jpg",
    status: "Active",
    details:
      "Company / Consultant Name: ZENTIUS Website: www.zentius.com.mx Location (Physical Address): San Pedro / [...]",
    address: "México / San Pedro",
    tags: ["Digital Transformation", "ERP", "Consulting"],
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

    if (!query) {
      setNotFound(""); // ✅ reset when search is cleared
      setDisplayedSuppliers(suppliers);
    } else {
      const filtered = suppliers.filter(
        (supplier) =>
          supplier.name.toLowerCase().includes(query) ||
          supplier.tags.some((tag) => tag.toLowerCase().includes(query))
      );

      if (filtered.length === 0) {
        setNotFound("Search not found");
        setDisplayedSuppliers([]);
      } else {
        setNotFound("");
        setDisplayedSuppliers(filtered);
      }
    }
  }, [searchQuery, suppliers]);

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

      gsap.utils.toArray(".supplier-card").forEach((card) => {
        gsap.from(card, {
          y: 90,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        });
      });

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
        <div className="max-w-7xl mx-auto mb-12 md:mb-20 md:px-4">
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
            {suppliers.map((supplier, i) => (
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
        ) : displayedSuppliers && displayedSuppliers.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 px-2 md:px-4">
            {displayedSuppliers.map((supplier, idx) => (
              <SupplierCard
                key={supplier.name + idx}
                supplier={supplier}
                idx={idx}
              />
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-500 py-12">
            Loading suppliers...
          </div>
        )}
      </div>
    </div>
  );
};

export default Suppliers;

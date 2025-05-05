import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const slides = [
  {
    title: "Conoce los tipos de membresía",
    description: "Contáctanos para enviarte toda la información",
    image: "/images/HomePage/slider1.png",
  },
  {
    title: "Developing Organic Growth Engine With AI",
    description: "Lidia Vijga, Co-founder of DeckLinks.",
    image: "/images/HomePage/slider2.jpg",
  },
  {
    title: "Tendencias de IA 2025",
    description: "Elvira Chapa, VP Executive Advisor en Gartner.",
    image: "/images/HomePage/slider3.jpg",
  },
  {
    title: "Posada AMPID",
    description: "Así cerramos un año lleno de éxitos.",
    image: "/images/HomePage/slider4.jpg",
  },
  {
    title: "Innovación Exponencial",
    description:
      "Expositor: Francisco Corona, CTO para servicios en la Nube en Microsoft México.",
    image: "/images/HomePage/slider5.jpg",
  },
];

const Slider = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const imgRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    // Animation for the section title
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Animation for the slide content when it comes into view
    const animateSlideContent = () => {
      gsap.fromTo(
        textRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
            toggleActions: "play none none reverse"
          }
        }
      );

      gsap.fromTo(
        imgRef.current,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
            toggleActions: "play none none reverse"
          }
        }
      );
    };

    animateSlideContent();

    // Clean up ScrollTrigger instances when component unmounts
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div ref={sectionRef} className="py-20 px-4 md:px-12 lg:px-24 bg-gradient-to-r from-blue-600 to-indigo-800">
      <div className="w-full max-w-7xl mx-auto px-2 sm:px-6">
        <h2 ref={titleRef} className="text-3xl md:text-4xl font-bold text-white text-center mb-10">
          Event Highlights
        </h2>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          loop={true}
          className="w-full"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-12 md:px-20 py-16">
                {/* Image */}
                <div
                  ref={imgRef}
                  className="relative order-1 md:order-2 overflow-hidden rounded-xl shadow-xl"
                >
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-auto md:max-h-96 object-cover transition-transform duration-500 hover:scale-105 rounded-lg shadow-lg"
                  />
                </div>

                {/* Text */}
                <div
                  ref={textRef}
                  className="text-center md:text-left order-2 md:order-1"
                >
                  <span className="inline-block bg-white text-blue-600 text-xs px-3 py-1 rounded-full uppercase tracking-widest mb-6 animate-pulse">
                    2025 Event Series
                  </span>
                  <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 leading-tight">
                    {slide.title}
                  </h2>
                  <p className="text-lg text-gray-200 max-w-xl mx-auto md:mx-0">
                    {slide.description}
                  </p>

                  <div className="mt-8">
                    <button className="px-6 py-2 md:px-6 md:py-3 text-white font-medium bg-gradient-to-r from-purple-500 to-blue-500 border-2 border-white rounded-full hover:bg-gradient-to-r hover:from-purple-700 hover:to-blue-800 hover:text-white transition-all duration-300 transform hover:scale-105 hover:shadow-xl active:scale-95 z-40">
                      VER MÁS
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Slider;

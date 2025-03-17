import React, { useState, useRef, useEffect } from "react";
import { FaPlay } from "react-icons/fa";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const OurMission = () => {
  const [isOpen, setIsOpen] = useState(false);
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const paragraphRef = useRef(null);
  const buttonRef = useRef(null);
  const videoRef = useRef(null);
  const modalRef = useRef(null);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27 && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleEsc);

    // Prevent scrolling when modal is open
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      window.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  useGSAP(() => {
    // 🌟 Animate title with text reveal
    gsap.from(titleRef.current, {
      opacity: 0,
      y: 30,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
    });

    // 🌟 Animate paragraph with slight delay
    gsap.from(paragraphRef.current, {
      opacity: 0,
      y: 40,
      duration: 1.5,
      delay: 0.3,
      ease: "power2.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });

    // 🌟 Animate button with bounce effect
    gsap.from(buttonRef.current, {
      opacity: 0,
      y: 50,
      scale: 0.8,
      duration: 1,
      delay: 0.6,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 75%",
        toggleActions: "play none none reverse",
      },
    });

    // 🎬 Animate video block with 3D effect
    gsap.from(videoRef.current, {
      opacity: 0,
      scale: 0.9,
      rotationY: 15,
      transformOrigin: "center center",
      duration: 1.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
        toggleActions: "play none none reverse",
      },
    });

    // Modal animation when it appears
    if (isOpen && modalRef.current) {
      gsap.fromTo(
        modalRef.current,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.5, ease: "power2.out" }
      );
    }
  }, [isOpen]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-20 px-6 md:px-12 lg:px-24 bg-gray-100 overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100 rounded-full opacity-30 -mr-32 -mt-32"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-red-100 rounded-full opacity-30 -ml-24 -mb-24"></div>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center relative z-10">
        {/* Left Side - Text & Subscribe */}
        <div className="space-y-6">
          <h2
            ref={titleRef}
            className="text-4xl font-bold text-gray-900 relative"
          >
            Our Mission
            <span className="absolute -bottom-2 left-0 w-16 h-1 bg-red-500"></span>
          </h2>
          <p
            ref={paragraphRef}
            className="text-lg text-gray-700 leading-relaxed"
          >
            At VisionSecret Digital, we strive to create innovative and engaging
            digital experiences. Join our journey to revolutionize web design,
            UI/UX, branding, and marketing through cutting-edge technology and
            creative solutions.
          </p>
          <button
            ref={buttonRef}
            className="px-8 py-3 bg-red-500 text-white font-semibold rounded-full shadow-lg hover:bg-red-600 transition-all transform hover:scale-105 hover:shadow-xl"
            aria-label="Subscribe to our newsletter"
          >
            SUBSCRIBE NOW
          </button>
        </div>

        {/* Right Side - Video Section */}
        <div
          ref={videoRef}
          className="relative group cursor-pointer transform transition-all duration-500 hover:translate-y-[-5px]"
        >
          {/* Video Thumbnail */}
          <div
            className="relative w-full h-50 md:h-80 bg-gray-800 rounded-xl overflow-hidden shadow-lg"
            onClick={() => setIsOpen(true)}
          >
            {/* Placeholder Image */}
            <img
              src="/images/thumbnail.png"
              alt="Video Thumbnail"
              className="w-full h-full object-contain opacity-80 group-hover:opacity-100 transition-all duration-500"
            />
            {/* Play Button Icon */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white p-4 rounded-full shadow-xl transform transition-all duration-300 hover:scale-110 group-hover:bg-red-500">
                <FaPlay className="text-blue-600 text-3xl group-hover:text-white transition-colors duration-300" />
              </div>
            </div>
            {/* Video Overlay Text */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white font-medium">Watch our story</p>
            </div>
          </div>
        </div>
      </div>

      {/* Fullscreen Video Modal */}
      {isOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex items-center justify-center z-50 px-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) setIsOpen(false);
          }}
        >
          <div ref={modalRef} className="relative w-full max-w-4xl">
            {/* YouTube Iframe */}
            <div className="relative w-full aspect-video bg-gray-900 rounded-lg shadow-2xl overflow-hidden">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/g3hD2CVZIew?autoplay=1"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>

            {/* Close Button */}
            <button
              className="absolute top-3 right-3 text-white text-3xl bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-80 transition-all hover:rotate-90 duration-300 z-40"
              onClick={() => setIsOpen(false)}
              aria-label="Close video"
            >
              ✖
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default OurMission;

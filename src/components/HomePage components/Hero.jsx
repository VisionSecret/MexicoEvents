import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  // Create refs for each element
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const speakerInfoRef = useRef(null);
  const ctaButtonsRef = useRef(null);
  const imageRef = useRef(null);

  useGSAP(() => {
    // Create GSAP timeline with ScrollTrigger
    const tl = gsap.timeline();

    // Animate each element sequentially
    tl.from(headingRef.current, {
      x: -100,
      opacity: 0,
      duration: 1,
      ease: "power2.in",
    })
      .from(
        paragraphRef.current,
        { opacity: 0, y: 30, duration: 0.8, ease: "power2.in" },
        "-=0.5"
      )
      .from(
        speakerInfoRef.current,
        { opacity: 0, y: 30, duration: 0.8, ease: "power2.in" },
        "-=0.5"
      )
      .from(
        ctaButtonsRef.current,
        { opacity: 0, y: 30, duration: 0.8, ease: "power2.in" },
        "-=0.5"
      )
      .from(
        imageRef.current,
        { opacity: 0, x: 100, duration: 0.8, ease: "power2.in" },
        "-=0.5"
      );
  }, []);

  return (
    <div className="relative bg-gradient-to-r from-gray-50 to-gray-100 pt-40 pb-10 md:py-32 px-6 md:px-12 lg:px-24 overflow-x-hidden">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="max-w-2xl">
            <span className="inline-block bg-blue-600 text-white text-xs px-3 py-1 rounded-full uppercase tracking-widest animate-bounce">
              2025 Event Series
            </span>
            <h1
              ref={headingRef}
              className="mt-8 mb-6 text-4xl md:text-5xl font-bold leading-tighter"
            >
              Embracing the Future: <br />
              <span ref={headingRef} className="text-blue-600">
                Challenges and Changes
              </span>{" "}
              of a New Era
            </h1>
            <p ref={paragraphRef} className="text-sm text-gray-600 mb-8">
              Join us for an exclusive event where industry leaders and
              innovators come together to discuss the future of digital
              transformation. Discover groundbreaking insights, network with
              professionals, and explore the latest trends shaping our world.
            </p>

            {/* Speaker Info */}
            <div
              ref={speakerInfoRef}
              className="speaker-info flex items-center gap-4 mb-8"
            >
              <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                <img
                  className="rounded-full w-12 h-12 object-cover"
                  src="/images/HomePage/profile.png"
                  alt="Profile"
                />
              </div>
              <div>
                <h2 className="text-xl font-semibold">Rodrigo Pacheco</h2>
                <p className="text-sm text-gray-500">
                  Financial Analyst & Business Journalist
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div
              ref={ctaButtonsRef}
              className="cta-buttons flex flex-col md:flex-row gap-4"
            >
              <button className="w-full md:w-auto px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all transform hover:scale-105 animate-pulse hover:animate-none z-40">
                SEE MORE
              </button>
              <button className="w-full md:w-auto px-8 py-3 bg-white text-blue-600 border border-blue-600 rounded-full hover:bg-blue-50 transition-all transform hover:scale-105 z-40">
                REGISTER NOW
              </button>
            </div>
          </div>

          {/* Right Side - Image Placeholder */}
          <div className="hidden md:block">
            <div
              ref={imageRef}
              className="hero-image rounded-xl h-[400px] w-full flex items-center justify-center"
            >
              <img
                src="/images/HomePage/heroImage.png"
                alt="Event"
                className="object-cover object-center rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

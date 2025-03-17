import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Join = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const paraRef = useRef(null);
  const buttonRef = useRef(null);
  const overlayRef = useRef(null);

  useGSAP(() => {
    // 🌟 Animate the background overlay
    gsap.fromTo(
      overlayRef.current,
      { opacity: 0 },
      {
        opacity: 0.2,
        duration: 1.5,
        ease: "power2.out",
      }
    );

    // ✨ Heading Animation (Slow Scroll)
    gsap.from(headingRef.current, {
      opacity: 0,
      y: 80, // Increased distance for smoother effect
      duration: 1.5,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%", // Trigger earlier for a natural effect
        scrub: 1, // Makes animation dependent on scroll speed
      },
    });

    // 🔹 Paragraph Animation (Scroll Delay)
    gsap.from(paraRef.current, {
      opacity: 0,
      y: 60,
      duration: 1.5,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 75%",
        scrub: 1,
      },
    });

    // 🔘 Button Animation (Bouncy & Slow)
    gsap.from(buttonRef.current, {
      opacity: 0,
      scale: 0.8,
      duration: 1.2,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
        scrub: 1.5, // Slower, makes it feel smoother
      },
    });
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative py-20 px-6 md:px-12 lg:px-24 bg-gradient-to-br from-blue-600 to-purple-600 overflow-hidden"
    >
      {/* Floating Shapes (Animated) */}
      <div
        ref={overlayRef}
        className="absolute top-0 left-0 w-full h-full bg-blue-900 opacity-20 mix-blend-overlay pointer-events-none"
      ></div>

      <div className="container mx-auto text-center relative z-10">
        {/* Section Title */}
        <h2
          ref={headingRef}
          className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg mb-6"
        >
          Ready to Join Us?
        </h2>

        {/* Description */}
        <p
          ref={paraRef}
          className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto mb-8"
        >
          Don't miss out on this transformative event. Register now and secure
          your spot!
        </p>

        {/* CTA Button */}
        <button
          ref={buttonRef}
          className="px-8 py-4 text-lg font-semibold bg-white text-blue-600 rounded-full shadow-lg hover:bg-blue-50 transition-all transform hover:scale-105 hover:shadow-xl z-40"
        >
          REGISTER NOW
        </button>
      </div>
    </div>
  );
};

export default Join;

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaTools } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const NotFound = () => {
  const textRef = useRef(null);
  const iconRef = useRef(null);
  const buttonRef = useRef(null);
  const navigate = useNavigate();

  useGSAP(() => {
    // Animate 404 text
    gsap.from(textRef.current, {
      opacity: 0,
      y: -20,
      duration: 1.5,
      ease: "power3.out",
    });

    // Animate icon
    gsap.from(iconRef.current, {
      opacity: 0,
      rotate: -180,
      duration: 1.2,
      delay: 0.2,
      ease: "back.out(1.7)",
    });

    // Animate button
    gsap.from(buttonRef.current, {
      y: 20,
      duration: 1,
      delay: 0.4,
      ease: "power3.out",
    });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white text-zinc-800 text-center p-6">
      {/* 404 Neon Text */}
      <h1
        ref={textRef}
        className="text-7xl md:text-9xl font-extrabold tracking-wide text-indigo-500 neon-glow"
      >
        404
      </h1>

      {/* Under Development Icon */}
      <div ref={iconRef} className="mt-4 text-yellow-400 text-6xl md:text-7xl">
        <FaTools />
      </div>

      {/* Message */}
      <p className="mt-6 text-lg md:text-xl text-gray-700 max-w-lg">
        Oops! This page is{" "}
        <span className="text-yellow-400">under development</span>. We're
        working hard to build something amazing! 🚀
      </p>

      {/* Return Button */}
      <button
        ref={buttonRef}
        onClick={() => navigate("/")}
        className="mt-8 px-6 py-3 bg-indigo-600 text-white text-lg font-semibold rounded-full shadow-lg hover:bg-indigo-700 transition-all transform hover:scale-105"
      >
        Go Home
      </button>
    </div>
  );
};

export default NotFound;

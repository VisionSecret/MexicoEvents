import React, { useRef, useEffect } from "react";
import {
  FaLightbulb,
  FaUsers,
  FaChalkboardTeacher,
  FaMicrophone,
  FaHandshake,
  FaGlobe,
} from "react-icons/fa";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Card = () => {
  const cardRefs = useRef([]);

  useGSAP(() => {
    cardRefs.current.forEach((card) => {
      gsap.from(card, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });
    });

    gsap.from(".heading", {
      x: -100,
      opacity: 0,
      duration: 1,
      ease: "power2.in",
      scrollTrigger: {
        trigger: ".heading",
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
    });
  }, []);

  const cardInfo = [
    {
      title: "Innovative Sessions",
      description:
        "Explore cutting-edge topics in digital innovation and technology.",
      icon: <FaLightbulb className="text-4xl text-yellow-500" />,
    },
    {
      title: "Networking Opportunities",
      description:
        "Connect with industry leaders and like-minded professionals.",
      icon: <FaUsers className="text-4xl text-blue-500" />,
    },
    {
      title: "Exclusive Workshops",
      description: "Hands-on sessions to enhance your skills and knowledge.",
      icon: <FaChalkboardTeacher className="text-4xl text-green-500" />,
    },
    {
      title: "Expert Speakers",
      description:
        "Gain insights from top industry experts and thought leaders.",
      icon: <FaMicrophone className="text-4xl text-red-500" />,
    },
    {
      title: "Business Collaborations",
      description: "Create partnerships that drive growth and success.",
      icon: <FaHandshake className="text-4xl text-purple-500" />,
    },
    {
      title: "Global Exposure",
      description: "Engage with international professionals and companies.",
      icon: <FaGlobe className="text-4xl text-orange-500" />,
    },
  ];

  return (
    <div className="min-h-screen py-16 md:py-28 px-6 md:px-12 lg:px-24">
      <div className="container mx-auto text-center">
        <h2 className="heading text-3xl md:text-4xl font-bold mb-12 md:mb-24">
          Event Advantages
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14">
          {cardInfo.map((item, index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              className="bg-gray-50 p-6 rounded-xl shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:bg-blue-50 cursor-context-menu"
            >
              <div className="flex items-center space-x-4 mb-4">
                {item.icon}
                <h3 className="text-xl font-semibold">{item.title}</h3>
              </div>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;

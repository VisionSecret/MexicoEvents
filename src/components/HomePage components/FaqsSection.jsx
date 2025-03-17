import { useGSAP } from "@gsap/react";
import { useRef, useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    question: "What is the purpose of this event?",
    answer:
      "This event is designed to bring together industry leaders, professionals, and enthusiasts to discuss the latest trends and insights.",
  },
  {
    question: "How can I register for the event?",
    answer:
      "You can register by clicking the 'Register Now' button on our website and following the simple steps.",
  },
  {
    question: "Is there a refund policy?",
    answer:
      "Yes, we offer a full refund if you cancel within 14 days of your purchase. Terms and conditions apply.",
  },
  {
    question: "What should I bring to the event?",
    answer:
      "Bring your registration confirmation, a valid ID, and any materials you need for networking or taking notes.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const faqsRef = useRef([]);
  const containerRef = useRef(null);
  const headingRef = useRef(null);
  const paraRef = useRef(null);

  useGSAP(() => {
    // 🔹 Animate FAQ items
    faqsRef.current.forEach((item, index) => {
      if (item) {
        gsap.from(item, {
          y: 50,
          opacity: 0,
          duration: 0.8,
          delay: index * 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });
      }
    });

    // 🔹 Animate heading
    if (headingRef.current) {
      gsap.from(headingRef.current, {
        x: -100,
        opacity: 0,
        duration: 1,
        ease: "power2.in",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });
    }

    // 🔹 Animate paragraph
    if (paraRef.current) {
      gsap.from(paraRef.current, {
        y: -70,
        opacity: 0,
        duration: 1,
        ease: "power2.in",
        scrollTrigger: {
          trigger: paraRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });
    }
  }, []);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="py-14 md:py-20 px-6 md:px-12 lg:px-24 bg-gradient-to-br from-[#F9FAFB] to-[#f7fafc] text-zinc-800">
      {/* 📌 Container */}
      <div ref={containerRef} className="container mx-auto max-w-3xl">
        {/* 📌 Title Section */}
        <h2
          ref={headingRef}
          className="text-4xl md:text-5xl font-bold text-center mb-8"
        >
          Frequently Asked Questions
        </h2>
        <p ref={paraRef} className="text-lg text-gray-500 text-center mb-10">
          Here are some of the most common questions we receive.
        </p>

        {/* 📌 FAQ List */}
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              ref={(el) => (faqsRef.current[index] = el)}
              className="bg-white text-gray-900 rounded-lg shadow-md p-6 cursor-pointer transition-all duration-300 hover:shadow-lg"
              onClick={() => toggleFAQ(index)}
            >
              {/* 🔹 Question Section */}
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">{faq.question}</h3>
                {openIndex === index ? (
                  <FaChevronUp className="text-blue-600" />
                ) : (
                  <FaChevronDown className="text-blue-600" />
                )}
              </div>

              {/* 🔹 Answer Section with Smooth Animation */}
              <div
                className={`transition-all duration-300 overflow-hidden ${
                  openIndex === index
                    ? "max-h-40 mt-3 text-gray-700 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;

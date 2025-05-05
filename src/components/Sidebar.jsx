import { useRef } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const Sidebar = ({ menuOpen, setMenuOpen, navLinks }) => {
  const listRef = useRef(null);

  useGSAP(() => {
    if (menuOpen && listRef.current) {
      gsap.fromTo(
        listRef.current.children,
        { opacity: 0, x: 100 },
        { opacity: 1, x: 0, stagger: 0.2, duration: 1.4, ease: "power2.inOut" }
      );
    }
  }, [menuOpen]);

  return (
    <>
      {/* Mobile Hamburger */}
      <button
        className="md:hidden text-gray-800 text-3xl focus:outline-none z-50"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-white bg-opacity-95 flex flex-col justify-between px-8 py-12 transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close Button */}
        <button
          className="absolute top-6 right-6 text-gray-800 text-3xl focus:outline-none z-40"
          onClick={() => setMenuOpen(false)}
        >
          <FaTimes />
        </button>

        {/* Mobile Navigation Links */}
        <ul
          ref={listRef}
          className="flex flex-col items-start space-y-6 text-3xl font-semibold"
        >
          {navLinks.map((link, index) => (
            <li key={link.path} className="opacity-0">
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `relative font-medium text-3xl transition-all duration-300 group ${
                    isActive
                      ? "text-[#5F3DD3] scale-105"
                      : "text-gray-700 hover:text-[#5F3DD3]"
                  }`
                }
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile CTA Buttons */}
        <div className="flex flex-col gap-4">
          <button className="w-full px-6 py-3 text-[#5F3DD3] font-semibold bg-gradient-to-r from-purple-50 to-blue-50 border-2 border-[#5F3DD3] rounded-full hover:bg-gradient-to-r hover:from-purple-100 hover:to-blue-100 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-[#5F3DD3]/30 active:scale-95 animate-bounce z-40">
            SEE MORE
          </button>

          <button className="w-full px-6 py-3 text-white font-semibold bg-gradient-to-r from-[#5F3DD3] to-[#502dc3] rounded-full hover:bg-gradient-to-r hover:from-[#4E2DB3] hover:to-[#4c27b9] transition-all duration-300 transform hover:scale-105 hover:shadow-md hover:shadow-[#5F3DD3]/60 active:scale-95 animate-pulse z-40">
            REGISTER
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;

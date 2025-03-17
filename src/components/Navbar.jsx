import { useState, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Sidebar from "./Sidebar";

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const listRef = useRef(null);
  const buttonsRef = useRef(null); // Create a ref for buttons

  const navLinks = [
    { name: "Start", path: "/" },
    { name: "Us", path: "/us" },
    { name: "Conferences", path: "/conferences" },
    { name: "Memberships", path: "/memberships" },
    { name: "Partners", path: "/partners" },
    { name: "Suppliers", path: "/suppliers" },
    { name: "Contact", path: "/contact" },
  ];

  useGSAP(() => {
    const tl = gsap.timeline();

    if (listRef.current) {
      tl.fromTo(
        listRef.current.children,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.2,
          duration: 1.2,
          ease: "power2.inOut",
        },
        0.4 // Start at 0.5 seconds
      );
    }

    if (buttonsRef.current) {
      tl.fromTo(
        buttonsRef.current.children,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          stagger: 0.3,
          duration: 1,
          ease: "power3.out",
        },
        0.8 // Start at 1 second
      );
    }
  }, []);

  return (
    <nav className="fixed top-0 right-0 w-full z-50 bg-white/10 backdrop-blur-md border-b border-white/20 shadow-lg">
      <div className="h-20 flex items-center justify-between px-6 md:px-12">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src="/images/ampidLogo.png"
            alt="logo"
            className="h-12 w-auto object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <ul ref={listRef} className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <li key={link.path} className="opacity-0 relative">
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `relative font-medium text-sm transition-all duration-300 group ${
                    isActive
                      ? "text-[#5F3DD3]"
                      : "text-zinc-800 hover:text-[#5F3DD3]"
                  }`
                }
              >
                {link.name}
                <span
                  className={`absolute left-0 bottom-0 h-0.5 bg-[#5F3DD3] transition-all duration-300 w-0 group-hover:w-full`}
                ></span>
              </NavLink>
            </li>
          ))}
        </ul>

        <Sidebar
          navLinks={navLinks}
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
        />

        {/* Desktop CTA Buttons */}
        <div ref={buttonsRef} className="hidden md:flex items-center gap-4">
          <button className="px-6 py-2 text-[#5F3DD3] font-semibold bg-white backdrop-blur-md border border-[#5F3DD3] rounded-full hover:bg-white transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-[#5F3DD3]/30 active:scale-95 z-40">
            SEE MORE
          </button>

          <button className="px-8 py-2.5 text-white font-semibold bg-[#5F3DD3] rounded-full hover:bg-[#4E2DB3] transition-all duration-300 transform hover:scale-105 hover:shadow-md hover:shadow-[#5F3DD3]/60 active:scale-95 z-40">
            REGISTER
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

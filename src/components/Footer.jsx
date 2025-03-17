import { NavLink } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import { MdMail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-[#F1F1F1] text-gray-800 pt-14 pb-6 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Left Section - Logo & About */}
        <div>
          <img src="/images/ampidLogo.png" alt="AMPID Logo" className="w-48 mb-6" />
          <p className="text-gray-600 text-sm leading-relaxed max-w-[90%] md:max-w-[70%] text-justify">
            La Asociación Mexicana de Profesionales en Innovación Digital (AMPID),
            fue fundada en 1984 con la finalidad de integrar a Profesionales para
            el intercambio de conocimientos en la comunidad de Informática.
          </p>
        </div>

        {/* Middle Section - Navigation Links */}
        <div className="flex flex-col space-y-3">
          <h3 className="font-semibold text-gray-800 text-xl mb-2">Navegación</h3>

          {[
            { name: "Inicio", path: "/" },
            { name: "Nosotros", path: "/nosotros" },
            { name: "Conferencias", path: "/conferencias" },
            { name: "Membresías", path: "/membresias" },
            { name: "Socios", path: "/socios" },
            { name: "Contacto", path: "/contacto" },
          ].map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `relative text-sm md:text-sm  uppercase font-medium transition-all duration-300 block w-fit
                 ${isActive ? "text-blue-600 font-bold" : "text-zinc-800 hover:text-blue-600"}`
              }
            >
              <span className="relative">
                {link.name}
                {/* Left-Side Animated Line */}
                <span className="absolute left-0 bottom-0 h-0.5 bg-blue-600 transition-all duration-300 w-0 hover:w-full"></span>
              </span>
            </NavLink>
          ))}
        </div>

        {/* Right Section - Newsletter & Social Media */}
        <div>
          <h3 className="font-semibold text-gray-800 text-xl mb-3">Suscríbete</h3>
          <p className="text-gray-600 text-sm mb-4">
            Recibe información sobre nuestras próximas conferencias.
          </p>

          {/* Email Input */}
          <div className="relative">
            <input
              type="email"
              placeholder="correo@dominio.com"
              className="w-full px-4 py-2 border border-gray-400 rounded-lg text-gray-700 outline-none focus:ring-2 focus:ring-blue-500 z-0"
            />
          </div>

          {/* Subscribe Button */}
          <button className="mt-3 w-full py-2 text-white font-semibold rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition">
            SUSCRIBIRME
          </button>

          {/* Social Icons */}
          <div className="mt-6">
            <h3 className="font-semibold text-gray-800 text-lg mb-3">Social</h3>
            <div className="flex gap-4 text-xl text-gray-700">
              {[
                { icon: <FaFacebookF />, link: "#", color: "hover:text-blue-600" },
                { icon: <FaTwitter />, link: "#", color: "hover:text-blue-500" },
                { icon: <FaLinkedinIn />, link: "#", color: "hover:text-blue-700" },
                { icon: <FaInstagram />, link: "#", color: "hover:text-pink-500" },
                { icon: <FaWhatsapp />, link: "#", color: "hover:text-green-500" },
              ].map((social, index) => (
                <a key={index} href={social.link} className={`transition ${social.color}`}>
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-300 mt-10 pt-4 text-center text-sm text-gray-600">
        <p>
          Aviso de Privacidad AMPID{" "}
          <span className="text-zinc-800">© {new Date().getFullYear()}</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

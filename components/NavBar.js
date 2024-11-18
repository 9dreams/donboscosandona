import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaHome,
  FaInfoCircle,
  FaServicestack,
  FaPhone,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const Navbar2 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const links = [
    { label: "Home", icon: <FaHome />, href: "#home" },
    { label: "Chi siamo", icon: <FaInfoCircle />, href: "#chi-siamo" },
    { label: "Laboratori", icon: <FaServicestack />, href: "#laboratori" },
    { label: "Contattaci", icon: <FaPhone />, href: "#contattaci" },
  ];

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 text-gray-800 rounded-xl px-4 mt-4 shadow-md backdrop-blur-lg bg-opacity-70 bg-white border-2 border-gray-400 mx-4 md:mx-auto max-w-screen-xl"
      style={{
        marginTop: "20px",
      }}
    >
      <div className="flex justify-between items-center h-20 px-6 mx-auto">
        <div className="flex items-center">
          {/* Aggiungi il logo senza Link di Next.js */}
          <motion.img
            src="/images/logo_anffas_no_background.png"
            alt="Logo"
            className="h-12 w-auto"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          />
        </div>
        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6">
          {links.map((item) => (
            <motion.li
              key={item.label}
              className="flex items-center space-x-2 hover:text-green-500 transition-all duration-200"
              whileHover={{ scale: 1.1, color: "#223E91" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2, delay: 0.05 }}
            >
              <a href={item.href} className="flex items-center space-x-2">
                {item.icon}
                <span>{item.label}</span>
              </a>
            </motion.li>
          ))}
        </div>
        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Toggle Menu"
          >
            {isOpen ? (
              <FaTimes className="w-6 h-6" />
            ) : (
              <FaBars className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Links */}
      <motion.div
        className={`md:hidden ${isOpen ? "block" : "hidden"}`}
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: isOpen ? 1 : 0,
          height: isOpen ? "auto" : 0,
          transition: { duration: 0.3, ease: "easeInOut" },
        }}
        exit={{
          opacity: 0,
          height: 0,
          transition: { duration: 0.3, ease: "easeInOut" },
        }}
        style={{ overflow: "hidden" }}
      >
        <ul className="flex flex-col items-center space-y-4">
          {links.map((item) => (
            <li key={item.label} className="flex items-center space-x-3">
              <a
                href={item.href}
                className="block px-8 py-2 hover:text-green-500 transition duration-200 flex items-center space-x-3"
                onClick={toggleMenu}
              >
                <span>{item.icon}</span>
                <span className="text-lg font-medium">{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </motion.div>
    </nav>
  );
};

export default Navbar2;

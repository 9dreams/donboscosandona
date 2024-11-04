import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const Navbar2 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 text-white shadow-lg">
      <div className="flex justify-between items-center h-20 px-6">
        <div className="flex items-center">
          <Link href="/">
            <img
              src="https://lh6.googleusercontent.com/proxy/oB-C1yTTEIvCEBRz_5dj7s7WhvPVWE4K2C8MG6iKieYD3YGrLKkp4Lv2P9eJNG6uiCff_RXkYhYKkdaD"
              alt="Logo"
              className="h-10"
            />
          </Link>
        </div>
        <div className="hidden md:block">
          <ul className="flex space-x-6">
            {["Home", "About", "Services", "Contact"].map((item) => (
              <li key={item}>
                <Link
                  href={`/${item.toLowerCase()}`}
                  className="hover:text-green-400 py-4 transition duration-300"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Toggle Menu"
          >
            <motion.svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              initial={{ rotate: 0 }}
              animate={{ rotate: isOpen ? 45 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isOpen ? (
                <motion.path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                  initial={{ opacity: 1 }}
                  animate={{ opacity: isOpen ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />
              ) : (
                <motion.path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </motion.svg>
          </button>
        </div>
      </div>

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
        <ul className="flex flex-col items-center space-y-2 bg-gray-700 py-4">
          {["Home", "About", "Services", "Contact"].map((item) => (
            <li key={item}>
              <Link
                href={`/${item.toLowerCase()}`}
                className="block px-6 py-2 hover:text-green-400 transition duration-300"
                onClick={toggleMenu}
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </motion.div>
    </nav>
  );
};

export default Navbar2;

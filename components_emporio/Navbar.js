import { useState, useEffect } from 'react';
import { Search, Menu, Close } from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Home Page', link: '/', class: 'text-[#C7AE6A]' },
    { name: 'Chi Siamo', link: 'chisiamo', class: 'text-white' },
    { name: 'Dove Siamo', link: 'dovesiamo', class: 'text-white' },
    { name: 'Trasparenza', link: 'trasparenza', class: 'text-white' },
    { name: 'Servizi', link: 'servizi', class: 'text-white' },
    { name: 'Documenti', link: 'documenti', class: 'text-white' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#780202] shadow-lg' : 'bg-[#780202]/95'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex-shrink-0"
          >
            <img
              src="/images/Logo_emporio.png"
              className="h-14 w-auto md:h-16 md:w-auto object-cover"
              alt="Logo Emporio"
            />
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item, index) => (
              <motion.a
                key={index}
                href={item.link}
                whileHover={{ scale: 1.1 }}
                className={`${item.class} font-semibold text-sm transition-colors duration-200 hover:text-[#C7AE6A]`}
              >
                {item.name}
              </motion.a>
            ))}
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex items-center">
            <div className="relative">
              <input
                type="text"
                placeholder="Cerca..."
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setIsSearchFocused(false)}
                className={`pl-10 pr-4 py-2 rounded-full bg-[#8f1d1d] text-white placeholder-white/70 outline-none transition-all duration-300 ${
                  isSearchFocused ? 'w-64 ring-2 ring-[#C7AE6A]' : 'w-48'
                }`}
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/70" />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white p-2 rounded-lg hover:bg-[#8f1d1d] transition-colors duration-200"
            >
              {isMenuOpen ? <Close /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#8f1d1d]"
          >
            <div className="px-4 pt-2 pb-6 space-y-3">
              {menuItems.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.link}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className={`block py-2 px-4 rounded-lg ${item.class} font-medium hover:bg-[#780202] transition-colors duration-200`}
                >
                  {item.name}
                </motion.a>
              ))}
              
              {/* Mobile Search */}
              <div className="relative mt-4 px-4">
                <input
                  type="text"
                  placeholder="Cerca..."
                  className="w-full pl-10 pr-4 py-2 rounded-full bg-[#780202] text-white placeholder-white/70 outline-none"
                />
                <Search className="absolute left-7 top-1/2 transform -translate-y-1/2 text-white/70" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

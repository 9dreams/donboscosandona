import { useState, useEffect } from 'react';
import { Search, Menu, Close } from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';

export default function Navbar() {
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchTerm.trim())}`);
      setSearchTerm('');
      setIsMenuOpen(false);
    }
  };

  const menuItems = [
    { name: 'Home Page', link: '/', class: 'text-white' },
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
        isScrolled ? 'bg-[#780202] shadow-lg' : 'bg-[#780202]'
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
          <div className="hidden md:flex flex-1 justify-center items-center space-x-8">
            {menuItems.map((item, index) => {
              const isActive =
                (item.link === '/' && router.pathname === '/') ||
                (item.link !== '/' && router.pathname === `/${item.link}`);
              return (
                <motion.a
                  key={index}
                  href={item.link}
                  whileHover={{ scale: 1.1 }}
                  className={`${
                    isActive
                      ? 'text-[#C7AE6A]'
                      : item.class
                  } font-semibold text-sm transition-colors duration-200 hover:text-[#C7AE6A]`}
                >
                  {item.name}
                </motion.a>
              );
            })}
          </div>

          {/* Search Bar */}
          {/*
          <div className="hidden md:flex items-center">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Cerca..."
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setIsSearchFocused(false)}
                className={`pl-10 pr-4 py-2 rounded-full bg-[#8f1d1d] text-white placeholder-white/70 outline-none transition-all duration-300 ${
                  isSearchFocused ? 'w-64 ring-2 ring-[#C7AE6A]' : 'w-48'
                }`}
              />
              <button
                type="submit"
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/70 hover:text-white transition-colors duration-200"
              >
                <Search />
              </button>
            </form>
          </div>
          */}

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
              {menuItems.map((item, index) => {
                const isActive =
                  (item.link === '/' && router.pathname === '/') ||
                  (item.link !== '/' && router.pathname === `/${item.link}`);
                return (
                  <motion.a
                    key={index}
                    href={item.link}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className={`block py-2 px-4 rounded-lg ${
                      isActive
                        ? 'text-[#C7AE6A]'
                        : item.class
                    } font-medium hover:bg-[#780202] transition-colors duration-200`}
                  >
                    {item.name}
                  </motion.a>
                );
              })}
              
              {/* Mobile Search */}
              {/*
              <form onSubmit={handleSearch} className="relative mt-4 px-4">
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Cerca..."
                  className="w-full pl-10 pr-4 py-2 rounded-full bg-[#780202] text-white placeholder-white/70 outline-none"
                />
                <button
                  type="submit"
                  className="absolute left-7 top-1/2 transform -translate-y-1/2 text-white/70 hover:text-white transition-colors duration-200"
                >
                  <Search />
                </button>
              </form>
              */}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

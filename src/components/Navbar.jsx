import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { MdDarkMode, MdLightMode } from 'react-icons/md';
import { FiGlobe, FiMenu, FiX } from 'react-icons/fi';

const languages = [
  { code: 'fr', label: 'FR' },
  { code: 'en', label: 'EN' },
  { code: 'ar', label: 'AR' },
];

export default function Navbar() {
  const { t, i18n } = useTranslation();
  
  const navLinks = [
    { label: t('nav.home', 'Accueil'), to: '#home' },
    { label: t('nav.about', 'À propos'), to: '#about' },
    { label: t('nav.formation', 'Formation'), to: '#parcours' },
    { label: t('nav.skills', 'Compétences'), to: '#skills' },
    { label: t('nav.projects', 'Projets'), to: '#projects' },
    { label: t('nav.contact', 'Contact'), to: '#contact' },
  ];

  const [isDark, setIsDark] = useState(() => document.documentElement.classList.contains('dark'));
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('#home');
  const [hoveredLink, setHoveredLink] = useState(null);
  const [hoveredMobileLink, setHoveredMobileLink] = useState(null);

  // Theme toggle
  const toggleTheme = () => {
    setIsDark((prev) => {
      document.documentElement.classList.toggle('dark');
      return !prev;
    });
  };

  // Language change
  const handleLang = (code) => {
    i18n.changeLanguage(code);
    setLangOpen(false);
  };

  // Active link check
  const getActive = (to) => window.location.hash === to || activeLink === to;

  // Handle link click
  const handleLinkClick = (to) => {
    setActiveLink(to);
    setMenuOpen(false);
    setHoveredLink(null); // Clear hover state on click
    setHoveredMobileLink(null); // Clear mobile hover state on click
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="fixed top-0 left-0 w-full z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-2xl border-b border-gray-200/30 dark:border-gray-700/30 shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo - Extrême gauche */}
          <motion.a
            href="#home"
            className="flex items-center text-2xl lg:text-3xl font-black tracking-tight bg-gradient-to-r from-[#007BFF] via-[#0056CC] to-[#00C896] bg-clip-text text-transparent select-none relative group"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
          >
            {'<ABK/>'}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-[#007BFF]/10 to-[#00C896]/10 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
              initial={{ scale: 0.8 }}
              whileHover={{ scale: 1.2 }}
            />
          </motion.a>

          {/* Navigation Links - Centre (Desktop uniquement) */}
          <div className="hidden lg:flex items-center justify-center flex-1 mx-8">
            <div className="flex items-center space-x-2 bg-gray-50/80 dark:bg-gray-800/50 backdrop-blur-sm rounded-full px-6 py-2 border border-gray-200/50 dark:border-gray-700/50">
              {navLinks.map((link, index) => {
                const isActive = getActive(link.to);
                const isHovered = hoveredLink === link.to;
                
                return (
                  <motion.a
                    key={link.to}
                    href={link.to}
                    onClick={() => handleLinkClick(link.to)}
                    onMouseEnter={() => setHoveredLink(link.to)}
                    onMouseLeave={() => setHoveredLink(null)}
                    className={`relative px-4 py-2.5 text-sm font-bold rounded-full transition-all duration-300 ${
                      isActive
                        ? 'text-white bg-gradient-to-r from-[#007BFF] to-[#00C896] shadow-lg shadow-blue-500/25'
                        : isHovered
                          ? 'text-[#007BFF] dark:text-[#00C896] bg-white/90 dark:bg-gray-700/90 scale-105'
                          : 'text-gray-600 dark:text-gray-400'
                    }`}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="relative z-10">{link.label}</span>
                    
                    {/* Effet glow pour lien actif uniquement */}
                    {isActive && (
                      <motion.div
                        className="absolute inset-0 rounded-full bg-gradient-to-r from-[#007BFF]/30 to-[#00C896]/30 blur-lg"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1.3, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                      />
                    )}
                    
                    {/* Effet hover léger pour liens inactifs */}
                    {!isActive && isHovered && (
                      <motion.div
                        className="absolute inset-0 rounded-full bg-gradient-to-r from-[#007BFF]/10 to-[#00C896]/10"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      />
                    )}
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Contrôles droite */}
          <div className="flex items-center space-x-3">
            
            {/* Theme Toggle */}
            <motion.button
              onClick={toggleTheme}
              className="relative p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gradient-to-r hover:from-[#007BFF]/10 hover:to-[#00C896]/10 hover:text-[#007BFF] dark:hover:text-[#00C896] transition-all duration-300 border border-gray-200/50 dark:border-gray-700/50 group overflow-hidden"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <motion.div
                animate={{ rotate: isDark ? 360 : 0 }}
                transition={{ duration: 0.6, ease: 'easeInOut' }}
              >
                {isDark ? <MdLightMode size={20} /> : <MdDarkMode size={20} />}
              </motion.div>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#007BFF]/20 to-[#00C896]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"
              />
            </motion.button>

            {/* Language Selector */}
            <div className="relative">
              <motion.button
                onClick={() => setLangOpen(!langOpen)}
                className="relative flex items-center gap-2 px-4 py-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gradient-to-r hover:from-[#00C896]/10 hover:to-[#007BFF]/10 hover:text-[#00C896] dark:hover:text-[#007BFF] transition-all duration-300 border border-gray-200/50 dark:border-gray-700/50 group overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  animate={{ rotate: langOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <FiGlobe size={18} />
                </motion.div>
                <span className="font-bold text-sm">{languages.find((l) => l.code === i18n.language)?.label}</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#00C896]/20 to-[#007BFF]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"
                />
              </motion.button>
              
              <AnimatePresence>
                {langOpen && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: -15 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: -15 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="absolute right-0 mt-3 w-28 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl rounded-2xl shadow-xl border border-gray-200/50 dark:border-gray-700/50 overflow-hidden"
                  >
                    {languages.map((l, index) => (
                      <motion.button
                        key={l.code}
                        onClick={() => handleLang(l.code)}
                        className={`w-full text-left px-4 py-3 text-sm font-semibold transition-all duration-300 hover:bg-gradient-to-r hover:from-[#00C896]/10 hover:to-[#007BFF]/10 ${
                          i18n.language === l.code 
                            ? 'text-[#007BFF] dark:text-[#00C896] bg-gradient-to-r from-[#007BFF]/5 to-[#00C896]/5' 
                            : 'text-gray-700 dark:text-gray-300 hover:text-[#00C896] dark:hover:text-[#007BFF]'
                        }`}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ x: 6 }}
                      >
                        {l.label}
                      </motion.button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Mobile Menu Toggle - Extrême droite (mobile uniquement) */}
            <div className="lg:hidden">
              <motion.button
                onClick={() => setMenuOpen(!menuOpen)}
                className="relative p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gradient-to-r hover:from-[#007BFF]/10 hover:to-[#00C896]/10 hover:text-[#007BFF] dark:hover:text-[#00C896] transition-all duration-300 border border-gray-200/50 dark:border-gray-700/50 group overflow-hidden"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <motion.div
                  animate={{ rotate: menuOpen ? 180 : 0 }}
                  transition={{ duration: 0.4, ease: 'easeInOut' }}
                >
                  {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
                </motion.div>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#007BFF]/20 to-[#00C896]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"
                />
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -20 }}
              animate={{ opacity: 1, height: 'auto', y: 0 }}
              exit={{ opacity: 0, height: 0, y: -20 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              className="lg:hidden border-t border-gray-200/30 dark:border-gray-700/30 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl"
            >
              <div className="py-6 space-y-3">
                {navLinks.map((link, index) => {
                  const isActive = getActive(link.to);
                  const isHovered = hoveredMobileLink === link.to;
                  
                  return (
                    <motion.a
                      key={link.to}
                      href={link.to}
                      onClick={() => handleLinkClick(link.to)}
                      onMouseEnter={() => setHoveredMobileLink(link.to)}
                      onMouseLeave={() => setHoveredMobileLink(null)}
                      className={`relative block px-6 py-4 text-base font-bold rounded-2xl mx-4 transition-all duration-300 ${
                        isActive
                          ? 'text-white bg-gradient-to-r from-[#007BFF] to-[#00C896] shadow-lg shadow-blue-500/20'
                          : isHovered
                            ? 'text-[#007BFF] dark:text-[#00C896] bg-gradient-to-r from-[#007BFF]/10 to-[#00C896]/10 scale-102'
                            : 'text-gray-700 dark:text-gray-300'
                      }`}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 + 0.2 }}
                      whileHover={{ x: 12, scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className="relative z-10">{link.label}</span>
                      
                      {/* Effet glow pour lien actif mobile */}
                      {isActive && (
                        <motion.div
                          className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#007BFF]/30 to-[#00C896]/30 blur-lg -z-10"
                          initial={{ scale: 0.8, opacity: 0 }}
                          animate={{ scale: 1.1, opacity: 1 }}
                          transition={{ duration: 0.5 }}
                        />
                      )}
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
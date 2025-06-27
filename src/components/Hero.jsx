import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { 
  ArrowRight, 
  ArrowDown,
  Code,
  Database,
  Globe,
  Server,
  Layers,
  Cpu
} from 'lucide-react';

// Import profile image
import profileImage from '../assets/images/profile.png';

const colors = [
  "from-[#007BFF] to-[#00C896]",
  "from-[#00C896] to-[#007BFF]",
  "from-[#007BFF] via-[#00C896] to-[#007BFF]",
  "from-[#00C896] via-[#007BFF] to-[#00C896]"
];

const Hero = () => {
  const { t } = useTranslation();
  
  const phrases = [
    t('hero.name', 'Aboukhalil Mohammed Ali'),
    t('hero.role', 'Développeur Fullstack')
  ];

// Technologies stack icons with positions
const techStack = [
  { icon: Code, name: "Frontend", position: { top: "20%", left: "15%" }, delay: 0.2 },
  { icon: Database, name: "Backend", position: { top: "30%", right: "20%" }, delay: 0.4 },
  { icon: Server, name: "Server", position: { bottom: "35%", left: "10%" }, delay: 0.6 },
  { icon: Globe, name: "Web", position: { bottom: "20%", right: "15%" }, delay: 0.8 },
  { icon: Layers, name: "API", position: { top: "15%", right: "35%" }, delay: 1.0 },
  { icon: Cpu, name: "Logic", position: { bottom: "40%", right: "40%" }, delay: 1.2 },
];

// Floating particles
const particles = Array.from({ length: 8 }, (_, i) => ({
  id: i,
  size: Math.random() * 3 + 1,
  x: Math.random() * 100,
  y: Math.random() * 100,
  duration: Math.random() * 20 + 15,
  delay: Math.random() * 5,
}));

function useTypewriter(phrases, typingSpeed = 100, deletingSpeed = 50, pause = 2000) {
  const [displayed, setDisplayed] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [colorIdx, setColorIdx] = useState(0);
  const timeout = useRef();

  useEffect(() => {
    const current = phrases[index % phrases.length];
    if (!isDeleting && displayed.length < current.length) {
      timeout.current = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), typingSpeed);
    } else if (isDeleting && displayed.length > 0) {
      timeout.current = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), deletingSpeed);
    } else if (!isDeleting && displayed.length === current.length) {
      timeout.current = setTimeout(() => setIsDeleting(true), pause);
    } else if (isDeleting && displayed.length === 0) {
      timeout.current = setTimeout(() => {
        setIsDeleting(false);
        setIndex((i) => (i + 1) % phrases.length);
        setColorIdx((c) => (c + 1) % colors.length);
      }, 500);
    }
    return () => clearTimeout(timeout.current);
  }, [displayed, isDeleting, index, phrases, typingSpeed, deletingSpeed, pause]);

  return { displayed, colorIdx };
}

  const { displayed, colorIdx } = useTypewriter(phrases);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Try to load profile image, fallback to placeholder if not found
  const profileImageSrc = profileImage;

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-950 transition-colors duration-500 px-4 relative overflow-hidden pb-20">
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient Orbs */}
        <motion.div
          className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-[#007BFF]/10 to-[#00C896]/10 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-[#00C896]/10 to-[#007BFF]/10 rounded-full blur-3xl"
          animate={{
            x: [0, -40, 0],
            y: [0, 40, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Floating Particles */}
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute w-1 h-1 bg-gradient-to-r from-[#007BFF] to-[#00C896] rounded-full opacity-60"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Tech Stack Icons */}
        {techStack.map((tech, index) => (
          <motion.div
            key={tech.name}
            className="absolute"
            style={tech.position}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.1, scale: 1 }}
            transition={{ delay: tech.delay, duration: 0.8 }}
            whileHover={{ opacity: 0.3, scale: 1.2 }}
          >
            <tech.icon className="w-8 h-8 text-[#007BFF] dark:text-[#00C896]" />
          </motion.div>
        ))}
      </div>

      {/* Main Content Container */}
      <div className="w-full max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 items-center min-h-[80vh]">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center xl:items-start text-center xl:text-left"
          >
            {/* Main Title with Typewriter */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight"
            >
              <span className="text-gray-900 dark:text-white">{t('hero.greeting', 'Je suis')}{" "}</span>
              <span
                className={`bg-gradient-to-r ${colors[colorIdx]} bg-clip-text text-transparent font-[Poppins,Inter,sans-serif] transition-colors duration-500 relative`}
                aria-label={displayed}
              >
                {displayed}
                <motion.span 
                  className="inline-block w-1 ml-1 align-middle bg-[#00C896] dark:bg-[#007BFF]"
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  |
                </motion.span>
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.7 }}
              className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl leading-relaxed"
            >
              {t('hero.description', 'Passionné par la création de solutions web complètes, de l\'interface utilisateur aux architectures backend robustes.')}
            </motion.p>

            {/* CTA Button */}
            <motion.a
              href="#projects"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.7 }}
              whileHover={{ 
                scale: 1.06, 
                y: -4, 
                boxShadow: "0 20px 40px rgba(0, 200, 150, 0.3)" 
              }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-bold text-lg bg-gradient-to-r from-[#007BFF] to-[#00C896] text-white shadow-xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#00C896]/40 hover:from-[#00C896] hover:to-[#007BFF] group mb-8"
            >
              {t('hero.cta', 'Découvrir mes projets')}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.a>
          </motion.div>

          {/* Right Content - Profile Picture (Desktop Only) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="hidden xl:flex justify-center items-center relative"
          >
            {/* Modern Profile Container with Creative Animations */}
            <div className="relative">
              
              {/* Rotating Ring Animation */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-6 rounded-full border-2 border-dashed border-[#007BFF]/20 dark:border-[#00C896]/20"
              />
              
              {/* Pulsing Outer Ring */}
              <motion.div
                animate={{ 
                  scale: [1, 1.05, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -inset-8 rounded-full border border-[#007BFF]/30 dark:border-[#00C896]/30"
              />

              {/* Floating Particles around Profile */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-gradient-to-r from-[#007BFF] to-[#00C896] rounded-full opacity-60"
                  style={{
                    top: `${20 + Math.sin(i * 60 * Math.PI / 180) * 200}px`,
                    left: `${20 + Math.cos(i * 60 * Math.PI / 180) * 200}px`,
                  }}
                  animate={{
                    y: [0, -20, 0],
                    x: [0, Math.sin(i) * 10, 0],
                    opacity: [0.6, 1, 0.6],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{
                    duration: 4 + i * 0.5,
                    repeat: Infinity,
                    delay: i * 0.5,
                    ease: "easeInOut"
                  }}
                />
              ))}

              {/* Main Profile Container with Enhanced Animations */}
              <motion.div
                whileHover={{ 
                  scale: 1.05,
                  y: -5,
                  rotateY: 5
                }}
                animate={{
                  y: [0, -5, 0],
                }}
                transition={{ 
                  hover: { duration: 0.4 },
                  y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                }}
                className="relative w-96 h-96 rounded-full overflow-hidden p-2 shadow-2xl"
                style={{
                  background: `conic-gradient(from 0deg, #007BFF, #00C896, #007BFF, #00C896, #007BFF)`
                }}
              >
                {/* Animated Gradient Border */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: `conic-gradient(from 0deg, transparent 70%, #007BFF 85%, #00C896 95%, transparent)`
                  }}
                />

                {/* Inner container with profile image */}
                <div className="relative w-full h-full rounded-full overflow-hidden bg-white dark:bg-gray-900 flex items-center justify-center z-10">
                  {!imageError ? (
                    <motion.img 
                      src={profileImageSrc} 
                      alt="Profile" 
                      className="w-full h-full object-cover rounded-full"
                      onError={() => setImageError(true)}
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    />
                  ) : (
                    /* Clean Avatar Fallback with Animation */
                    <div className="w-full h-full rounded-full bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 flex items-center justify-center">
                      <motion.div 
                        className="w-40 h-40 bg-gradient-to-br from-[#007BFF] to-[#00C896] rounded-full flex items-center justify-center text-white text-5xl font-bold shadow-xl"
                        whileHover={{ 
                          scale: 1.1,
                          rotate: 5
                        }}
                        animate={{
                          boxShadow: [
                            "0 0 20px rgba(0, 123, 255, 0.3)",
                            "0 0 40px rgba(0, 200, 150, 0.4)",
                            "0 0 20px rgba(0, 123, 255, 0.3)"
                          ]
                        }}
                        transition={{ 
                          boxShadow: { duration: 3, repeat: Infinity },
                          hover: { duration: 0.3 }
                        }}
                      >
                        MA
                      </motion.div>
                    </div>
                  )}
                </div>
              </motion.div>

              {/* Dynamic Background Glow */}
              <motion.div 
                className="absolute -inset-8 rounded-full blur-3xl -z-10"
                animate={{
                  background: [
                    "radial-gradient(circle, rgba(0, 123, 255, 0.1) 0%, transparent 70%)",
                    "radial-gradient(circle, rgba(0, 200, 150, 0.15) 0%, transparent 70%)",
                    "radial-gradient(circle, rgba(0, 123, 255, 0.1) 0%, transparent 70%)"
                  ]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />

              {/* Subtle Light Rays */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 -z-20"
              >
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-px h-24 bg-gradient-to-t from-transparent via-[#007BFF]/10 to-transparent"
                    style={{
                      top: '50%',
                      left: '50%',
                      transformOrigin: '0 0',
                      transform: `rotate(${i * 45}deg) translateY(-200px)`
                    }}
                    animate={{
                      opacity: [0, 0.5, 0]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.25,
                      ease: "easeInOut"
                    }}
                  />
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator - Positioned higher and visible on all screens */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-28 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center cursor-pointer"
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <span className="text-sm text-gray-500 dark:text-gray-400 font-medium mb-2">
            {t('hero.scrollDown', 'Défiler vers le bas')}
          </span>
          <div className="w-6 h-10 border-2 border-gray-300 dark:border-gray-600 rounded-full flex justify-center relative">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-3 bg-gradient-to-b from-[#007BFF] to-[#00C896] rounded-full mt-2"
            />
          </div>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
            className="mt-2"
          >
            <ArrowDown className="w-5 h-5 text-[#007BFF] dark:text-[#00C896]" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero; 
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
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

const phrases = [
  "Aboukhalil Mohammed Ali",
  "Développeur Fullstack"
];

const colors = [
  "from-[#007BFF] to-[#00C896]",
  "from-[#00C896] to-[#007BFF]",
  "from-[#007BFF] via-[#00C896] to-[#007BFF]",
  "from-[#00C896] via-[#007BFF] to-[#00C896]"
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
const particles = Array.from({ length: 12 }, (_, i) => ({
  id: i,
  size: Math.random() * 4 + 2,
  x: Math.random() * 100,
  y: Math.random() * 100,
  duration: Math.random() * 20 + 10,
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

const Hero = () => {
  const { displayed, colorIdx } = useTypewriter(phrases);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);



  return (
    <section className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-950 transition-colors duration-500 px-4 relative overflow-hidden">
      
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

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-4xl mx-auto flex flex-col items-center text-center relative z-10"
      >
        


        {/* Main Title with Typewriter */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight"
        >
          <span className="text-gray-900 dark:text-white">Je suis{" "}</span>
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
          className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl leading-relaxed"
        >
          Passionné par la création de solutions web complètes, de l'interface utilisateur aux architectures backend robustes.
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
          className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-bold text-lg bg-gradient-to-r from-[#007BFF] to-[#00C896] text-white shadow-xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#00C896]/40 hover:from-[#00C896] hover:to-[#007BFF] group mb-12"
        >
          Découvrir mes projets
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
        </motion.a>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center cursor-pointer"
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span className="text-sm text-gray-500 dark:text-gray-400 font-medium mb-2">
              Défiler vers le bas
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

      </motion.div>
    </section>
  );
};

export default Hero; 
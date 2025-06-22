import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Download, 
  Github, 
  Linkedin, 
  Mail,
  Code,
  Zap,
  Palette,
  Database,
  Globe,
  Smartphone
} from 'lucide-react';

const Hero = () => {
  const { t } = useTranslation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const techIcons = [
    { icon: Code, label: "React", color: "text-blue-500" },
    { icon: Zap, label: "Node.js", color: "text-green-500" },
    { icon: Database, label: "MongoDB", color: "text-green-600" },
    { icon: Palette, label: "Tailwind", color: "text-cyan-500" },
    { icon: Globe, label: "TypeScript", color: "text-blue-600" },
    { icon: Smartphone, label: "Mobile", color: "text-purple-500" },
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com", label: "GitHub", color: "hover:text-gray-900 dark:hover:text-white" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn", color: "hover:text-blue-600" },
    { icon: Mail, href: "mailto:contact@portfolio.com", label: "Email", color: "hover:text-red-500" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden animated-bg">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-primary-400/30 to-secondary-400/30 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-secondary-400/20 to-primary-400/20 rounded-full blur-3xl"
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Tech Pattern */}
        <div className="absolute inset-0 bg-tech-pattern opacity-5" />
        
        {/* Floating Elements */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary-500 rounded-full"
          variants={floatingVariants}
          animate="animate"
        />
        <motion.div
          className="absolute top-1/3 right-1/3 w-3 h-3 bg-secondary-500 rounded-full"
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 1 }}
        />
        <motion.div
          className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-primary-400 rounded-full"
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 2 }}
        />
      </div>

      <div className="relative z-10 container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center max-w-5xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center space-x-2 bg-white/10 dark:bg-dark-800/10 backdrop-blur-lg border border-white/20 dark:border-dark-700/20 rounded-full px-6 py-3 mb-8"
          >
            <div className="w-2 h-2 bg-primary-500 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-dark-700 dark:text-dark-300">
              Disponible pour de nouveaux projets
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            variants={itemVariants}
            className="text-responsive font-bold font-display mb-6 leading-tight"
          >
            <span className="text-dark-900 dark:text-white">
              {t('hero.title')}
            </span>
            <br />
            <span className="gradient-text">
              {t('hero.subtitle')}
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-xl lg:text-2xl text-dark-600 dark:text-dark-300 mb-12 max-w-4xl mx-auto leading-relaxed"
          >
            {t('hero.description')}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <Link to="/projects" className="btn-primary group">
              <span>{t('hero.cta')}</span>
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            
            <a
              href="#contact"
              className="btn-secondary group"
            >
              <span>{t('nav.contact')}</span>
              <Mail className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform duration-300" />
            </a>
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            variants={itemVariants}
            className="mb-16"
          >
            <p className="text-sm font-medium text-dark-500 dark:text-dark-400 mb-6 uppercase tracking-wider">
              Technologies principales
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              {techIcons.map((tech, index) => (
                <motion.div
                  key={tech.label}
                  className="flex flex-col items-center space-y-2 group"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="w-12 h-12 bg-white dark:bg-dark-800 rounded-2xl shadow-soft flex items-center justify-center group-hover:shadow-glow transition-all duration-300">
                    <tech.icon className={`w-6 h-6 ${tech.color}`} />
                  </div>
                  <span className="text-xs font-medium text-dark-600 dark:text-dark-400">
                    {tech.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center space-x-6"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white dark:bg-dark-800 rounded-2xl shadow-soft flex items-center justify-center hover:shadow-glow transition-all duration-300 group"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <social.icon className={`w-5 h-5 text-dark-600 dark:text-dark-400 transition-colors duration-300 ${social.color}`} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-6 h-10 border-2 border-dark-300 dark:border-dark-600 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-primary-500 rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero; 
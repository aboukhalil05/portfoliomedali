import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';
import { FileText, Mail, Github, Linkedin, ArrowRight } from 'lucide-react';

const AboutMe = () => {
  const { t } = useTranslation();

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section
      id="about"
      className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-[#007BFF]/10 to-[#00C896]/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-[#00C896]/10 to-[#007BFF]/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {/* Header */}
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 dark:text-white mb-6">
              {t('about.title', 'À propos de')} <span className="bg-gradient-to-r from-[#007BFF] to-[#00C896] bg-clip-text text-transparent">{t('about.titleHighlight', 'moi')}</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {t('about.subtitle', 'Passionné par le développement web et les nouvelles technologies')}
            </p>
          </motion.div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left - Content */}
            <motion.div variants={fadeInUp} className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  {t('about.whoAmI', 'Qui suis-je ?')}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6">
                  {t('about.description', 'Développeur passionné avec une expertise en technologies modernes. J\'aime créer des solutions innovantes qui allient performance, esthétique et expérience utilisateur exceptionnelle.')}
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                  {t('about.specialization', 'Spécialisé dans le développement web moderne avec React, Laravel et les dernières technologies. Je transforme les idées en applications web performantes et élégantes.')}
                </p>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-2 gap-6">
                <motion.div 
                  variants={fadeInUp}
                  className="bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 hover:shadow-lg transition-all duration-300"
                >
                  <div className="text-3xl font-black text-[#007BFF] mb-2">20</div>
                  <div className="text-gray-600 dark:text-gray-300 font-semibold">{t('about.age', 'Ans')}</div>
                </motion.div>

                <motion.div 
                  variants={fadeInUp}
                  className="bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 hover:shadow-lg transition-all duration-300"
                >
                  <div className="text-3xl font-black text-[#00C896] mb-2">2+</div>
                  <div className="text-gray-600 dark:text-gray-300 font-semibold">{t('about.experience', 'Années d\'expérience')}</div>
                </motion.div>
              </div>

              {/* CTA Button */}
              <motion.div variants={fadeInUp} className="pt-4">
                <a
                  href="/Mohammed Ali Aboukhalil CV.pdf"
                  download="Mohammed Ali Aboukhalil CV.pdf"
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#007BFF] to-[#00C896] text-white font-bold rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  <FileText className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  <span>{t('about.downloadCV', 'Télécharger mon CV')}</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </motion.div>

              {/* Social Links */}
              <motion.div variants={fadeInUp} className="pt-6">
                <div className="flex gap-4">
                  <motion.a
                    href="mailto:medaliaboukhail@gmail.com"
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="p-4 rounded-2xl bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 hover:border-red-200 dark:hover:border-red-800 transition-all duration-300"
                  >
                    <Mail className="w-6 h-6" />
                  </motion.a>
                  
                  <motion.a
                    href="https://www.linkedin.com/in/mohammed-ali-aboukhalil-a56019329/"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="p-4 rounded-2xl bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:border-blue-200 dark:hover:border-blue-800 transition-all duration-300"
                  >
                    <Linkedin className="w-6 h-6" />
                  </motion.a>
                  
                  <motion.a
                    href="https://github.com/aboukhalil05"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="p-4 rounded-2xl bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300"
                  >
                    <Github className="w-6 h-6" />
                  </motion.a>
                </div>
              </motion.div>
          </motion.div>

            {/* Right - Code Editor Style */}
          <motion.div
              variants={fadeInUp}
              className="relative"
            >
              {/* Main code block */}
              <div className="bg-gray-900 rounded-2xl shadow-2xl p-8 relative overflow-hidden border border-gray-800">
                {/* Window controls */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="text-gray-400 text-sm font-mono">developer.js</div>
                </div>

                {/* Code content */}
                <div className="font-mono text-sm leading-relaxed">
                  <div className="text-gray-400 mb-2">// Mon profil</div>
                                     <div><span className="text-blue-400">const</span> <span className="text-yellow-300">developer</span> <span className="text-white">= {"{"}</span></div>
                  <div className="ml-4 space-y-1 my-2">
                    <div><span className="text-red-400">name:</span> <span className="text-green-400">"Mohamed Ali Aboukhalil"</span>,</div>
                    <div><span className="text-red-400">age:</span> <span className="text-purple-400">20</span>,</div>
                    <div><span className="text-red-400">location:</span> <span className="text-green-400">"Casablanca, Morocco"</span>,</div>
                    <div><span className="text-red-400">role:</span> <span className="text-green-400">"Full Stack Developer"</span>,</div>
                    <div><span className="text-red-400">skills:</span> [</div>
                    <div className="ml-4 space-y-1">
                      <div><span className="text-green-400">"React.js"</span>,</div>
                      <div><span className="text-green-400">"Laravel"</span>,</div>
                      <div><span className="text-green-400">"JavaScript"</span>,</div>
                      <div><span className="text-green-400">"MySQL"</span>,</div>
                      <div><span className="text-green-400">"Python"</span></div>
                    </div>
                    <div>],</div>
                    <div><span className="text-red-400">passion:</span> <span className="text-green-400">"Coding & Innovation"</span>,</div>
                    <div><span className="text-red-400">available:</span> <span className="text-blue-400">true</span></div>
                  </div>
                                     <div className="text-white">{"}"}</div>
                  
                  <div className="mt-4 text-gray-400">
                    <div>// Toujours prêt pour de nouveaux défis ! 🚀</div>
                  </div>
                </div>

                {/* Decorative glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#007BFF]/5 to-[#00C896]/5 rounded-2xl pointer-events-none"></div>
              </div>

              {/* Floating elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-[#007BFF] to-[#00C896] rounded-full flex items-center justify-center shadow-lg"
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-[#00C896] to-[#007BFF] rounded-full flex items-center justify-center shadow-lg"
                animate={{ 
                  y: [0, 10, 0],
                  x: [0, 5, -5, 0]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              >
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0L19.2 12l-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
                </svg>
              </motion.div>
            </motion.div>
            </div>
          </motion.div>
      </div>
    </section>
  );
};

export default AboutMe; 
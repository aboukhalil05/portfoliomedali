import { FaGraduationCap, FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const formations = [
  {
    title: "Technicien spécialisé en développement digital",
    date: "2023 - 2025",
    place: "ISGI Casablanca",
    desc: "Formation intensive en développement web Full-Stack. Maîtrise des technologies modernes : React, Laravel, bases de données, et méthodologies agiles.",
  },
  {
    title: "Baccalauréat Physique-Chimie",
    date: "2022 - 2023",
    place: "Académie Maurice Bucaill Casablanca",
    desc: "Diplôme obtenu avec mention bien. Solide formation scientifique développant l'esprit logique et analytique.",
  },
];

const experiences = [
  {
    title: "Stage en développement web",
    company: "EKM Consulting",
    date: "2025",
    place: "Casablanca, Maroc",
    desc: "Développement d'applications web POS (Point of Sale). Travail en équipe sur des projets réels avec des technologies modernes.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const leftItemVariants = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const rightItemVariants = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const timelineVariants = {
  hidden: { height: 0 },
  visible: {
    height: "100%",
    transition: {
      duration: 2,
      ease: "easeInOut",
    },
  },
};

export default function Parcours() {
  return (
    <section id="parcours" className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
      
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-[#007BFF]/5 to-[#00C896]/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-[#00C896]/5 to-[#007BFF]/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 dark:text-white mb-6">
            Mon <span className="bg-gradient-to-r from-[#007BFF] to-[#00C896] bg-clip-text text-transparent">Parcours</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Formation et expériences qui ont façonné mon expertise en développement
          </p>
        </motion.div>

        {/* Two Column Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            
            {/* Left Column - Formation */}
            <div className="space-y-8">
              <motion.div
                variants={leftItemVariants}
                className="text-center lg:text-right"
              >
                <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-[#007BFF] to-[#0056CC] text-white rounded-full font-bold text-lg shadow-lg">
                  <FaGraduationCap className="text-xl" />
                  Formation
                </div>
              </motion.div>
              
              {formations.map((formation, index) => (
                <motion.div
                  key={index}
                  variants={leftItemVariants}
                  className="relative"
                >
                  <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl border border-gray-200/50 dark:border-gray-700/50 relative overflow-hidden group hover:shadow-2xl transition-all duration-300">
                    
                    {/* Glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#007BFF]/5 to-[#0056CC]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl" />
                    
                    {/* Content */}
                    <div className="relative z-10">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="p-3 bg-gradient-to-br from-[#007BFF] to-[#0056CC] rounded-2xl text-white shadow-lg">
                          <FaGraduationCap className="text-xl" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-[#007BFF] dark:group-hover:text-[#00C896] transition-colors">
                            {formation.title}
                          </h3>
                          <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-3">
                            <div className="flex items-center gap-1">
                              <FaCalendarAlt />
                              <span>{formation.date}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <FaMapMarkerAlt />
                              <span>{formation.place}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {formation.desc}
                      </p>
                    </div>
                  </div>
                  
                  {/* Connection line to timeline (hidden on mobile) */}
                  <div className="hidden lg:block absolute top-1/2 -right-8 w-8 h-0.5 bg-gradient-to-r from-[#007BFF] to-transparent" />
                </motion.div>
              ))}
            </div>

            {/* Right Column - Experience */}
            <div className="space-y-8">
              <motion.div
                variants={rightItemVariants}
                className="text-center lg:text-left"
              >
                <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-[#00C896] to-[#00A878] text-white rounded-full font-bold text-lg shadow-lg">
                  <FaBriefcase className="text-xl" />
                  Expérience
                </div>
              </motion.div>
              
              {experiences.map((experience, index) => (
                <motion.div
                  key={index}
                  variants={rightItemVariants}
                  className="relative"
                >
                  <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl border border-gray-200/50 dark:border-gray-700/50 relative overflow-hidden group hover:shadow-2xl transition-all duration-300">
                    
                    {/* Glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#00C896]/5 to-[#00A878]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl" />
                    
                    {/* Content */}
                    <div className="relative z-10">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="p-3 bg-gradient-to-br from-[#00C896] to-[#00A878] rounded-2xl text-white shadow-lg">
                          <FaBriefcase className="text-xl" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1 group-hover:text-[#00C896] dark:group-hover:text-[#007BFF] transition-colors">
                            {experience.title}
                          </h3>
                          <p className="text-lg font-semibold text-[#00C896] dark:text-[#007BFF] mb-2">
                            {experience.company}
                          </p>
                          <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-3">
                            <div className="flex items-center gap-1">
                              <FaCalendarAlt />
                              <span>{experience.date}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <FaMapMarkerAlt />
                              <span>{experience.place}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {experience.desc}
                      </p>
                    </div>
                  </div>
                  
                  {/* Connection line to timeline (hidden on mobile) */}
                  <div className="hidden lg:block absolute top-1/2 -left-8 w-8 h-0.5 bg-gradient-to-l from-[#00C896] to-transparent" />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Central Timeline (hidden on mobile) */}
          <div className="hidden lg:block absolute left-1/2 top-20 bottom-0 w-1 -translate-x-1/2">
            <motion.div
              variants={timelineVariants}
              className="w-full bg-gradient-to-b from-[#007BFF] via-[#0056CC] to-[#00C896] rounded-full relative"
            >
              {/* Timeline dots */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#007BFF] rounded-full border-4 border-white dark:border-gray-900 shadow-lg" />
              <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#0056CC] rounded-full border-4 border-white dark:border-gray-900 shadow-lg" />
              <div className="absolute top-2/3 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#00A878] rounded-full border-4 border-white dark:border-gray-900 shadow-lg" />
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#00C896] rounded-full border-4 border-white dark:border-gray-900 shadow-lg" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 
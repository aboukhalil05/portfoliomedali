import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from 'react-i18next';
import { 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaReact, 
  FaBootstrap, 
  FaLaravel, 
  FaGitAlt, 
  FaPython,
  FaPhp
} from "react-icons/fa";
import { 
  SiTailwindcss, 
  SiMysql, 
  SiMongodb, 
  SiScrumalliance, 
  SiSonarqube,
  SiInertia,
  SiJira
} from "react-icons/si";

const skillsData = [
  {
    category: "Frontend",
    skills: [
      { name: "HTML", icon: <FaHtml5 className="text-orange-500" />, level: 95 },
      { name: "CSS", icon: <FaCss3Alt className="text-blue-500" />, level: 90 },
      { name: "JavaScript", icon: <FaJs className="text-yellow-400" />, level: 88 },
      { name: "React", icon: <FaReact className="text-cyan-400" />, level: 85 },
      { name: "Inertia.js", icon: <SiInertia className="text-purple-600" />, level: 82 },
      { name: "Tailwind", icon: <SiTailwindcss className="text-teal-400" />, level: 92 },
      { name: "Bootstrap", icon: <FaBootstrap className="text-purple-600" />, level: 87 },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "PHP", icon: <FaPhp className="text-indigo-600" />, level: 82 },
      { name: "Python", icon: <FaPython className="text-blue-400" />, level: 78 },
      { name: "Laravel", icon: <FaLaravel className="text-red-500" />, level: 85 },
      { name: "MySQL", icon: <SiMysql className="text-blue-600" />, level: 88 },
      { name: "MongoDB", icon: <SiMongodb className="text-green-500" />, level: 75 },
    ],
  },
  {
    category: "Outils",
    skills: [
      { name: "Git", icon: <FaGitAlt className="text-orange-600" />, level: 90 },
      { name: "Jira", icon: <SiJira className="text-blue-700" />, level: 80 },
      { name: "Scrum", icon: <SiScrumalliance className="text-green-400" />, level: 85 },
      { name: "SonarQube", icon: <SiSonarqube className="text-yellow-500" />, level: 75 },
    ],
  },
];

// Flatten all skills for "Toutes" category
const allSkills = skillsData.flatMap(cat => cat.skills);

export default function Skills() {
  const { t } = useTranslation();
  
  // Utiliser des clés constantes au lieu des traductions pour l'état
  const [selectedKey, setSelectedKey] = useState('all');
  
  // Définir les catégories avec leurs clés et traductions
  const categoryConfig = [
    { key: 'all', label: t('skills.categories.all', 'Toutes') },
    { key: 'frontend', label: t('skills.categories.frontend', 'Frontend') },
    { key: 'backend', label: t('skills.categories.backend', 'Backend') },
    { key: 'tools', label: t('skills.categories.tools', 'Outils') }
  ];
  
  const getCurrentSkills = () => {
    if (selectedKey === 'all') {
      return allSkills;
    }
    const categoryMap = {
      'frontend': 'Frontend',
      'backend': 'Backend',
      'tools': 'Outils'
    };
    const originalCategory = categoryMap[selectedKey];
    return skillsData.find((cat) => cat.category === originalCategory)?.skills || [];
  };

  const currentSkills = getCurrentSkills();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      
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
            {t('skills.title', 'Mes')} <span className="bg-gradient-to-r from-[#007BFF] to-[#00C896] bg-clip-text text-transparent">{t('skills.titleHighlight', 'Compétences')}</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t('skills.subtitle', 'Technologies et outils que je maîtrise pour créer des solutions performantes')}
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categoryConfig.map((category) => (
            <motion.button
              key={category.key}
              onClick={() => setSelectedKey(category.key)}
              className={`relative px-6 py-3 rounded-full font-semibold transition-all duration-300 overflow-hidden ${
                selectedKey === category.key
                  ? "text-white shadow-lg scale-105"
                  : "text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:shadow-md hover:scale-105 border border-gray-200 dark:border-gray-700"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {selectedKey === category.key && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#007BFF] to-[#00C896]"
                  layoutId="activeFilter"
                  transition={{ duration: 0.3 }}
                />
              )}
              <span className="relative z-10">{category.label}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedKey}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className={`grid gap-8 ${
              selectedKey === 'all' 
                ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" 
                : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
            }`}
          >
            {currentSkills.map((skill, index) => (
              <motion.div
                key={`${skill.name}-${selectedKey}`}
                variants={itemVariants}
                className="group bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200/50 dark:border-gray-700/50 relative overflow-hidden"
                whileHover={{ y: -8 }}
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#007BFF]/5 to-[#00C896]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon and Name */}
                  <div className="flex items-center gap-4 mb-4">
                    <motion.div
                      className="text-4xl"
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      transition={{ duration: 0.3 }}
                    >
                      {skill.icon}
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-[#007BFF] dark:group-hover:text-[#00C896] transition-colors">
                        {skill.name}
                      </h3>
                      <span className="text-sm text-gray-500 dark:text-gray-400 font-semibold">
                        {skill.level}%
                      </span>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="relative">
                    <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-[#007BFF] to-[#00C896] rounded-full relative"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ 
                          duration: 1.5, 
                          delay: index * 0.1,
                          ease: "easeOut" 
                        }}
                      >
                        {/* Shimmer effect */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                          animate={{ x: ["-100%", "100%"] }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: index * 0.2,
                          }}
                        />
                      </motion.div>
                    </div>

                    {/* Level indicator */}
                    <motion.div
                      className="absolute -top-8 bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-2 py-1 rounded text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ left: `${skill.level}%` }}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 1 }}
                    >
                      {skill.level}%
                      <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-2 border-r-2 border-t-2 border-transparent border-t-gray-900 dark:border-t-white" />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>


      </div>
    </section>
  );
} 
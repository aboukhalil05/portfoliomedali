import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

const projectsData = [
  {
    id: 1,
    title: "Bricoloman",
    category: "Plateforme",
    year: "2025",
    description: "Plateforme digitale de mise en relation entre particuliers et artisans du dépannage et de la rénovation.",
    technologies: ["React", "Laravel", "MySQL"],
    icon: "🔨"
  },
  {
    id: 2,
    title: "Apixel",
    category: "POS System",
    year: "2025",
    description: "Système (POS – Point of Sale) de gestion des ventes.",
    technologies: ["React", "Laravel", "MySQL", "Inertia.js"],
    icon: "🛒"
  },
  {
    id: 3,
    title: "ISGIdocs",
    category: "Plateforme éducative",
    year: "2025",
    description: "Une plateforme web pour accéder facilement aux ressources académiques.",
    technologies: ["React", "Laravel", "MySQL"],
    icon: "📚"
  }
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

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-[#007BFF]/5 to-[#00C896]/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-[#00C896]/5 to-[#007BFF]/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-[#007BFF]/3 to-[#00C896]/3 rounded-full blur-3xl" />
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
            Mes <span className="bg-gradient-to-r from-[#007BFF] to-[#00C896] bg-clip-text text-transparent">Projets</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Découvrez une sélection de mes réalisations qui illustrent ma passion pour le développement web
          </p>
        </motion.div>

        {/* Projects Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {[
            { label: "Projets réalisés", value: "3+", color: "from-[#007BFF] to-[#0056CC]" },
            { label: "Technologies", value: "8+", color: "from-[#00C896] to-[#00A878]" },
            { label: "Lignes de code", value: "10K+", color: "from-[#007BFF] to-[#00C896]" },
            { label: "Expérience", value: "2 ans", color: "from-[#00C896] to-[#007BFF]" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200/50 dark:border-gray-700/50"
              whileHover={{ scale: 1.05, y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.3 }}
            >
              <div className={`text-3xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                {stat.value}
              </div>
              <div className="text-gray-600 dark:text-gray-400 font-semibold text-sm">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8"
        >
          {projectsData.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={index}
            />
          ))}
        </motion.div>


      </div>
    </section>
  );
} 
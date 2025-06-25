import { motion } from 'framer-motion';
import { Github, ExternalLink, Code, Zap, Users, Star } from 'lucide-react';
import Background from '../components/Background';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Une plateforme e-commerce complète avec panier, paiement et gestion des commandes",
      image: "/api/placeholder/600/400",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      category: "Web App",
      featured: true
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Application de gestion de tâches avec collaboration en temps réel",
      image: "/api/placeholder/600/400",
      technologies: ["Vue.js", "Firebase", "Tailwind CSS"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      category: "Productivity",
      featured: false
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "Dashboard météo avec prévisions et cartes interactives",
      image: "/api/placeholder/600/400",
      technologies: ["React", "API Weather", "Chart.js"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      category: "Dashboard",
      featured: false
    },
    {
      id: 4,
      title: "Social Media App",
      description: "Réseau social avec posts, likes, commentaires et messagerie",
      image: "/api/placeholder/600/400",
      technologies: ["React Native", "Firebase", "Redux"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      category: "Mobile App",
      featured: true
    }
  ];

  const stats = [
    { icon: Code, label: "Projets Complétés", value: "15+" },
    { icon: Zap, label: "Technologies Maîtrisées", value: "20+" },
    { icon: Users, label: "Clients Satisfaits", value: "10+" },
    { icon: Star, label: "Années d'Expérience", value: "3+" }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-20 relative">
      <Background />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl lg:text-5xl font-black text-gray-900 dark:text-white mb-6">
            Mes <span className="bg-gradient-to-r from-[#007BFF] to-[#00C896] bg-clip-text text-transparent">Projets</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Découvrez mes réalisations et projets qui démontrent mes compétences en développement
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <div key={stat.label} className="bg-white dark:bg-gray-800 rounded-2xl p-6 text-center shadow-lg">
              <div className="w-12 h-12 bg-gradient-to-r from-[#007BFF] to-[#00C896] rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{stat.value}</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 ${
                project.featured ? 'lg:col-span-2' : ''
              }`}
            >
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-gradient-to-r from-[#007BFF] to-[#00C896] text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
                {project.featured && (
                  <div className="absolute top-4 right-4">
                    <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                      <Star className="w-4 h-4" />
                      Featured
                    </span>
                  </div>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors duration-300"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#007BFF] to-[#00C896] text-white rounded-lg hover:shadow-lg transition-all duration-300"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-[#007BFF] to-[#00C896] rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Vous avez un projet en tête ?
            </h2>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
              Je serais ravi de discuter de votre projet et de voir comment nous pouvons travailler ensemble pour le concrétiser.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#007BFF] font-bold rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Discutons de votre projet
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects; 
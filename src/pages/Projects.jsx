import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import { 
  Filter, 
  Search, 
  Plus,
  Code,
  Globe,
  Smartphone,
  Database,
  Palette
} from 'lucide-react';

const Projects = () => {
  const { t } = useTranslation();

  // Exemple de données de projets enrichies
  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "Une plateforme e-commerce complète avec gestion des produits, panier d'achat, et système de paiement intégré. Interface moderne et responsive avec dashboard administrateur.",
      image: null,
      icon: "🛒",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      category: "E-commerce",
      year: "2024",
      difficulty: 4,
      stars: 15,
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      features: ["Gestion des produits", "Panier d'achat", "Paiement sécurisé", "Dashboard admin"]
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Application de gestion de tâches avec interface intuitive et fonctionnalités collaboratives. Synchronisation en temps réel et notifications push.",
      image: null,
      icon: "📋",
      technologies: ["Vue.js", "Firebase", "Tailwind", "PWA"],
      category: "Productivité",
      year: "2023",
      difficulty: 3,
      stars: 23,
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      features: ["Gestion des tâches", "Collaboration", "Notifications", "PWA"]
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "Tableau de bord météo avec prévisions en temps réel et interface responsive. Intégration d'APIs multiples et visualisations interactives.",
      image: null,
      icon: "🌤️",
      technologies: ["React", "OpenWeather API", "Chart.js", "CSS3"],
      category: "Météo",
      year: "2023",
      difficulty: 2,
      stars: 8,
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      features: ["Prévisions météo", "Interface responsive", "API intégrée", "Graphiques"]
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "Site portfolio moderne avec design responsive et animations fluides. Mode sombre/clair et optimisé pour les performances.",
      image: null,
      icon: "🎨",
      technologies: ["React", "Tailwind CSS", "Framer Motion", "i18n"],
      category: "Portfolio",
      year: "2024",
      difficulty: 3,
      stars: 12,
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      features: ["Design responsive", "Animations", "Mode sombre", "Multilingue"]
    },
    {
      id: 5,
      title: "Chat Application",
      description: "Application de chat en temps réel avec authentification et gestion des messages. Interface moderne avec emojis et fichiers.",
      image: null,
      icon: "💬",
      technologies: ["Socket.io", "Express", "MongoDB", "JWT"],
      category: "Communication",
      year: "2023",
      difficulty: 4,
      stars: 31,
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      features: ["Chat temps réel", "Authentification", "Gestion des messages", "Emojis"]
    },
    {
      id: 6,
      title: "Recipe Finder",
      description: "Application de recherche de recettes avec filtres avancés et favoris. Base de données complète et recommandations personnalisées.",
      image: null,
      icon: "🍳",
      technologies: ["React", "Spoonacular API", "LocalStorage", "CSS Grid"],
      category: "Cuisine",
      year: "2023",
      difficulty: 2,
      stars: 18,
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      features: ["Recherche de recettes", "Filtres", "Favoris", "Recommandations"]
    }
  ];

  const categories = [
    { name: "Tous", icon: Code, count: projects.length },
    { name: "E-commerce", icon: Globe, count: projects.filter(p => p.category === "E-commerce").length },
    { name: "Web App", icon: Code, count: projects.filter(p => p.category === "Productivité" || p.category === "Communication").length },
    { name: "Mobile", icon: Smartphone, count: projects.filter(p => p.category === "Portfolio" || p.category === "Cuisine").length },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-dark-950 pt-20">
      {/* Header */}
      <section className="relative py-20 bg-gradient-to-r from-primary-500 to-secondary-500 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-tech-pattern opacity-10" />
        <motion.div
          className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-40 h-40 bg-white/5 rounded-full blur-3xl"
          animate={{
            x: [0, -60, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <div className="relative z-10 container-custom text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl lg:text-7xl font-bold text-white mb-6"
          >
            {t('page.projects.title')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl lg:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed"
          >
            Découvrez mes projets récents et explorez les technologies que j'utilise pour créer des expériences web exceptionnelles.
          </motion.p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container-custom">
          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-16"
          >
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category, index) => (
                <motion.button
                  key={category.name}
                  className="flex items-center space-x-2 px-6 py-3 bg-white dark:bg-dark-800 border border-dark-200 dark:border-dark-600 rounded-2xl hover:border-primary-500 dark:hover:border-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all duration-300 group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <category.icon className="w-4 h-4 text-dark-600 dark:text-dark-400 group-hover:text-primary-500 transition-colors duration-300" />
                  <span className="font-medium text-dark-700 dark:text-dark-300 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                    {category.name}
                  </span>
                  <span className="bg-dark-100 dark:bg-dark-700 text-dark-600 dark:text-dark-400 text-xs px-2 py-1 rounded-full">
                    {category.count}
                  </span>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </motion.div>

          {/* Load More Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mt-16"
          >
            <motion.button
              className="btn-primary group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Plus className="w-5 h-5 mr-2 group-hover:rotate-90 transition-transform duration-300" />
              Charger plus de projets
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Projects; 
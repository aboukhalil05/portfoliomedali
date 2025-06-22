import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { 
  ExternalLink, 
  Github, 
  Star, 
  Calendar,
  Tag,
  ArrowUpRight,
  Eye,
  Code2
} from 'lucide-react';

const ProjectCard = ({ project, index }) => {
  const { t } = useTranslation();

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.1,
        ease: "easeOut",
      },
    },
  };

  const hoverVariants = {
    hover: {
      y: -10,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, margin: "-50px" }}
      className="group relative"
    >
      <motion.div
        variants={hoverVariants}
        className="card card-hover overflow-hidden h-full"
      >
        {/* Project Image/Icon */}
        <div className="relative h-48 bg-gradient-to-br from-primary-500 to-secondary-500 overflow-hidden">
          {project.image ? (
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-white">
              <div className="text-6xl group-hover:scale-110 transition-transform duration-500">
                {project.icon || '💻'}
              </div>
            </div>
          )}
          
          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Tech Stack Badges */}
          <div className="absolute top-4 right-4 flex flex-wrap gap-2">
            {project.technologies?.slice(0, 3).map((tech, techIndex) => (
              <motion.span 
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: techIndex * 0.1 }}
                className="bg-black/60 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full border border-white/20"
              >
                {tech}
              </motion.span>
            ))}
          </div>

          {/* Difficulty Rating */}
          {project.difficulty && (
            <div className="absolute top-4 left-4 flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.05 }}
                  className={`w-2 h-2 rounded-full ${
                    i < project.difficulty 
                      ? 'bg-yellow-400 shadow-glow' 
                      : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Project Content */}
        <div className="p-6">
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <h3 className="text-xl font-bold text-dark-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
              {project.title}
            </h3>
            <motion.div
              className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              whileHover={{ rotate: 45 }}
            >
              <ArrowUpRight className="w-5 h-5 text-primary-500" />
            </motion.div>
          </div>
          
          {/* Description */}
          <p className="text-dark-600 dark:text-dark-300 text-sm mb-6 leading-relaxed line-clamp-3">
            {project.description}
          </p>

          {/* Project Stats */}
          <div className="flex items-center justify-between mb-6 text-sm">
            <div className="flex items-center space-x-4">
              {project.category && (
                <div className="flex items-center space-x-1">
                  <Tag className="w-4 h-4 text-primary-500" />
                  <span className="text-primary-600 dark:text-primary-400 font-medium">
                    {project.category}
                  </span>
                </div>
              )}
              {project.year && (
                <div className="flex items-center space-x-1">
                  <Calendar className="w-4 h-4 text-dark-400" />
                  <span className="text-dark-500 dark:text-dark-400">
                    {project.year}
                  </span>
                </div>
              )}
            </div>
            
            {project.stars && (
              <div className="flex items-center space-x-1">
                <Star className="w-4 h-4 text-yellow-500 fill-current" />
                <span className="text-dark-600 dark:text-dark-300 font-medium">
                  {project.stars}
                </span>
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-3">
            {project.liveUrl && (
              <motion.a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 btn-primary text-center text-sm py-3 px-4 group/btn"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Eye className="w-4 h-4 mr-2 group-hover/btn:animate-pulse" />
                {t('project.view')}
              </motion.a>
            )}
            
            {project.githubUrl && (
              <motion.a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 btn-outline text-center text-sm py-3 px-4 group/btn"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Github className="w-4 h-4 mr-2 group-hover/btn:animate-pulse" />
                {t('project.github')}
              </motion.a>
            )}
          </div>

          {/* Additional Features */}
          {project.features && (
            <motion.div 
              className="mt-6 pt-6 border-t border-dark-200 dark:border-dark-700"
              initial={{ opacity: 0, height: 0 }}
              whileHover={{ opacity: 1, height: 'auto' }}
              transition={{ duration: 0.3 }}
            >
              <h4 className="text-sm font-semibold text-dark-900 dark:text-white mb-3 flex items-center">
                <Code2 className="w-4 h-4 mr-2 text-primary-500" />
                Fonctionnalités
              </h4>
              <ul className="space-y-2">
                {project.features.slice(0, 3).map((feature, index) => (
                  <motion.li 
                    key={index} 
                    className="flex items-center text-xs text-dark-600 dark:text-dark-300"
                    initial={{ opacity: 0, x: -10 }}
                    whileHover={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-3 flex-shrink-0" />
                    {feature}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </div>

        {/* Glow Effect */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary-500/0 via-primary-500/5 to-secondary-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard; 
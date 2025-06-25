import { motion } from 'framer-motion';
import { 
  ExternalLink, 
  Github, 
  Calendar,
  Tag,
  Eye,
  Code2
} from 'lucide-react';

const ProjectCard = ({ project, index }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.2,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className="group relative"
    >
      <motion.div
        className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl border border-gray-200/50 dark:border-gray-700/50 overflow-hidden h-full relative transition-all duration-500 hover:shadow-2xl"
        whileHover={{ y: -12, scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        {/* Project Image */}
        <div className="relative h-64 bg-gradient-to-br from-[#007BFF] to-[#00C896] overflow-hidden">
          {project.image ? (
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-white relative">
              <div className="text-7xl group-hover:scale-110 transition-transform duration-500 relative z-10">
                {project.icon || '💻'}
              </div>
              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-16 h-16 bg-white/10 rounded-full blur-xl"></div>
              <div className="absolute bottom-4 left-4 w-12 h-12 bg-white/20 rounded-full blur-lg"></div>
            </div>
          )}
          
          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          {/* Tech Stack Badges */}
          {project.technologies && (
            <div className="absolute top-4 right-4 flex flex-wrap gap-2">
              {project.technologies.slice(0, 3).map((tech, techIndex) => (
                <motion.span 
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: techIndex * 0.1 }}
                  className="bg-black/40 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full border border-white/30 font-semibold"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          )}

          {/* Category Badge */}
          {project.category && (
            <div className="absolute top-4 left-4">
              <span className="bg-white/20 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full border border-white/30 font-bold">
                {project.category}
              </span>
            </div>
          )}
        </div>

        {/* Project Content */}
        <div className="p-8">
          {/* Header */}
          <div className="mb-6">
            <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-2 group-hover:text-[#007BFF] dark:group-hover:text-[#00C896] transition-colors duration-300">
              {project.title}
            </h3>
            {project.year && (
              <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                <Calendar className="w-4 h-4" />
                <span>{project.year}</span>
              </div>
            )}
          </div>
          
          {/* Description */}
          <p className="text-gray-600 dark:text-gray-300 text-base mb-6 leading-relaxed">
            {project.description}
          </p>

          {/* Features */}
          {project.features && (
            <div className="mb-6">
              <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-3 flex items-center">
                <Code2 className="w-4 h-4 mr-2 text-[#007BFF]" />
                Fonctionnalités clés
              </h4>
              <ul className="space-y-2">
                {project.features.slice(0, 3).map((feature, index) => (
                  <li 
                    key={index} 
                    className="flex items-center text-sm text-gray-600 dark:text-gray-300"
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-[#007BFF] to-[#00C896] rounded-full mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex gap-4">
            {project.liveUrl && (
              <motion.a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-[#007BFF] to-[#00C896] text-white font-bold rounded-full hover:shadow-lg transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Eye className="w-4 h-4" />
                Voir le projet
              </motion.a>
            )}
            
            {project.githubUrl && (
              <motion.a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 font-bold rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300 border border-gray-200 dark:border-gray-600"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="w-4 h-4" />
                GitHub
              </motion.a>
            )}
          </div>
        </div>

        {/* Glow Effect */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#007BFF]/5 to-[#00C896]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard; 
import { motion } from 'framer-motion';
import { Calendar, Sparkles } from 'lucide-react';

const ProjectCard = ({ project, index }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -15 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.8,
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
      className="group relative perspective-1000"
    >
      <motion.div
        className="relative bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-3xl shadow-2xl border border-gray-200/20 dark:border-gray-700/20 overflow-hidden transform-gpu"
        whileHover={{ 
          y: -20, 
          rotateY: 5,
          rotateX: 5,
          scale: 1.02,
          boxShadow: "0 35px 60px -12px rgba(0, 123, 255, 0.25)"
        }}
        transition={{ 
          duration: 0.6,
          ease: "easeOut"
        }}
      >
        {/* Creative Header Section */}
        <div className="relative h-72 overflow-hidden">
          {/* Dynamic Background */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-br from-[#007BFF] via-[#0056CC] to-[#00C896]"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.8 }}
          />
          
          {/* Floating Geometric Shapes */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div 
              className="absolute top-10 right-10 w-16 h-16 bg-white/10 rounded-full blur-sm"
              animate={{ 
                y: [0, -20, 0],
                x: [0, 10, 0],
                scale: [1, 1.2, 1]
              }}
              transition={{ 
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div 
              className="absolute bottom-10 left-10 w-8 h-8 bg-white/20 rounded-lg rotate-45"
              animate={{ 
                rotate: [45, 225, 45],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div 
              className="absolute top-1/2 left-1/2 w-6 h-6 bg-white/15 rounded-full transform -translate-x-1/2 -translate-y-1/2"
              animate={{ 
                scale: [1, 1.5, 1],
                opacity: [0.3, 0.8, 0.3]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>

          {/* Project Icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              className="relative z-10"
              whileHover={{ 
                scale: 1.3,
                rotate: 360
              }}
              transition={{ 
                duration: 0.8,
                ease: "easeInOut"
              }}
            >
              <div className="text-8xl filter drop-shadow-2xl">
                {project.icon || '💻'}
              </div>
              <motion.div
                className="absolute -inset-8 bg-white/20 rounded-full blur-xl"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
            </div>



          {/* Category Badge */}
          {project.category && (
            <motion.div 
              className="absolute top-6 left-6"
              whileHover={{ scale: 1.1 }}
            >
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-md text-white text-sm px-4 py-2 rounded-full border border-white/30 font-bold">
                <Sparkles className="w-4 h-4" />
                {project.category}
            </div>
            </motion.div>
          )}
        </div>

        {/* Content Section */}
        <div className="relative p-8">
          {/* Decorative Line */}
          <motion.div
            className="absolute top-0 left-8 right-8 h-1 bg-gradient-to-r from-[#007BFF] to-[#00C896] rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          />

          {/* Project Title */}
          <motion.h3 
            className="text-3xl font-black text-gray-900 dark:text-white mb-4 relative"
            whileHover={{ 
              color: "#007BFF",
              scale: 1.02
            }}
            transition={{ duration: 0.3 }}
          >
              {project.title}
            <motion.div
              className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-[#007BFF] to-[#00C896] rounded-full"
              initial={{ width: 0 }}
              whileHover={{ width: "100%" }}
              transition={{ duration: 0.3 }}
            />
          </motion.h3>
          
          {/* Year Badge */}
            {project.year && (
            <motion.div 
              className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-6"
              whileHover={{ scale: 1.05 }}
            >
                <Calendar className="w-4 h-4" />
              <span className="font-semibold">{project.year}</span>
            </motion.div>
            )}
          
          {/* Description */}
          <motion.p 
            className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed relative"
            whileHover={{ color: "#374151" }}
            transition={{ duration: 0.3 }}
          >
            {project.description}
          </motion.p>

          {/* Bottom Decorative Element */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#007BFF]/30 to-transparent"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          />
            </div>

        {/* Hover Glow Effect */}
        <motion.div
          className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#007BFF]/5 to-[#00C896]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
          whileHover={{ 
            boxShadow: "inset 0 0 100px rgba(0, 123, 255, 0.1)"
          }}
        />

        {/* Sparkle Effects on Hover */}
        <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                left: `${20 + i * 15}%`,
                top: `${20 + (i % 2) * 30}%`,
              }}
              animate={{
                scale: [0, 1, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.3,
              }}
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard; 
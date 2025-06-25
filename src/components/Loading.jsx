import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const Loader = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  return (
    <div className="h-screen w-full flex flex-col justify-center items-center bg-white dark:bg-gray-950 relative overflow-hidden">
      
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-[#007BFF]/10 to-[#00C896]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-[#00C896]/10 to-[#007BFF]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <motion.div
        className="flex flex-col items-center space-y-12 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Animated <ABK/> Logo */}
        <motion.div
          className="relative"
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <motion.div
            className="text-4xl lg:text-5xl font-black tracking-tight bg-gradient-to-r from-[#007BFF] via-[#0056CC] to-[#00C896] bg-clip-text text-transparent select-none relative"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              backgroundSize: "200% 200%",
            }}
          >
            {'<ABK/>'}
            
            {/* Glow effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-[#007BFF]/20 to-[#00C896]/20 rounded-lg blur-2xl -z-10"
              animate={{
                scale: [0.8, 1.2, 0.8],
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>

          {/* Floating particles */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-gradient-to-r from-[#007BFF] to-[#00C896] rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [-20, -60, -20],
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.5,
                ease: "easeInOut",
              }}
            />
          ))}
        </motion.div>

        {/* Creative loading messages */}
        <motion.div variants={itemVariants} className="text-center space-y-4">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 dark:text-white">
            <TypeAnimation
              sequence={[
                'Bienvenue dans mon univers', 2000,
                'Chargement en cours...', 1500,
                'Préparing quelque chose d\'incroyable', 2000,
                'Initialisation du portfolio', 1500,
                'Presque prêt...', 1000,
                'C\'est parti ! 🚀', 1000,
              ]}
              wrapper="span"
              speed={50}
              className="bg-gradient-to-r from-[#007BFF] to-[#00C896] bg-clip-text text-transparent"
              repeat={Infinity}
            />
          </h2>
        </motion.div>

        {/* Modern progress bar */}
        <motion.div
          variants={itemVariants}
          className="relative w-80 h-2 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden"
        >
          {/* Background bar */}
          <div className="absolute inset-0 bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-800 dark:to-gray-700 rounded-full" />
          
          {/* Animated progress */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-[#007BFF] via-[#0056CC] to-[#00C896] rounded-full"
            animate={{
              x: ["-100%", "0%", "100%"],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          
          {/* Shimmer effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-full"
            animate={{
              x: ["-100%", "100%"],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>

        {/* Loading dots */}
        <motion.div variants={itemVariants} className="flex space-x-2">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-3 h-3 bg-gradient-to-r from-[#007BFF] to-[#00C896] rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut",
              }}
            />
          ))}
        </motion.div>

        {/* Percentage counter (fake animation) */}
        <motion.div
          variants={itemVariants}
          className="text-sm text-gray-500 dark:text-gray-400 font-mono"
        >
          <TypeAnimation
            sequence={[
              '0%', 100,
              '12%', 100,
              '28%', 100,
              '45%', 100,
              '67%', 100,
              '84%', 100,
              '92%', 100,
              '100%', 200,
            ]}
            wrapper="span"
            speed={80}
            repeat={Infinity}
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Loader; 
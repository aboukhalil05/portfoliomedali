import { motion } from 'framer-motion';

// Icônes technologiques créatives
const techIcons = [
  {
    d: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5', // React layers
    color: '#007BFF',
    position: { top: '15%', left: '10%' },
    delay: 0,
    scale: 1.2,
  },
  {
    d: 'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4', // Database
    color: '#00C896',
    position: { top: '25%', right: '15%' },
    delay: 0.5,
    scale: 1.5,
  },
  {
    d: 'M9 19V6h6v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM21 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2z', // Server
    color: '#007BFF',
    position: { bottom: '30%', left: '8%' },
    delay: 1,
    scale: 1.3,
  },
  {
    d: 'M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2m4-2v4m0 0V2m0 4h.01', // Code
    color: '#00C896',
    position: { bottom: '20%', right: '12%' },
    delay: 1.5,
    scale: 1.4,
  },
  {
    d: 'M8 9l3 3-3 3m5 0h3', // Terminal
    color: '#007BFF',
    position: { top: '40%', left: '20%' },
    delay: 2,
    scale: 1.1,
  },
  {
    d: 'M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z', // API
    color: '#00C896',
    position: { top: '60%', right: '25%' },
    delay: 2.5,
    scale: 1.2,
  },
];

// Particules flottantes
const particles = Array.from({ length: 15 }, (_, i) => ({
  id: i,
  size: Math.random() * 3 + 1,
  x: Math.random() * 100,
  y: Math.random() * 100,
  duration: Math.random() * 25 + 15,
  delay: Math.random() * 8,
}));

export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 w-full h-full overflow-hidden select-none pointer-events-none">
      
      {/* Gradient orbs animés */}
      <motion.div
        className="absolute top-20 left-20 w-80 h-80 bg-gradient-to-br from-[#007BFF]/15 to-[#00C896]/15 rounded-full blur-3xl"
        animate={{
          x: [0, 60, 0],
          y: [0, -40, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-[#00C896]/15 to-[#007BFF]/15 rounded-full blur-3xl"
        animate={{
          x: [0, -50, 0],
          y: [0, 50, 0],
          scale: [1, 0.8, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-br from-[#007BFF]/8 to-[#00C896]/8 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Particules flottantes */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-gradient-to-r from-[#007BFF]/60 to-[#00C896]/60"
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={{
            y: [0, -150, 0],
            opacity: [0, 0.8, 0],
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Icônes technologiques */}
      <svg className="absolute w-full h-full" fill="none" viewBox="0 0 24 24">
        {techIcons.map((icon, i) => (
          <motion.g
            key={i}
            style={{
              position: 'absolute',
              ...icon.position,
            }}
          >
            <motion.path
              d={icon.d}
              stroke={icon.color}
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ 
                pathLength: 0, 
                opacity: 0,
                scale: 0.5,
              }}
              animate={{
                pathLength: [0, 1, 0.8],
                opacity: [0, 0.7, 0.4, 0.7],
                scale: [0.5, icon.scale, icon.scale * 0.9, icon.scale],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                delay: icon.delay,
                ease: 'easeInOut',
              }}
              style={{
                filter: 'drop-shadow(0 0 8px currentColor)',
                transformOrigin: 'center',
              }}
              className="dark:opacity-60 opacity-50"
            />
            
            {/* Glow effect */}
            <motion.path
              d={icon.d}
              stroke={icon.color}
              strokeWidth={1}
              strokeLinecap="round"
              strokeLinejoin="round"
              animate={{
                opacity: [0.2, 0.6, 0.2],
                scale: [icon.scale * 0.8, icon.scale * 1.2, icon.scale * 0.8],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                delay: icon.delay + 1,
                ease: 'easeInOut',
              }}
              style={{
                filter: 'blur(2px)',
                transformOrigin: 'center',
              }}
              className="opacity-30"
            />
          </motion.g>
        ))}
      </svg>

      {/* Lignes de connexion animées */}
      <svg className="absolute w-full h-full" fill="none">
        <motion.path
          d="M 10,15 Q 50,50 85,25"
          stroke="url(#gradient1)"
          strokeWidth={1}
          strokeDasharray="5,5"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ 
            pathLength: [0, 1, 0], 
            opacity: [0, 0.4, 0],
            strokeDashoffset: [0, -10, -20],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        <motion.path
          d="M 85,75 Q 50,50 15,80"
          stroke="url(#gradient2)"
          strokeWidth={1}
          strokeDasharray="3,3"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ 
            pathLength: [0, 1, 0], 
            opacity: [0, 0.5, 0],
            strokeDashoffset: [0, -8, -16],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            delay: 2,
            ease: "easeInOut",
          }}
        />

        {/* Gradients pour les lignes */}
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#007BFF" stopOpacity="0" />
            <stop offset="50%" stopColor="#007BFF" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#00C896" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00C896" stopOpacity="0" />
            <stop offset="50%" stopColor="#00C896" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#007BFF" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>

      {/* Grid pattern subtil */}
      <div 
        className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]"
        style={{
          backgroundImage: `
            linear-gradient(90deg, #007BFF 1px, transparent 1px),
            linear-gradient(180deg, #00C896 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />
    </div>
  );
} 
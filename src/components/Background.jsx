import { motion } from 'framer-motion';

// SVGs/icônes tech stylisées
const icons = [
  {
    d: 'M3 7h18M3 12h18M3 17h18', // menu/code
    color: '#007BFF',
    delay: 0,
  },
  {
    d: 'M4 17v-7a4 4 0 014-4h8a4 4 0 014 4v7', // cloud
    color: '#00C896',
    delay: 0.5,
  },
  {
    d: 'M8 17v-6a4 4 0 014-4h0a4 4 0 014 4v6', // database
    color: '#007BFF',
    delay: 1,
  },
  {
    d: 'M9 19V6h6v13', // terminal
    color: '#00C896',
    delay: 1.5,
  },
];

export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 w-full h-full overflow-hidden select-none pointer-events-none">
      {/* Gradient mesh/fluid */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 20% 30%, #007BFF33 0%, transparent 70%),' +
            'radial-gradient(ellipse 60% 40% at 80% 70%, #00C89633 0%, transparent 80%),' +
            'linear-gradient(120deg, #007BFF11 0%, #00C89611 100%)',
        }}
      />
      {/* Animated SVG icons */}
      <svg className="absolute w-full h-full" fill="none" viewBox="0 0 24 24">
        {icons.map((icon, i) => (
          <motion.path
            key={i}
            d={icon.d}
            stroke={icon.color}
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0, opacity: 0.2 }}
            animate={{
              pathLength: [0, 1, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              delay: icon.delay,
              ease: 'easeInOut',
            }}
            style={{
              filter: 'blur(0.5px)',
              mixBlendMode: 'lighten',
            }}
            className="dark:stroke-[#00C896] stroke-[#007BFF]"
            transform={`translate(${30 + i * 200} ${60 + i * 120}) scale(${1.5 + i * 0.5})`}
          />
        ))}
      </svg>
      {/* Blur overlay for lisibilité */}
      <div className="absolute inset-0 backdrop-blur-[2px]" />
    </div>
  );
} 
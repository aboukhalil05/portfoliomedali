import { motion } from 'framer-motion';
import { Heart, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo & Description */}
          <div className="text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center justify-center md:justify-start space-x-3 mb-4"
            >
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">P</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Portfolio
              </span>
            </motion.div>
            <p className="text-gray-400 text-sm">
              Développeur Full Stack passionné par la création d'expériences web innovantes.
            </p>
          </div>

          {/* Navigation */}
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <div className="space-y-2">
              <a href="/" className="block text-gray-400 hover:text-white transition-colors duration-300">
                Accueil
              </a>
              <a href="/projects" className="block text-gray-400 hover:text-white transition-colors duration-300">
                Projets
              </a>
              <a href="/contact" className="block text-gray-400 hover:text-white transition-colors duration-300">
                Contact
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div className="text-center md:text-right">
            <h3 className="text-lg font-semibold mb-4">Suivez-moi</h3>
            <div className="flex justify-center md:justify-end space-x-4">
              <a
                href="https://github.com"
                className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors duration-300"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:contact@portfolio.com"
                className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors duration-300"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Portfolio. Tous droits réservés.
            </p>
            <div className="flex items-center text-gray-400 text-sm">
              <span>Fait avec</span>
              <Heart className="w-4 h-4 mx-1 text-red-500" />
              <span>en React & Tailwind CSS</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 
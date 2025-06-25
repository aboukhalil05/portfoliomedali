import { motion } from 'framer-motion';
import { 
  Heart, 
  Github, 
  Linkedin, 
  Mail, 
  MapPin, 
  Phone, 
  Code, 
  ArrowUp,
  ExternalLink,
  Home,
  User,
  Zap,
  Rocket,
  MessageCircle,
  Send,
  Star,
  Sparkles
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'Accueil', href: '#hero', icon: Home, description: 'Retour à l\'accueil' },
    { name: 'À propos', href: '#about', icon: User, description: 'Découvrez mon parcours' },
    { name: 'Compétences', href: '#skills', icon: Zap, description: 'Mes technologies' },
    { name: 'Projets', href: '#projects', icon: Rocket, description: 'Mes réalisations' },
    { name: 'Contact', href: '#contact', icon: MessageCircle, description: 'Discutons ensemble' }
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/votre-username',
      icon: Github,
      color: 'hover:bg-gray-700',
      description: 'Voir mes projets'
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/votre-profil',
      icon: Linkedin,
      color: 'hover:bg-blue-600',
      description: 'Mon réseau professionnel'
    },
    {
      name: 'Email',
      href: 'mailto:aboukhalil@example.com',
      icon: Mail,
      color: 'hover:bg-red-500',
      description: 'Contactez-moi'
    }
  ];

  const stats = [
    { label: 'Projets réalisés', value: '3+', icon: Rocket },
    { label: 'Technologies maîtrisées', value: '8+', icon: Code },
    { label: 'Années d\'expérience', value: '2+', icon: Star },
    { label: 'Clients satisfaits', value: '100%', icon: Sparkles }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 border-t border-gray-200 dark:border-gray-700 overflow-hidden">
      
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating geometric shapes */}
        <motion.div
          className="absolute -top-20 -left-20 w-40 h-40 bg-gradient-to-br from-[#007BFF]/5 to-[#00C896]/5 rounded-full blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-20 -right-20 w-60 h-60 bg-gradient-to-br from-[#00C896]/5 to-[#007BFF]/5 rounded-full blur-3xl"
          animate={{
            x: [0, -25, 0],
            y: [0, 15, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Code symbols */}
        <div className="absolute top-10 left-1/4 text-4xl text-[#007BFF]/10 dark:text-[#007BFF]/5 font-mono">
          {"</>"}
        </div>
        <div className="absolute bottom-20 right-1/3 text-3xl text-[#00C896]/10 dark:text-[#00C896]/5 font-mono">
          {"{}"}
        </div>
        <div className="absolute top-1/2 right-10 text-2xl text-[#007BFF]/10 dark:text-[#007BFF]/5 font-mono">
          {"()"}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-6">
            <motion.div
              className="w-16 h-16 bg-gradient-to-r from-[#007BFF] to-[#00C896] rounded-3xl flex items-center justify-center shadow-xl"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.3 }}
            >
              <span className="text-white font-black text-2xl">ABK</span>
            </motion.div>
          </div>
          <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-4">
            Restons en <span className="bg-gradient-to-r from-[#007BFF] to-[#00C896] bg-clip-text text-transparent">contact</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Prêt à donner vie à vos projets ? Discutons de vos idées et créons quelque chose d'extraordinaire ensemble.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.3 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200/50 dark:border-gray-700/50 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-[#007BFF] to-[#00C896] rounded-2xl flex items-center justify-center mx-auto mb-3">
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-black text-gray-900 dark:text-white mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          
          {/* About Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-1"
          >
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <div className="w-8 h-8 bg-gradient-to-r from-[#007BFF] to-[#00C896] rounded-lg flex items-center justify-center mr-3">
                <User className="w-4 h-4 text-white" />
              </div>
              À propos
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              Développeur Full Stack passionné, je transforme vos idées en expériences web modernes et performantes. 
              Spécialisé dans les technologies React, Laravel et les architectures cloud.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center text-gray-600 dark:text-gray-300">
                <div className="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-xl flex items-center justify-center mr-3">
                  <MapPin className="w-4 h-4 text-[#00C896]" />
                </div>
                <div>
                  <div className="font-semibold">Maroc, Casablanca</div>
                  <div className="text-sm text-gray-500">Disponible à distance</div>
                </div>
              </div>
              <div className="flex items-center text-gray-600 dark:text-gray-300">
                <div className="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-xl flex items-center justify-center mr-3">
                  <Mail className="w-4 h-4 text-[#007BFF]" />
                </div>
                <div>
                  <div className="font-semibold">aboukhalil@example.com</div>
                  <div className="text-sm text-gray-500">Réponse sous 24h</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Navigation Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="lg:col-span-1"
          >
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <div className="w-8 h-8 bg-gradient-to-r from-[#007BFF] to-[#00C896] rounded-lg flex items-center justify-center mr-3">
                <ExternalLink className="w-4 h-4 text-white" />
              </div>
              Navigation
            </h3>
            <div className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.7 }}
                  whileHover={{ x: 5, scale: 1.02 }}
                  className="flex items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 bg-white dark:bg-gray-700 rounded-lg flex items-center justify-center mr-3 group-hover:bg-gradient-to-r group-hover:from-[#007BFF] group-hover:to-[#00C896] transition-all duration-300">
                    <link.icon className="w-4 h-4 text-[#007BFF] group-hover:text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-gray-900 dark:text-white group-hover:text-[#007BFF] dark:group-hover:text-[#00C896]">
                      {link.name}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {link.description}
                    </div>
                  </div>
                  <ArrowUp className="w-4 h-4 text-gray-400 group-hover:text-[#00C896] transform -rotate-45 group-hover:translate-x-1 transition-all duration-300" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="lg:col-span-1"
          >
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <div className="w-8 h-8 bg-gradient-to-r from-[#007BFF] to-[#00C896] rounded-lg flex items-center justify-center mr-3">
                <Send className="w-4 h-4 text-white" />
              </div>
              Réseaux sociaux
            </h3>
            <div className="space-y-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.9 }}
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200/50 dark:border-gray-700/50 hover:shadow-xl transition-all duration-300 group"
                >
                  <div className={`w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-xl flex items-center justify-center mr-4 ${social.color} transition-all duration-300`}>
                    <social.icon className="w-5 h-5 text-gray-600 dark:text-gray-300 group-hover:text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="font-bold text-gray-900 dark:text-white">
                      {social.name}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {social.description}
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-[#00C896] opacity-0 group-hover:opacity-100 transition-all duration-300" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="border-t border-gray-200 dark:border-gray-700 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col md:flex-row items-center text-gray-500 dark:text-gray-400 text-sm mb-6 md:mb-0">
              <p className="mb-2 md:mb-0 md:mr-6">
                © {currentYear} <span className="font-semibold text-gray-700 dark:text-gray-300">Aboukhalil Mohammed Ali</span>. Tous droits réservés.
              </p>
              <div className="flex items-center">
                <span>Créé avec</span>
                <Heart className="w-4 h-4 mx-2 text-red-500 animate-pulse" />
                <span>React & Tailwind CSS</span>
              </div>
            </div>
            
            {/* Scroll to top button */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="p-4 bg-gradient-to-r from-[#007BFF] to-[#00C896] rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 group"
              aria-label="Retour en haut"
            >
              <ArrowUp className="w-5 h-5 text-white group-hover:animate-bounce" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
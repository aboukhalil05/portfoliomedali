import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { 
  Heart, 
  Github, 
  Linkedin, 
  Mail, 
  MapPin, 
  ArrowUp,
  ExternalLink,
  Home,
  User,
  Zap,
  Rocket,
  MessageCircle,
  Send
} from 'lucide-react';

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: t('footer.quickLinks.home', 'Accueil'), href: '#hero', icon: Home, description: t('footer.quickLinks.homeDesc', 'Retour à l\'accueil') },
    { name: t('footer.quickLinks.about', 'À propos'), href: '#about', icon: User, description: t('footer.quickLinks.aboutDesc', 'Découvrez mon parcours') },
    { name: t('footer.quickLinks.skills', 'Compétences'), href: '#skills', icon: Zap, description: t('footer.quickLinks.skillsDesc', 'Mes technologies') },
    { name: t('footer.quickLinks.projects', 'Projets'), href: '#projects', icon: Rocket, description: t('footer.quickLinks.projectsDesc', 'Mes réalisations') },
    { name: t('footer.quickLinks.contact', 'Contact'), href: '#contact', icon: MessageCircle, description: t('footer.quickLinks.contactDesc', 'Discutons ensemble') }
  ];

  const socialLinks = [
    {
      name: t('footer.socialLinks.github', 'GitHub'),
      href: 'https://github.com/aboukhalil05',
      icon: Github,
      color: 'hover:bg-gray-700',
      description: t('footer.socialLinks.githubDesc', 'Voir mes projets')
    },
    {
      name: t('footer.socialLinks.linkedin', 'LinkedIn'),
      href: 'https://www.linkedin.com/in/mohammed-ali-aboukhalil-a56019329/',
      icon: Linkedin,
      color: 'hover:bg-blue-600',
      description: t('footer.socialLinks.linkedinDesc', 'Mon réseau professionnel')
    },
    {
      name: t('footer.socialLinks.email', 'Email'),
      href: 'mailto:medaliaboukhail@gmail.com',
      icon: Mail,
      color: 'hover:bg-red-500',
      description: t('footer.socialLinks.emailDesc', 'Contactez-moi')
    }
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
              {t('footer.about', 'À propos')}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              {t('footer.aboutDescription', 'Développeur Full Stack passionné, je transforme vos idées en expériences web modernes et performantes. Spécialisé dans les technologies React, Laravel et les architectures cloud.')}
            </p>
            
            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center text-gray-600 dark:text-gray-300">
                <div className="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-xl flex items-center justify-center mr-3">
                  <MapPin className="w-4 h-4 text-[#00C896]" />
                </div>
                <div>
                  <div className="font-semibold">{t('footer.location', 'Maroc, Casablanca')}</div>
                  <div className="text-sm text-gray-500">{t('footer.availability', 'Disponible à distance')}</div>
                </div>
              </div>
              <div className="flex items-center text-gray-600 dark:text-gray-300">
                <div className="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-xl flex items-center justify-center mr-3">
                  <Mail className="w-4 h-4 text-[#007BFF]" />
                </div>
                <div>
                  <div className="font-semibold">{t('footer.email', 'medaliaboukhail@gmail.com')}</div>
                  <div className="text-sm text-gray-500">{t('footer.responseTime', 'Réponse sous 24h')}</div>
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
              {t('footer.navigation', 'Navigation')}
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
              {t('footer.social', 'Réseaux sociaux')}
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
                {t('footer.copyright', '© {year} Aboukhalil Mohammed Ali. Tous droits réservés.').replace('{year}', currentYear)}
              </p>
              <div className="flex items-center">
                <span>{t('footer.madeWith', 'Créé avec')}</span>
                <Heart className="w-4 h-4 mx-2 text-red-500 animate-pulse" />
                <span>{t('footer.technologies', 'React & Tailwind CSS')}</span>
              </div>
            </div>
            
            {/* Scroll to top button */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="p-4 bg-gradient-to-r from-[#007BFF] to-[#00C896] rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 group"
              aria-label={t('footer.backToTop', 'Retour en haut')}
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
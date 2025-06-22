import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Twitter, 
  Heart,
  Code,
  ArrowUp,
  MapPin,
  Phone,
  Send
} from 'lucide-react';

const Footer = () => {
  const { t } = useTranslation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: Github, href: "https://github.com", label: "GitHub", color: "hover:text-gray-900 dark:hover:text-white" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn", color: "hover:text-blue-600" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter", color: "hover:text-blue-400" },
    { icon: Mail, href: "mailto:contact@portfolio.com", label: "Email", color: "hover:text-red-500" },
  ];

  const quickLinks = [
    { path: '/', label: t('nav.home') },
    { path: '/projects', label: t('nav.projects') },
    { path: '/contact', label: t('nav.contact') },
  ];

  const contactInfo = [
    { icon: Mail, text: "contact@portfolio.com", href: "mailto:contact@portfolio.com" },
    { icon: Phone, text: "+33 1 23 45 67 89", href: "tel:+33123456789" },
    { icon: MapPin, text: "Paris, France", href: "#" },
  ];

  return (
    <footer className="relative bg-dark-900 dark:bg-black text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-tech-pattern opacity-5" />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/95 to-dark-900/90" />

      <div className="relative z-10 container-custom py-20">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Link to="/" className="inline-flex items-center space-x-3 mb-6 group">
              <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center shadow-glow-primary group-hover:shadow-glow-secondary transition-all duration-300">
                <Code className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold font-display gradient-text">
                Portfolio
              </span>
            </Link>
            
            <p className="text-dark-300 mb-8 max-w-md leading-relaxed">
              {t('hero.description')}
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-dark-800 rounded-2xl flex items-center justify-center hover:bg-primary-500/20 border border-dark-700 hover:border-primary-500 transition-all duration-300 group"
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <social.icon className={`w-5 h-5 text-dark-400 transition-colors duration-300 ${social.color}`} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-6 text-white">
              Navigation
            </h3>
            <ul className="space-y-4">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.path}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link 
                    to={link.path} 
                    className="text-dark-300 hover:text-primary-400 transition-colors duration-300 flex items-center group"
                  >
                    <div className="w-1 h-1 bg-primary-500 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300" />
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-6 text-white">
              {t('nav.contact')}
            </h3>
            <div className="space-y-4">
              {contactInfo.map((contact, index) => (
                <motion.a
                  key={contact.text}
                  href={contact.href}
                  className="flex items-center space-x-3 text-dark-300 hover:text-primary-400 transition-colors duration-300 group"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-8 h-8 bg-dark-800 rounded-lg flex items-center justify-center group-hover:bg-primary-500/20 transition-all duration-300">
                    <contact.icon className="w-4 h-4" />
                  </div>
                  <span className="text-sm">{contact.text}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div 
          className="border-t border-dark-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center space-x-2 text-dark-400 text-sm mb-4 md:mb-0">
            <span>{t('footer.copyright')}</span>
            <Heart className="w-4 h-4 text-red-500 fill-current animate-pulse" />
            <span>{t('footer.made')}</span>
          </div>
          
          <motion.button
            onClick={scrollToTop}
            className="w-12 h-12 bg-dark-800 rounded-2xl flex items-center justify-center hover:bg-primary-500/20 border border-dark-700 hover:border-primary-500 transition-all duration-300 group"
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowUp className="w-5 h-5 text-dark-400 group-hover:text-primary-400 transition-colors duration-300" />
          </motion.button>
        </motion.div>
      </div>

      {/* Newsletter Section (Optional) */}
      <motion.div 
        className="relative border-t border-dark-800"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container-custom py-12">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-white">
              Restez connecté
            </h3>
            <p className="text-dark-300 mb-8">
              Recevez les dernières nouvelles et mises à jour de mes projets.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Votre email"
                className="flex-1 px-6 py-4 bg-dark-800 border border-dark-700 rounded-2xl text-white placeholder-dark-400 focus:ring-4 focus:ring-primary-500/20 focus:border-primary-500 transition-all duration-300"
              />
              <motion.button
                className="btn-primary px-8 py-4 flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Send className="w-5 h-5 mr-2" />
                S'abonner
              </motion.button>
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer; 
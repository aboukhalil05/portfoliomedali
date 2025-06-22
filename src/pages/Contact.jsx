import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  MessageSquare,
  Clock,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simuler l'envoi
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    
    // Reset après 3 secondes
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "contact@portfolio.com",
      href: "mailto:contact@portfolio.com",
      color: "text-red-500",
      bgColor: "bg-red-500/10"
    },
    {
      icon: Phone,
      title: "Téléphone",
      value: "+33 1 23 45 67 89",
      href: "tel:+33123456789",
      color: "text-green-500",
      bgColor: "bg-green-500/10"
    },
    {
      icon: MapPin,
      title: "Localisation",
      value: "Paris, France",
      href: "#",
      color: "text-blue-500",
      bgColor: "bg-blue-500/10"
    },
    {
      icon: Clock,
      title: "Disponibilité",
      value: "Lun-Ven, 9h-18h",
      href: "#",
      color: "text-purple-500",
      bgColor: "bg-purple-500/10"
    }
  ];

  const socialLinks = [
    { icon: "github", href: "https://github.com", label: "GitHub", color: "hover:text-gray-900 dark:hover:text-white" },
    { icon: "linkedin", href: "https://linkedin.com", label: "LinkedIn", color: "hover:text-blue-600" },
    { icon: "twitter", href: "https://twitter.com", label: "Twitter", color: "hover:text-blue-400" },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-dark-950 pt-20">
      {/* Header */}
      <section className="relative py-20 bg-gradient-to-r from-primary-500 to-secondary-500 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-tech-pattern opacity-10" />
        <motion.div
          className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"
          animate={{
            x: [0, -50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-10 left-10 w-40 h-40 bg-white/5 rounded-full blur-3xl"
          animate={{
            x: [0, 60, 0],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <div className="relative z-10 container-custom text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl lg:text-7xl font-bold text-white mb-6"
          >
            {t('page.contact.title')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl lg:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed"
          >
            N'hésitez pas à me contacter pour discuter de vos projets ou pour toute question.
          </motion.p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className="text-3xl font-bold text-dark-900 dark:text-white mb-8">
                Informations de contact
              </h2>
              
              <div className="space-y-6 mb-12">
                {contactInfo.map((contact, index) => (
                  <motion.a
                    key={contact.title}
                    href={contact.href}
                    className="flex items-start space-x-4 p-6 bg-white dark:bg-dark-800 rounded-2xl shadow-soft hover:shadow-xl transition-all duration-300 group"
                    whileHover={{ scale: 1.02, y: -5 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className={`w-12 h-12 ${contact.bgColor} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <contact.icon className={`w-6 h-6 ${contact.color}`} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-dark-900 dark:text-white mb-1">
                        {contact.title}
                      </h3>
                      <p className="text-dark-600 dark:text-dark-300">
                        {contact.value}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-xl font-semibold text-dark-900 dark:text-white mb-6">
                  Suivez-moi
                </h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-white dark:bg-dark-800 rounded-2xl shadow-soft flex items-center justify-center hover:shadow-glow border border-dark-200 dark:border-dark-600 hover:border-primary-500 transition-all duration-300 group"
                      whileHover={{ scale: 1.1, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className={`w-5 h-5 ${social.color} transition-colors duration-300`}>
                        {/* Icon placeholder - you can add actual social icons here */}
                        <div className="w-full h-full bg-current rounded" />
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="bg-white dark:bg-dark-800 rounded-2xl shadow-soft p-8 border border-dark-100 dark:border-dark-700">
                <div className="flex items-center space-x-3 mb-8">
                  <div className="w-12 h-12 bg-primary-500/10 rounded-2xl flex items-center justify-center">
                    <MessageSquare className="w-6 h-6 text-primary-500" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-dark-900 dark:text-white">
                      Envoyez-moi un message
                    </h2>
                    <p className="text-dark-600 dark:text-dark-300">
                      Je réponds généralement sous 24h
                    </p>
                  </div>
                </div>
                
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-dark-900 dark:text-white mb-2">
                      Message envoyé !
                    </h3>
                    <p className="text-dark-600 dark:text-dark-300">
                      Merci pour votre message. Je vous répondrai bientôt.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-2">
                          Nom complet *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="input-field"
                          placeholder="Votre nom"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="input-field"
                          placeholder="votre@email.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-2">
                        Sujet *
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="input-field"
                        placeholder="Sujet de votre message"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="input-field resize-none"
                        placeholder="Votre message..."
                      />
                    </div>

                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full btn-primary group disabled:opacity-50 disabled:cursor-not-allowed"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {isSubmitting ? (
                        <div className="flex items-center justify-center">
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                          Envoi en cours...
                        </div>
                      ) : (
                        <div className="flex items-center justify-center">
                          <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                          Envoyer le message
                        </div>
                      )}
                    </motion.button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact; 
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm, ValidationError } from '@formspree/react';
import { useTranslation } from 'react-i18next';
import { 
  Mail, 
  User, 
  MessageSquare, 
  Send, 
  CheckCircle, 
  Sparkles,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Heart,
  Zap,
  Star,
  ThumbsUp,
  PartyPopper
} from 'lucide-react';

const Contact = () => {
  const { t } = useTranslation();
  const [state, handleSubmit] = useForm("xovvjbrn");
  const [focusedField, setFocusedField] = useState(null);

  // Floating particles animation
  const particles = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    size: Math.random() * 3 + 1,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 15 + 10,
    delay: Math.random() * 5,
  }));

  const contactInfo = [
    {
      icon: Mail,
      title: t('contact.info.email', 'Email'),
      value: "medaliaboukhail@gmail.com",
      color: "from-red-500 to-pink-500",
      bgColor: "bg-red-50 dark:bg-red-900/20"
    },
    {
      icon: Phone,
      title: t('contact.info.phone', 'Téléphone'),
      value: "+212710290759",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50 dark:bg-green-900/20"
    },
    {
      icon: MapPin,
      title: t('contact.info.location', 'Localisation'),
      value: t('contact.info.locationValue', 'Casablanca, Maroc'),
      color: "from-purple-500 to-violet-500",
      bgColor: "bg-purple-50 dark:bg-purple-900/20"
    }
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/aboukhalil05", color: "hover:bg-gray-700 hover:text-white" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/mohammed-ali-aboukhalil-a56019329/", color: "hover:bg-blue-600 hover:text-white" },
    { icon: Mail, href: "mailto:medaliaboukhail@gmail.com", color: "hover:bg-red-500 hover:text-white" }
  ];

  // Try to load like image, fallback to thumbs up icon
  const likeImageSrc = '/src/assets/images/like.png';
  const [imageError, setImageError] = useState(false);

  if (state.succeeded) {
    return (
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
        
        {/* Enhanced Background Effects for Success */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Celebration Particles */}
          {Array.from({ length: 25 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                backgroundColor: i % 3 === 0 ? '#007BFF' : i % 3 === 1 ? '#00C896' : '#FFD700',
              }}
              animate={{
                y: [0, -100, 0],
                x: [0, Math.random() * 60 - 30, 0],
                opacity: [0, 1, 0],
                scale: [0, 1.5, 0],
                rotate: [0, 360, 720],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        <div className="max-w-lg w-full relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-2xl border border-gray-200/50 dark:border-gray-700/50 relative overflow-hidden"
          >
            
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-4 left-4 w-8 h-8 bg-green-500 rounded-full"></div>
              <div className="absolute top-8 right-8 w-6 h-6 bg-blue-500 rounded-full"></div>
              <div className="absolute bottom-8 left-8 w-10 h-10 bg-yellow-500 rounded-full"></div>
              <div className="absolute bottom-4 right-4 w-4 h-4 bg-green-500 rounded-full"></div>
            </div>

            {/* Success Icon with Like Image */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.2, duration: 0.8, type: "spring", bounce: 0.6 }}
              className="relative w-20 h-20 mx-auto mb-6"
            >
              {/* Animated Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full bg-gradient-to-r from-green-400 via-blue-500 to-green-400 p-1"
              >
                <div className="w-full h-full rounded-full bg-white dark:bg-gray-800"></div>
              </motion.div>
              
              {/* Like Image or Fallback */}
              <div className="absolute inset-2 rounded-full bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center shadow-xl">
                {!imageError ? (
                  <img 
                    src={likeImageSrc} 
                    alt="Like" 
                    className="w-10 h-10 object-contain"
                    onError={() => setImageError(true)}
                  />
                ) : (
                  <ThumbsUp className="w-10 h-10 text-white" />
                )}
              </div>
              
              {/* Sparkle Effects */}
              {Array.from({ length: 4 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1.5 h-1.5 bg-yellow-400 rounded-full"
                  style={{
                    left: `${25 + i * 20}%`,
                    top: `${15 + (i % 2) * 70}%`,
                  }}
                  animate={{
                    scale: [0, 1, 0],
                    opacity: [0, 1, 0],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.3,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </motion.div>
            
            {/* Success Title */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-3xl font-black text-gray-900 dark:text-white mb-4 text-center flex items-center justify-center gap-3"
            >
              {t('contact.success.title', 'Message envoyé !')}
              <motion.span
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
              >
                🎉
              </motion.span>
            </motion.h2>
            
            {/* Success Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-base text-gray-600 dark:text-gray-300 mb-6 leading-relaxed text-center"
            >
              {t('contact.success.description', 'Merci pour votre message ! Je vous répondrai dans les plus brefs délais.')}
            </motion.p>

            {/* Fun Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="grid grid-cols-3 gap-4 mb-6"
            >
              <div className="text-center">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-xl font-bold text-green-500"
                >
                  ✓
                </motion.div>
                <p className="text-xs text-gray-500">Envoyé</p>
              </div>
              <div className="text-center">
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  className="text-xl font-bold text-blue-500"
                >
                  ⚡
                </motion.div>
                <p className="text-xs text-gray-500">Rapide</p>
              </div>
              <div className="text-center">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="text-xl font-bold text-yellow-500"
                >
                  ⭐
                </motion.div>
                <p className="text-xs text-gray-500">Parfait</p>
              </div>
            </motion.div>

            {/* Close Button */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.6 }}
              onClick={() => window.location.reload()}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-gradient-to-r from-[#007BFF] to-[#00C896] text-white font-bold py-3 px-6 rounded-2xl transition-all duration-300 shadow-lg"
            >
              Parfait ! 👍
            </motion.button>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="flex justify-center gap-3 mt-4"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.4 + index * 0.1, type: "spring", bounce: 0.6 }}
                  whileHover={{ 
                    scale: 1.2, 
                    y: -2
                  }}
                  className={`p-2 rounded-xl bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 ${social.color} transition-all duration-300 shadow-md`}
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900/20 relative overflow-hidden">
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient Orbs */}
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-[#007BFF]/10 to-[#00C896]/10 rounded-full blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-[#00C896]/10 to-[#007BFF]/10 rounded-full blur-3xl"
          animate={{
            x: [0, -25, 0],
            y: [0, 15, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Floating Particles */}
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute w-1 h-1 bg-gradient-to-r from-[#007BFF] to-[#00C896] rounded-full opacity-40"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0]
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Decorative Icons */}
        <motion.div
          className="absolute top-20 left-20 text-[#007BFF]/10 dark:text-[#007BFF]/5"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <Sparkles className="w-12 h-12" />
        </motion.div>
        <motion.div
          className="absolute bottom-20 right-20 text-[#00C896]/10 dark:text-[#00C896]/5"
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        >
          <Zap className="w-10 h-10" />
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-16 h-16 bg-gradient-to-r from-[#007BFF] to-[#00C896] rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl"
          >
            <Mail className="w-8 h-8 text-white" />
          </motion.div>
          
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 dark:text-white mb-6">
            Contactez <span className="bg-gradient-to-r from-[#007BFF] to-[#00C896] bg-clip-text text-transparent">moi</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Vous avez un projet en tête ? Discutons de vos idées et créons quelque chose d'extraordinaire ensemble !
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl border border-gray-200/50 dark:border-gray-700/50">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
                <div className="w-8 h-8 bg-gradient-to-r from-[#007BFF] to-[#00C896] rounded-lg flex items-center justify-center mr-3">
                  <User className="w-4 h-4 text-white" />
                </div>
                {t('contact.title', 'Contactez')} {t('contact.titleHighlight', 'moi')}
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.4 }}
                    whileHover={{ scale: 1.02, x: 5 }}
                    className={`flex items-center space-x-4 p-4 rounded-2xl ${info.bgColor} transition-all duration-300 cursor-pointer group`}
                  >
                    <div className={`w-12 h-12 bg-gradient-to-r ${info.color} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white">{info.title}</h4>
                      <p className="text-gray-600 dark:text-gray-300">{info.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                  <Heart className="w-5 h-5 text-red-500 mr-2" />
                  {t('footer.social', 'Réseaux sociaux')}
                </h4>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -3 }}
                      whileTap={{ scale: 0.95 }}
                      className={`p-4 rounded-2xl bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 ${social.color} transition-all duration-300 shadow-lg`}
                    >
                      <social.icon className="w-6 h-6" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl border border-gray-200/50 dark:border-gray-700/50"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
              <div className="w-8 h-8 bg-gradient-to-r from-[#007BFF] to-[#00C896] rounded-lg flex items-center justify-center mr-3">
                <MessageSquare className="w-4 h-4 text-white" />
              </div>
              {t('contact.form.send', 'Envoyer le message')}
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Name Field */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="relative"
              >
                <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                  {t('contact.form.name', 'Nom complet')}
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    name="name"
                    required
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full pl-12 pr-4 py-4 border-2 rounded-2xl bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-300 focus:outline-none focus:bg-white dark:focus:bg-gray-600 ${
                      focusedField === 'name' 
                        ? 'border-[#007BFF] ring-4 ring-[#007BFF]/20' 
                        : 'border-gray-200 dark:border-gray-600 hover:border-[#00C896]'
                    }`}
                    placeholder={t('contact.form.namePlaceholder', 'Votre nom complet')}
                  />
                </div>
              </motion.div>

              {/* Email Field */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
                className="relative"
              >
                <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                  {t('contact.form.email', 'Adresse email')}
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email" 
                    name="email"
                    required
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full pl-12 pr-4 py-4 border-2 rounded-2xl bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-300 focus:outline-none focus:bg-white dark:focus:bg-gray-600 ${
                      focusedField === 'email' 
                        ? 'border-[#007BFF] ring-4 ring-[#007BFF]/20' 
                        : 'border-gray-200 dark:border-gray-600 hover:border-[#00C896]'
                    }`}
                    placeholder={t('contact.form.emailPlaceholder', 'votre.email@exemple.com')}
                  />
                </div>
                <ValidationError 
                  prefix="Email" 
                  field="email"
                  errors={state.errors}
                  className="text-red-500 text-sm mt-1"
                />
              </motion.div>

              {/* Message Field */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
                className="relative"
              >
                <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                  {t('contact.form.message', 'Message')}
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                  <textarea
                    name="message"
                    rows="6"
                    required
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full pl-12 pr-4 py-4 border-2 rounded-2xl bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-300 focus:outline-none focus:bg-white dark:focus:bg-gray-600 resize-none ${
                      focusedField === 'message' 
                        ? 'border-[#007BFF] ring-4 ring-[#007BFF]/20' 
                        : 'border-gray-200 dark:border-gray-600 hover:border-[#00C896]'
                    }`}
                    placeholder={t('contact.form.messagePlaceholder', 'Décrivez votre projet ou votre demande...')}
                  />
                </div>
                <ValidationError 
                  prefix="Message" 
                  field="message"
                  errors={state.errors}
                  className="text-red-500 text-sm mt-1"
                />
              </motion.div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={state.submitting}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.9 }}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-[#007BFF] to-[#00C896] text-white font-bold py-4 px-8 rounded-2xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed group"
              >
                <AnimatePresence mode="wait">
                  {state.submitting ? (
                    <motion.div
                      key="loading"
                      initial={{ opacity: 0, rotate: 0 }}
                      animate={{ opacity: 1, rotate: 360 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    >
                      <Star className="w-5 h-5" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="send"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      className="flex items-center gap-3"
                    >
                      <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                      <span>{state.submitting ? t('contact.form.sending', 'Envoi en cours...') : t('contact.form.send', 'Envoyer le message')}</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 
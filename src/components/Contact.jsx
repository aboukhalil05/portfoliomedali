import React from 'react';
import { motion } from 'framer-motion';
import { useForm, ValidationError } from '@formspree/react';
import { 
  Send, 
  Mail, 
  User, 
  MessageSquare, 
  CheckCircle,
  Github,
  Linkedin,
  Phone,
  MapPin,
  Sparkles
} from 'lucide-react';

function Contact() {
  const [state, handleSubmit] = useForm("xovvjbrn");

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  // Success message component
  if (state.succeeded) {
    return (
      <section className="py-20 bg-white dark:bg-gray-900 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="bg-gradient-to-br from-[#007BFF]/10 to-[#00C896]/10 rounded-3xl p-12 border border-[#007BFF]/20"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="w-20 h-20 bg-gradient-to-r from-[#007BFF] to-[#00C896] rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <CheckCircle className="w-10 h-10 text-white" />
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-3xl font-bold text-gray-900 dark:text-white mb-4"
            >
              Message envoyé avec succès ! 🎉
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="text-lg text-gray-600 dark:text-gray-300 mb-8"
            >
              Merci pour votre message ! Je vous répondrai dans les plus brefs délais.
            </motion.p>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              onClick={() => window.location.reload()}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#007BFF] to-[#00C896] text-white font-bold rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <Send className="w-5 h-5" />
              Envoyer un autre message
            </motion.button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Sparkles className="w-8 h-8 text-[#007BFF]" />
              <h2 className="text-4xl lg:text-5xl font-black text-gray-900 dark:text-white">
                Contactez-<span className="bg-gradient-to-r from-[#007BFF] to-[#00C896] bg-clip-text text-transparent">moi</span>
              </h2>
              <Sparkles className="w-8 h-8 text-[#00C896]" />
            </div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Une idée de projet ? Une collaboration ? N'hésitez pas à me contacter !
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            
            {/* Left - Contact Info */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  Restons en contact
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                  Je suis toujours ouvert aux nouvelles opportunités et collaborations. 
                  N'hésitez pas à me contacter pour discuter de vos projets !
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                {[
                  {
                    icon: Mail,
                    title: "Email",
                    value: "contact@example.com",
                    color: "from-red-500 to-pink-500"
                  },
                  {
                    icon: Phone,
                    title: "Téléphone",
                    value: "+212 6XX XXX XXX",
                    color: "from-green-500 to-emerald-500"
                  },
                  {
                    icon: MapPin,
                    title: "Localisation",
                    value: "Casablanca, Maroc",
                    color: "from-blue-500 to-cyan-500"
                  }
                ].map((contact, index) => (
                  <motion.div
                    key={contact.title}
                    variants={itemVariants}
                    whileHover={{ scale: 1.02, x: 10 }}
                    className="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-2xl border border-gray-200/50 dark:border-gray-700/50 hover:shadow-lg transition-all duration-300"
                  >
                    <div className={`w-12 h-12 bg-gradient-to-r ${contact.color} rounded-full flex items-center justify-center`}>
                      <contact.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">{contact.title}</h4>
                      <p className="text-gray-600 dark:text-gray-300">{contact.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <motion.div variants={itemVariants} className="pt-6">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Suivez-moi
                </h4>
                <div className="flex space-x-4">
                  {[
                    { icon: Github, href: "https://github.com", color: "hover:bg-gray-900 dark:hover:bg-white hover:text-white dark:hover:text-gray-900" },
                    { icon: Linkedin, href: "https://linkedin.com", color: "hover:bg-blue-600 hover:text-white" },
                    { icon: Mail, href: "mailto:contact@example.com", color: "hover:bg-red-500 hover:text-white" }
                  ].map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center ${social.color} transition-all duration-300 group`}
                    >
                      <social.icon className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Right - Contact Form */}
            <motion.div variants={itemVariants}>
              <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-2xl border border-gray-200/50 dark:border-gray-700/50 relative overflow-hidden">
                
                {/* Decorative background */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#007BFF]/5 to-[#00C896]/5 pointer-events-none" />
                
                {/* Form header */}
                <div className="relative z-10 mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    Envoyez-moi un message
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Je vous répondrai dans les 24 heures
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
                  
                  {/* Name Field */}
                  <div>
                    <label htmlFor="name" className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      <User className="w-4 h-4" />
                      Nom complet
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-[#007BFF] focus:border-transparent dark:bg-gray-700 dark:text-white transition-all duration-300 hover:border-[#007BFF]/50"
                      placeholder="Votre nom complet"
                    />
                    <ValidationError 
                      prefix="Name" 
                      field="name"
                      errors={state.errors}
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>

                  {/* Email Field */}
                  <div>
                    <label htmlFor="email" className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      <Mail className="w-4 h-4" />
                      Adresse email
                    </label>
                    <input
                      id="email"
                      type="email" 
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-[#007BFF] focus:border-transparent dark:bg-gray-700 dark:text-white transition-all duration-300 hover:border-[#007BFF]/50"
                      placeholder="votre@email.com"
                    />
                    <ValidationError 
                      prefix="Email" 
                      field="email"
                      errors={state.errors}
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>

                  {/* Subject Field */}
                  <div>
                    <label htmlFor="subject" className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      <MessageSquare className="w-4 h-4" />
                      Sujet
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-[#007BFF] focus:border-transparent dark:bg-gray-700 dark:text-white transition-all duration-300 hover:border-[#007BFF]/50"
                      placeholder="Sujet de votre message"
                    />
                    <ValidationError 
                      prefix="Subject" 
                      field="subject"
                      errors={state.errors}
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>

                  {/* Message Field */}
                  <div>
                    <label htmlFor="message" className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      <MessageSquare className="w-4 h-4" />
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-[#007BFF] focus:border-transparent dark:bg-gray-700 dark:text-white transition-all duration-300 hover:border-[#007BFF]/50 resize-none"
                      placeholder="Décrivez votre projet ou votre message..."
                    />
                    <ValidationError 
                      prefix="Message" 
                      field="message"
                      errors={state.errors}
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={state.submitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-[#007BFF] to-[#00C896] text-white font-bold py-4 px-6 rounded-xl hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-70 disabled:cursor-not-allowed group"
                  >
                    {state.submitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Envoi en cours...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                        <span>Envoyer le message</span>
                      </>
                    )}
                  </motion.button>

                  {/* Error Display */}
                  {state.errors && state.errors.length > 0 && (
                    <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl">
                      <p className="text-red-600 dark:text-red-400 text-sm">
                        Une erreur s'est produite. Veuillez réessayer.
                      </p>
                    </div>
                  )}
                </form>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact; 
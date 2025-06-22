import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  fr: {
    translation: {
      // Navbar
      'nav.home': 'Accueil',
      'nav.projects': 'Projets',
      'nav.contact': 'Contact',
      'nav.language': 'Langue',
      'nav.theme': 'Thème',
      'nav.dark': 'Sombre',
      'nav.light': 'Clair',
      
      // Hero
      'hero.title': 'Développeur Full Stack',
      'hero.subtitle': 'Créateur d\'expériences web innovantes',
      'hero.description': 'Passionné par le développement web moderne, je crée des applications performantes et intuitives.',
      'hero.cta': 'Voir mes projets',
      
      // Footer
      'footer.copyright': '© 2024 Tous droits réservés',
      'footer.made': 'Fait avec ❤️',
      
      // Project Card
      'project.view': 'Voir le projet',
      'project.github': 'Code source',
      
      // Pages
      'page.home.title': 'Accueil',
      'page.projects.title': 'Mes Projets',
      'page.contact.title': 'Contact'
    }
  },
  ar: {
    translation: {
      // Navbar
      'nav.home': 'الرئيسية',
      'nav.projects': 'المشاريع',
      'nav.contact': 'اتصل بنا',
      'nav.language': 'اللغة',
      'nav.theme': 'المظهر',
      'nav.dark': 'داكن',
      'nav.light': 'فاتح',
      
      // Hero
      'hero.title': 'مطور ويب شامل',
      'hero.subtitle': 'مبدع تجارب ويب مبتكرة',
      'hero.description': 'شغوف بالتطوير الحديث للويب، أنشئ تطبيقات عالية الأداء وبديهية.',
      'hero.cta': 'شاهد مشاريعي',
      
      // Footer
      'footer.copyright': '© 2024 جميع الحقوق محفوظة',
      'footer.made': 'صنع بـ ❤️',
      
      // Project Card
      'project.view': 'عرض المشروع',
      'project.github': 'الكود المصدري',
      
      // Pages
      'page.home.title': 'الرئيسية',
      'page.projects.title': 'مشاريعي',
      'page.contact.title': 'اتصل بنا'
    }
  },
  en: {
    translation: {
      // Navbar
      'nav.home': 'Home',
      'nav.projects': 'Projects',
      'nav.contact': 'Contact',
      'nav.language': 'Language',
      'nav.theme': 'Theme',
      'nav.dark': 'Dark',
      'nav.light': 'Light',
      
      // Hero
      'hero.title': 'Full Stack Developer',
      'hero.subtitle': 'Creator of innovative web experiences',
      'hero.description': 'Passionate about modern web development, I create high-performance and intuitive applications.',
      'hero.cta': 'View my projects',
      
      // Footer
      'footer.copyright': '© 2024 All rights reserved',
      'footer.made': 'Made with ❤️',
      
      // Project Card
      'project.view': 'View project',
      'project.github': 'Source code',
      
      // Pages
      'page.home.title': 'Home',
      'page.projects.title': 'My Projects',
      'page.contact.title': 'Contact'
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    debug: false,
    
    interpolation: {
      escapeValue: false,
    },
    
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
  });

export default i18n; 
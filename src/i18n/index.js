import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  fr: {
    translation: {
      nav: {
        home: 'Accueil',
        projects: 'Projets',
        contact: 'Contact'
      },
      hero: {
        title: 'Développeur Full Stack',
        subtitle: 'Créateur d\'expériences numériques',
        description: 'Passionné par le développement web moderne, je crée des applications performantes et intuitives.',
        cta: 'Voir mes projets'
      },
      // Navbar
      'nav.language': 'Langue',
      'nav.theme': 'Thème',
      'nav.dark': 'Sombre',
      'nav.light': 'Clair',
      
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
  en: {
    translation: {
      nav: {
        home: 'Home',
        projects: 'Projects',
        contact: 'Contact'
      },
      hero: {
        title: 'Full Stack Developer',
        subtitle: 'Digital Experience Creator',
        description: 'Passionate about modern web development, I create performant and intuitive applications.',
        cta: 'View my projects'
      },
      // Navbar
      'nav.language': 'Language',
      'nav.theme': 'Theme',
      'nav.dark': 'Dark',
      'nav.light': 'Light',
      
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
  },
  ar: {
    translation: {
      nav: {
        home: 'الرئيسية',
        projects: 'المشاريع',
        contact: 'اتصل بي'
      },
      hero: {
        title: 'مطور ويب متكامل',
        subtitle: 'مبدع تجارب رقمية',
        description: 'شغوف بتطوير الويب الحديث، أقوم بإنشاء تطبيقات عالية الأداء وسهلة الاستخدام.',
        cta: 'عرض مشاريعي'
      },
      // Navbar
      'nav.language': 'اللغة',
      'nav.theme': 'المظهر',
      'nav.dark': 'داكن',
      'nav.light': 'فاتح',
      
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
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: 'fr',
    fallbackLng: 'fr',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n; 
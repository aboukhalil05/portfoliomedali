import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  fr: {
    translation: {
      nav: {
        home: 'Accueil',
        about: 'À propos',
        formation: 'Formation', // Garde l'ancienne clé pour compatibilité
        parcours: 'Parcours',   // Nouvelle clé
        skills: 'Compétences',
        projects: 'Projets',
        contact: 'Contact'
      },
      hero: {
        name: 'Aboukhalil Mohammed Ali',
        role: 'Développeur Fullstack',
        greeting: 'Je suis',
        title: 'Développeur Full Stack',
        subtitle: 'Créateur d\'expériences numériques',
        description: 'Passionné par la création de solutions web complètes, de l\'interface utilisateur aux architectures backend robustes.',
        cta: 'Découvrir mes projets',
        scrollDown: 'Défiler vers le bas'
      },
      about: {
        title: 'À propos de',
        titleHighlight: 'moi',
        subtitle: 'Passionné par le développement web et les nouvelles technologies',
        whoAmI: 'Qui suis-je ?',
        description: 'Développeur passionné avec une expertise en technologies modernes. J\'aime créer des solutions innovantes qui allient performance, esthétique et expérience utilisateur exceptionnelle.',
        specialization: 'Spécialisé dans le développement web moderne avec React, Laravel et les dernières technologies. Je transforme les idées en applications web performantes et élégantes.',
        age: 'Ans',
        experience: 'Années d\'expérience',
        downloadCV: 'Télécharger mon CV'
      },
      skills: {
        title: 'Mes',
        titleHighlight: 'Compétences',
        subtitle: 'Technologies et outils que je maîtrise pour créer des solutions performantes',
        categories: {
          all: 'Toutes',
          frontend: 'Frontend',
          backend: 'Backend',
          tools: 'Outils'
        },
        level: 'Niveau',
        percentage: '%',
        proficiency: 'Maîtrise'
      },
      projects: {
        title: 'Mes',
        titleHighlight: 'Projets',
        subtitle: 'Découvrez une sélection de mes réalisations qui illustrent ma passion pour le développement web',
        stats: {
          completed: 'Projets réalisés',
          technologies: 'Technologies',
          linesOfCode: 'Lignes de code',
          experience: 'Expérience'
        },
        // Individual projects
        bricoloman: {
          title: 'Bricoloman',
          category: 'Plateforme',
          description: 'Plateforme digitale de mise en relation entre particuliers et artisans du dépannage et de la rénovation.'
        },
        apixel: {
          title: 'Apixel',
          category: 'Système POS',
          description: 'Système (POS – Point of Sale) de gestion des ventes.'
        },
        isgidocs: {
          title: 'ISGIdocs',
          category: 'Plateforme éducative',
          description: 'Une plateforme web pour accéder facilement aux ressources académiques.'
        }
      },
      parcours: {
        title: 'Mon',
        titleHighlight: 'Parcours',
        subtitle: 'Formation et expériences qui ont façonné mon expertise en développement',
        formation: 'Formation',
        experience: 'Expérience',
        education: {
          title1: 'Technicien spécialisé en développement digital',
          date1: '2023 - 2025',
          place1: 'ISGI Casablanca',
          desc1: 'Formation intensive en développement web Full-Stack. Maîtrise des technologies modernes : React, Laravel, bases de données, et méthodologies agiles.',
          title2: 'Baccalauréat Physique-Chimie',
          date2: '2022 - 2023',
          place2: 'Académie Maurice Bucaill Casablanca',
          desc2: 'Diplôme obtenu avec mention bien. Solide formation scientifique développant l\'esprit logique et analytique.'
        },
        work: {
          title1: 'Stage en développement web',
          company1: 'EKM Consulting',
          date1: '2025',
          place1: 'Casablanca, Maroc',
          desc1: 'Développement d\'applications web POS (Point of Sale). Travail en équipe sur des projets réels avec des technologies modernes.'
        }
      },
      contact: {
        title: 'Contactez',
        titleHighlight: 'moi',
        subtitle: 'Vous avez un projet en tête ? Discutons de vos idées et créons quelque chose d\'extraordinaire ensemble !',
        contactInfo: 'Informations de contact',
        sendMessage: 'Envoyez-moi un message',
        form: {
          firstName: 'Prénom',
          lastName: 'Nom',
          name: 'Nom complet',
          namePlaceholder: 'Votre nom complet',
          email: 'Email',
          emailPlaceholder: 'votre.email@exemple.com',
          subject: 'Sujet',
          message: 'Message',
          messagePlaceholder: 'Décrivez votre projet ou votre demande...',
          send: 'Envoyer le message',
          sending: 'Envoi en cours...'
        },
        success: {
          title: 'Message envoyé !',
          description: 'Merci pour votre message ! Je vous répondrai dans les plus brefs délais.',
          emoji: '🎉'
        },
        info: {
          email: 'Email',
          phone: 'Téléphone',
          location: 'Localisation',
          locationValue: 'Maroc, Casablanca',
          emailValue: 'contact@portfolio.com',
          phoneValue: '+33 1 23 45 67 89'
        }
      },
      footer: {
        about: 'À propos',
        aboutDescription: 'Développeur Full Stack passionné, je transforme vos idées en expériences web modernes et performantes. Spécialisé dans les technologies React, Laravel et les architectures cloud.',
        navigation: 'Navigation',
        social: 'Réseaux sociaux',
        location: 'Maroc, Casablanca',
        availability: 'Disponible à distance',
        email: 'medaliaboukhail@gmail.com',
        responseTime: 'Réponse sous 24h',
        copyright: '© {year} Aboukhalil Mohammed Ali. Tous droits réservés.',
        madeWith: 'Créé avec',
        technologies: 'React & Tailwind CSS',
        backToTop: 'Retour en haut',
        quickLinks: {
          home: 'Accueil',
          homeDesc: 'Retour à l\'accueil',
          about: 'À propos',
          aboutDesc: 'Découvrez mon parcours',
          skills: 'Compétences',
          skillsDesc: 'Mes technologies',
          projects: 'Projets',
          projectsDesc: 'Mes réalisations',
          contact: 'Contact',
          contactDesc: 'Discutons ensemble'
        },
        socialLinks: {
          github: 'GitHub',
          githubDesc: 'Voir mes projets',
          linkedin: 'LinkedIn',
          linkedinDesc: 'Mon réseau professionnel',
          email: 'Email',
          emailDesc: 'Contactez-moi'
        }
      },
      // Navbar
      'nav.language': 'Langue',
      'nav.theme': 'Thème',
      'nav.dark': 'Sombre',
      'nav.light': 'Clair',
      
      // Project Card
      'project.view': 'Voir le projet',
      'project.github': 'Code source',
      'project.year': 'Année',
      'project.technologies': 'Technologies',
      'project.category': 'Catégorie',
      'project.duration': 'Durée',
      'project.status': 'Statut',
      
      // Loading
      loading: {
        welcome: 'Bienvenue dans mon univers',
        loading: 'Chargement en cours...',
        preparing: 'Préparation de quelque chose d\'incroyable',
        initializing: 'Initialisation du portfolio',
        almostReady: 'Presque prêt...',
        letsGo: 'C\'est parti ! 🚀'
      },
      
      // Common/Utilities
      common: {
        readMore: 'Lire plus',
        readLess: 'Lire moins',
        seeMore: 'Voir plus',
        showAll: 'Tout afficher',
        close: 'Fermer',
        open: 'Ouvrir',
        save: 'Enregistrer',
        cancel: 'Annuler',
        confirm: 'Confirmer',
        yes: 'Oui',
        no: 'Non',
        loading: 'Chargement...',
        error: 'Erreur',
        success: 'Succès',
        warning: 'Attention',
        info: 'Information',
        back: 'Retour',
        next: 'Suivant',
        previous: 'Précédent',
        search: 'Rechercher',
        filter: 'Filtrer',
        sort: 'Trier',
        reset: 'Réinitialiser',
        apply: 'Appliquer',
        update: 'Mettre à jour',
        delete: 'Supprimer',
        edit: 'Modifier',
        view: 'Voir',
        download: 'Télécharger',
        upload: 'Téléverser',
        share: 'Partager',
        copy: 'Copier',
        paste: 'Coller',
        print: 'Imprimer',
        settings: 'Paramètres',
        help: 'Aide',
        about: 'À propos',
        version: 'Version',
        language: 'Langue',
        theme: 'Thème',
        dark: 'Sombre',
        light: 'Clair',
        auto: 'Automatique'
      },
      
      // Pages
      'page.home.title': 'Accueil',
      'page.projects.title': 'Mes Projets',
      'page.contact.title': 'Contact',
      
      // Meta/SEO
      meta: {
        title: 'Mohammed Ali Aboukhalil - Développeur Full Stack',
        description: 'Développeur Full Stack passionné spécialisé en React, Laravel et technologies modernes. Créateur d\'expériences web performantes et élégantes.',
        keywords: 'développeur, full stack, react, laravel, javascript, php, web, casablanca, maroc',
        author: 'Mohammed Ali Aboukhalil',
        siteName: 'Portfolio - Mohammed Ali Aboukhalil'
      },
      
      // Errors
      error: {
        '404': 'Page non trouvée',
        '500': 'Erreur du serveur',
        'network': 'Erreur de connexion',
        'generic': 'Une erreur s\'est produite',
        'retry': 'Réessayer',
        'goHome': 'Retour à l\'accueil'
      }
    }
  },
  en: {
    translation: {
      nav: {
        home: 'Home',
        about: 'About',
        formation: 'Education', // Garde l'ancienne clé pour compatibilité
        parcours: 'Education',  // Nouvelle clé
        skills: 'Skills',
        projects: 'Projects',  
        contact: 'Contact'
      },
      hero: {
        name: 'Aboukhalil Mohammed Ali',
        role: 'Fullstack Developer',
        greeting: 'I am',
        title: 'Full Stack Developer',
        subtitle: 'Digital Experience Creator',
        description: 'Passionate about creating complete web solutions, from user interfaces to robust backend architectures.',
        cta: 'Discover my projects',
        scrollDown: 'Scroll down'
      },
      about: {
        title: 'About',
        titleHighlight: 'me',
        subtitle: 'Passionate about web development and new technologies',
        whoAmI: 'Who am I?',
        description: 'Passionate developer with expertise in modern technologies. I love creating innovative solutions that combine performance, aesthetics and exceptional user experience.',
        specialization: 'Specialized in modern web development with React, Laravel and the latest technologies. I transform ideas into performant and elegant web applications.',
        age: 'Years old',
        experience: 'Years of experience',
        downloadCV: 'Download my CV'
      },
      skills: {
        title: 'My',
        titleHighlight: 'Skills',
        subtitle: 'Technologies and tools I master to create performant solutions',
        categories: {
          all: 'All',
          frontend: 'Frontend',
          backend: 'Backend',
          tools: 'Tools'
        },
        level: 'Level',
        percentage: '%',
        proficiency: 'Proficiency'
      },
      projects: {
        title: 'My',
        titleHighlight: 'Projects',
        subtitle: 'Discover a selection of my achievements that illustrate my passion for web development',
        stats: {
          completed: 'Completed projects',
          technologies: 'Technologies',
          linesOfCode: 'Lines of code',
          experience: 'Experience'
        },
        // Individual projects
        bricoloman: {
          title: 'Bricoloman',
          category: 'Platform',
          description: 'Digital platform connecting individuals with repair and renovation craftsmen.'
        },
        apixel: {
          title: 'Apixel',
          category: 'POS System',
          description: 'Point of Sale (POS) system for sales management.'
        },
        isgidocs: {
          title: 'ISGIdocs',
          category: 'Educational Platform',
          description: 'A web platform for easy access to academic resources.'
        }
      },
      parcours: {
        title: 'My',
        titleHighlight: 'Journey',
        subtitle: 'Education and experiences that shaped my development expertise',
        formation: 'Education',
        experience: 'Experience',
        education: {
          title1: 'Specialized Technician in Digital Development',
          date1: '2023 - 2025',
          place1: 'ISGI Casablanca',
          desc1: 'Intensive training in Full-Stack web development. Mastery of modern technologies: React, Laravel, databases, and agile methodologies.',
          title2: 'Physics-Chemistry Baccalaureate',
          date2: '2022 - 2023',
          place2: 'Maurice Bucaill Academy Casablanca',
          desc2: 'Degree obtained with honors. Solid scientific education developing logical and analytical thinking.'
        },
        work: {
          title1: 'Web Development Internship',
          company1: 'EKM Consulting',
          date1: '2025',
          place1: 'Casablanca, Morocco',
          desc1: 'Development of POS (Point of Sale) web applications. Teamwork on real projects with modern technologies.'
        }
      },
      contact: {
        title: 'Contact',
        titleHighlight: 'me',
        subtitle: 'Do you have a project in mind? Let\'s discuss your ideas and create something extraordinary together!',
        contactInfo: 'Contact Information',
        sendMessage: 'Send me a message',
        form: {
          firstName: 'First Name',
          lastName: 'Last Name',
          name: 'Full name',
          namePlaceholder: 'Your full name',
          email: 'Email',
          emailPlaceholder: 'your.email@example.com',
          subject: 'Subject',
          message: 'Message',
          messagePlaceholder: 'Describe your project or request...',
          send: 'Send message',
          sending: 'Sending...'
        },
        success: {
          title: 'Message sent!',
          description: 'Thank you for your message! I will reply to you as soon as possible.',
          emoji: '🎉'
        },
        info: {
          email: 'Email',
          phone: 'Phone',
          location: 'Location',
          locationValue: 'Morocco, Casablanca',
          emailValue: 'contact@portfolio.com',
          phoneValue: '+33 1 23 45 67 89'
        }
      },
      footer: {
        about: 'About',
        aboutDescription: 'Passionate Full Stack Developer, I transform your ideas into modern and performant web experiences. Specialized in React, Laravel technologies and cloud architectures.',
        navigation: 'Navigation',
        social: 'Social Media',
        location: 'Morocco, Casablanca',
        availability: 'Available remotely',
        email: 'medaliaboukhail@gmail.com',
        responseTime: 'Response within 24h',
        copyright: '© {year} Aboukhalil Mohammed Ali. All rights reserved.',
        madeWith: 'Made with',
        technologies: 'React & Tailwind CSS',
        backToTop: 'Back to top',
        quickLinks: {
          home: 'Home',
          homeDesc: 'Back to home',
          about: 'About',
          aboutDesc: 'Discover my journey',
          skills: 'Skills',
          skillsDesc: 'My technologies',
          projects: 'Projects',
          projectsDesc: 'My achievements',
          contact: 'Contact',
          contactDesc: 'Let\'s discuss'
        },
        socialLinks: {
          github: 'GitHub',
          githubDesc: 'View my projects',
          linkedin: 'LinkedIn',
          linkedinDesc: 'My professional network',
          email: 'Email',
          emailDesc: 'Contact me'
        }
      },
      // Navbar
      'nav.language': 'Language',
      'nav.theme': 'Theme',
      'nav.dark': 'Dark',
      'nav.light': 'Light',
      
      // Project Card
      'project.view': 'View project',
      'project.github': 'Source code',
      'project.year': 'Year',
      'project.technologies': 'Technologies',
      'project.category': 'Category',
      'project.duration': 'Duration',
      'project.status': 'Status',
      
      // Loading
      loading: {
        welcome: 'Welcome to my universe',
        loading: 'Loading...',
        preparing: 'Preparing something incredible',
        initializing: 'Initializing portfolio',
        almostReady: 'Almost ready...',
        letsGo: 'Let\'s go! 🚀'
      },
      
      // Common/Utilities
      common: {
        readMore: 'Read more',
        readLess: 'Read less',
        seeMore: 'See more',
        showAll: 'Show all',
        close: 'Close',
        open: 'Open',
        save: 'Save',
        cancel: 'Cancel',
        confirm: 'Confirm',
        yes: 'Yes',
        no: 'No',
        loading: 'Loading...',
        error: 'Error',
        success: 'Success',
        warning: 'Warning',
        info: 'Information',
        back: 'Back',
        next: 'Next',
        previous: 'Previous',
        search: 'Search',
        filter: 'Filter',
        sort: 'Sort',
        reset: 'Reset',
        apply: 'Apply',
        update: 'Update',
        delete: 'Delete',
        edit: 'Edit',
        view: 'View',
        download: 'Download',
        upload: 'Upload',
        share: 'Share',
        copy: 'Copy',
        paste: 'Paste',
        print: 'Print',
        settings: 'Settings',
        help: 'Help',
        about: 'About',
        version: 'Version',
        language: 'Language',
        theme: 'Theme',
        dark: 'Dark',
        light: 'Light',
        auto: 'Auto'
      },
      
      // Pages
      'page.home.title': 'Home',
      'page.projects.title': 'My Projects',
      'page.contact.title': 'Contact',
      
      // Meta/SEO
      meta: {
        title: 'Mohammed Ali Aboukhalil - Full Stack Developer',
        description: 'Passionate Full Stack Developer specialized in React, Laravel and modern technologies. Creator of performant and elegant web experiences.',
        keywords: 'developer, full stack, react, laravel, javascript, php, web, casablanca, morocco',
        author: 'Mohammed Ali Aboukhalil',
        siteName: 'Portfolio - Mohammed Ali Aboukhalil'
      },
      
      // Errors
      error: {
        '404': 'Page not found',
        '500': 'Server error',
        'network': 'Connection error',
        'generic': 'An error occurred',
        'retry': 'Retry',
        'goHome': 'Go to home'
      }
    }
  },
  ar: {
    translation: {
      nav: {
        home: 'الرئيسية',
        about: 'نبذة عني',
        formation: 'التكوين',  // Garde l'ancienne clé pour compatibilité
        parcours: 'المسيرة',    // Nouvelle clé
        skills: 'المهارات',
        projects: 'المشاريع',
        contact: 'اتصل بي'
      },
      hero: {
        name: 'أبوخليل محمد علي',
        role: 'مطور ويب شامل',
        greeting: 'أنا',
        title: 'مطور ويب متكامل',
        subtitle: 'مبدع تجارب رقمية',
        description: 'شغوف بإنشاء حلول ويب كاملة، من واجهات المستخدم إلى هياكل الخادم القوية.',
        cta: 'اكتشف مشاريعي',
        scrollDown: 'التمرير للأسفل'
      },
      about: {
        title: 'نبذة',
        titleHighlight: 'عني',
        subtitle: 'شغوف بتطوير الويب والتقنيات الجديدة',
        whoAmI: 'من أنا؟',
        description: 'مطور شغوف بخبرة في التقنيات الحديثة. أحب إنشاء حلول مبتكرة تجمع بين الأداء والجمالية وتجربة المستخدم الاستثنائية.',
        specialization: 'متخصص في تطوير الويب الحديث باستخدام React و Laravel وأحدث التقنيات. أحول الأفكار إلى تطبيقات ويب عالية الأداء وأنيقة.',
        age: 'سنة',
        experience: 'سنوات الخبرة',
        downloadCV: 'تحميل سيرتي الذاتية'
      },
      skills: {
        title: '',
        titleHighlight: 'مهاراتي',
        subtitle: 'التقنيات والأدوات التي أتقنها لإنشاء حلول عالية الأداء',
        categories: {
          all: 'الكل',
          frontend: 'الواجهة الأمامية',
          backend: 'الواجهة الخلفية',
          tools: 'الأدوات'
        },
        level: 'المستوى',
        percentage: '%',
        proficiency: 'الإتقان'
      },
      projects: {
        title: '',
        titleHighlight: 'مشاريعي',
        subtitle: 'اكتشف مجموعة من إنجازاتي التي تُظهر شغفي بتطوير الويب',
        stats: {
          completed: 'المشاريع المكتملة',
          technologies: 'التقنيات',
          linesOfCode: 'أسطر الكود',
          experience: 'الخبرة'
        },
        // Individual projects
        bricoloman: {
          title: 'بريكولومان',
          category: 'منصة',
          description: 'منصة رقمية لربط الأفراد بحرفيي الإصلاح والتجديد.'
        },
        apixel: {
          title: 'أبيكسل',
          category: 'نظام نقاط البيع',
          description: 'نظام نقاط البيع (POS) لإدارة المبيعات.'
        },
        isgidocs: {
          title: 'آي إس جي آي دوكس',
          category: 'منصة تعليمية',
          description: 'منصة ويب للوصول السهل إلى الموارد الأكاديمية.'
        }
      },
      parcours: {
        title: '',
        titleHighlight: 'مسيرتي',
        subtitle: 'التكوين والخبرات التي شكلت خبرتي في التطوير',
        formation: 'التكوين',
        experience: 'الخبرة',
        education: {
          title1: 'تقني متخصص في التطوير الرقمي',
          date1: '2023 - 2025',
          place1: 'ISGI الدار البيضاء',
          desc1: 'تدريب مكثف في تطوير الويب الشامل. إتقان التقنيات الحديثة: React، Laravel، قواعد البيانات، والمنهجيات الرشيقة.',
          title2: 'بكالوريا فيزياء-كيمياء',
          date2: '2022 - 2023',
          place2: 'أكاديمية موريس بوكاي الدار البيضاء',
          desc2: 'شهادة حصل عليها بامتياز. تكوين علمي قوي يطور التفكير المنطقي والتحليلي.'
        },
        work: {
          title1: 'تدريب في تطوير الويب',
          company1: 'EKM Consulting',
          date1: '2025',
          place1: 'الدار البيضاء، المغرب',
          desc1: 'تطوير تطبيقات ويب نقاط البيع (POS). العمل الجماعي في مشاريع حقيقية بتقنيات حديثة.'
        }
      },
      contact: {
        title: 'تواصل',
        titleHighlight: 'معي',
        subtitle: 'هل لديك مشروع في ذهنك؟ لنناقش أفكارك ونبدع شيئاً استثنائياً معاً!',
        contactInfo: 'معلومات التواصل',
        sendMessage: 'أرسل لي رسالة',
        form: {
          firstName: 'الاسم الأول',
          lastName: 'اسم العائلة',
          name: 'الاسم الكامل',
          namePlaceholder: 'اسمك الكامل',
          email: 'البريد الإلكتروني',
          emailPlaceholder: 'your.email@example.com',
          subject: 'الموضوع',
          message: 'الرسالة',
          messagePlaceholder: 'صف مشروعك أو طلبك...',
          send: 'إرسال الرسالة',
          sending: 'جاري الإرسال...'
        },
        success: {
          title: 'تم إرسال الرسالة!',
          description: 'شكراً لك على رسالتك! سأرد عليك في أقرب وقت ممكن.',
          emoji: '🎉'
        },
        info: {
          email: 'البريد الإلكتروني',
          phone: 'الهاتف',
          location: 'الموقع',
          locationValue: 'المغرب، الدار البيضاء',
          emailValue: 'contact@portfolio.com',
          phoneValue: '+33 1 23 45 67 89'
        }
      },
      footer: {
        about: 'نبذة عني',
        aboutDescription: 'مطور ويب متكامل شغوف، أحول أفكارك إلى تجارب ويب حديثة وعالية الأداء. متخصص في تقنيات React و Laravel والمعمارية السحابية.',
        navigation: 'التنقل',
        social: 'وسائل التواصل',
        location: 'المغرب، الدار البيضاء',
        availability: 'متاح للعمل عن بُعد',
        email: 'medaliaboukhail@gmail.com',
        responseTime: 'الرد خلال 24 ساعة',
        copyright: '© {year} أبوخليل محمد علي. جميع الحقوق محفوظة.',
        madeWith: 'صُنع بـ',
        technologies: 'React و Tailwind CSS',
        backToTop: 'العودة للأعلى',
        quickLinks: {
          home: 'الرئيسية',
          homeDesc: 'العودة للرئيسية',
          about: 'نبذة عني',
          aboutDesc: 'اكتشف مسيرتي',
          skills: 'المهارات',
          skillsDesc: 'تقنياتي',
          projects: 'المشاريع',
          projectsDesc: 'إنجازاتي',
          contact: 'اتصل بي',
          contactDesc: 'لنتناقش'
        },
        socialLinks: {
          github: 'جيت هاب',
          githubDesc: 'شاهد مشاريعي',
          linkedin: 'لينكد إن',
          linkedinDesc: 'شبكتي المهنية',
          email: 'البريد الإلكتروني',
          emailDesc: 'تواصل معي'
        }
      },
      // Navbar
      'nav.language': 'اللغة',
      'nav.theme': 'المظهر',
      'nav.dark': 'داكن',
      'nav.light': 'فاتح',
      
      // Project Card
      'project.view': 'عرض المشروع',
      'project.github': 'الكود المصدري',
      'project.year': 'السنة',
      'project.technologies': 'التقنيات',
      'project.category': 'الفئة',
      'project.duration': 'المدة',
      'project.status': 'الحالة',
      
      // Loading
      loading: {
        welcome: 'أهلاً بك في عالمي',
        loading: 'جاري التحميل...',
        preparing: 'تحضير شيء مذهل',
        initializing: 'تهيئة الملف الشخصي',
        almostReady: 'تقريباً جاهز...',
        letsGo: 'لنبدأ! 🚀'
      },
      
      // Common/Utilities
      common: {
        readMore: 'اقرأ المزيد',
        readLess: 'اقرأ أقل',
        seeMore: 'شاهد المزيد',
        showAll: 'إظهار الكل',
        close: 'إغلاق',
        open: 'فتح',
        save: 'حفظ',
        cancel: 'إلغاء',
        confirm: 'تأكيد',
        yes: 'نعم',
        no: 'لا',
        loading: 'جاري التحميل...',
        error: 'خطأ',
        success: 'نجح',
        warning: 'تحذير',
        info: 'معلومات',
        back: 'رجوع',
        next: 'التالي',
        previous: 'السابق',
        search: 'بحث',
        filter: 'تصفية',
        sort: 'ترتيب',
        reset: 'إعادة تعيين',
        apply: 'تطبيق',
        update: 'تحديث',
        delete: 'حذف',
        edit: 'تعديل',
        view: 'عرض',
        download: 'تحميل',
        upload: 'رفع',
        share: 'مشاركة',
        copy: 'نسخ',
        paste: 'لصق',
        print: 'طباعة',
        settings: 'الإعدادات',
        help: 'مساعدة',
        about: 'حول',
        version: 'الإصدار',
        language: 'اللغة',
        theme: 'المظهر',
        dark: 'داكن',
        light: 'فاتح',
        auto: 'تلقائي'
      },
      
      // Pages
      'page.home.title': 'الرئيسية',
      'page.projects.title': 'مشاريعي',
      'page.contact.title': 'اتصل بنا',
      
      // Meta/SEO
      meta: {
        title: 'محمد علي أبوخليل - مطور ويب متكامل',
        description: 'مطور ويب متكامل شغوف متخصص في React و Laravel والتقنيات الحديثة. مبدع تجارب ويب عالية الأداء وأنيقة.',
        keywords: 'مطور، ويب متكامل، react، laravel، javascript، php، ويب، الدار البيضاء، المغرب',
        author: 'محمد علي أبوخليل',
        siteName: 'الملف الشخصي - محمد علي أبوخليل'
      },
      
      // Errors
      error: {
        '404': 'الصفحة غير موجودة',
        '500': 'خطأ في الخادم',
        'network': 'خطأ في الاتصال',
        'generic': 'حدث خطأ',
        'retry': 'إعادة المحاولة',
        'goHome': 'العودة للرئيسية'
      }
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
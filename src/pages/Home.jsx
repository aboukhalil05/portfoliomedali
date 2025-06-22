import { useTranslation } from 'react-i18next';
import Hero from '../components/Hero';
import { Code, Database, Rocket } from 'lucide-react';

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen">
      <Hero />
      
      {/* About Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              À propos de moi
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {t('hero.description')}
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900/20 rounded-2xl mb-4">
                <Code className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Frontend
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                React, Vue.js, HTML, CSS, JavaScript, TypeScript
              </p>
            </div>
            
            <div className="text-center p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 dark:bg-green-900/20 rounded-2xl mb-4">
                <Database className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Backend
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Node.js, Python, PHP, MySQL, MongoDB, PostgreSQL
              </p>
            </div>
            
            <div className="text-center p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 dark:bg-purple-900/20 rounded-2xl mb-4">
                <Rocket className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                DevOps
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Docker, AWS, CI/CD, Git, Linux, Nginx
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 
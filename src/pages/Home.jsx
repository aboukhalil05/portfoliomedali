import { useTranslation } from 'react-i18next';
import Hero from '../components/Hero';

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen">
      <Hero />
      
      {/* About Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
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
            <div className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Frontend
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                React, Vue.js, HTML, CSS, JavaScript, TypeScript
              </p>
            </div>
            
            <div className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
              <div className="text-4xl mb-4">⚙️</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Backend
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Node.js, Python, PHP, MySQL, MongoDB, PostgreSQL
              </p>
            </div>
            
            <div className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
              <div className="text-4xl mb-4">🚀</div>
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
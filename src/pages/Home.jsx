import { useTranslation } from 'react-i18next';
import Hero from '../components/Hero';
import { Code, Database, Rocket } from 'lucide-react';
import Skills from '../components/Skills';
import Parcours from '../components/Parcours';
import AboutMe from '../components/AboutMe';
import Projects from '../components/Projects';
import Background from '../components/Background';

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen relative">
      <Background />
      <Hero />
      <AboutMe />
      <Skills />
      <Parcours />
      <Projects />
    </div>
  );
};

export default Home; 
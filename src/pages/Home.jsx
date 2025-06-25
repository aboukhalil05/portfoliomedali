import { useTranslation } from 'react-i18next';
import Hero from '../components/Hero';
import { Code, Database, Rocket } from 'lucide-react';
import Skills from '../components/Skills';
import Parcours from '../components/Parcours';
import AboutMe from '../components/AboutMe';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen">
      <Hero />
      <AboutMe />
      <Parcours />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home; 
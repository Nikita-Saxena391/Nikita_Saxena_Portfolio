import React, { useState, useEffect } from 'react';

// Context
import { ThemeContext } from './context/ThemeContext';

// Components
import Layout from './components/Layout';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';

import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';
import ProgrammingSection from "./components/ProgrammingSection";

function App() {
  const [modalData, setModalData] = useState(null);
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    const userPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    return savedTheme || (userPrefersDark ? 'dark' : 'light');
  });

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Layout>
        <Header />
        <main className="relative z-10">
          <Hero />
          <About />
          <ProgrammingSection />
          <Skills />
          <Experience />
          <Projects onProjectClick={setModalData} />
          <Achievements />
          <Contact />
        </main>
        <Footer />
        {modalData && <ProjectModal project={modalData} onClose={() => setModalData(null)} />}
      </Layout>
    </ThemeContext.Provider>
  );
}

export default App;

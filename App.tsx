import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Problem } from './components/Problem';
import { Solution } from './components/Solution';
import { Process } from './components/Process';
import { Footer } from './components/Footer';
import { FloatingCTA } from './components/FloatingCTA';

const App: React.FC = () => {
  return (
    <div className="font-sans text-gray-900 antialiased overflow-x-hidden selection:bg-brand-red selection:text-white">
      <Header />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Process />
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default App;
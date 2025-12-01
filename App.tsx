import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Features } from './components/Features';
import { Screenshots } from './components/Screenshots';
import { Team } from './components/Team';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen font-sans antialiased text-slate-100 selection:bg-accent selection:text-main">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <Features />
        <Screenshots />
        <Team />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
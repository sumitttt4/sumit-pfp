import Header from '@/components/layout/Header';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Experience from '@/components/sections/Experience';
import Projects from '@/components/sections/Projects';
import Skills from '@/components/sections/Skills';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/layout/Footer';
import { Scene3D } from '@/components/3D/Scene3D';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Scene3D />
      <Header />
      <main className="relative overflow-hidden">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
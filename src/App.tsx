import Cursor from './components/Cursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './index.css';

export default function App() {
  return (
    <>
      <Cursor />
      {/* Background effects */}
      <div style={{
        position:'fixed',inset:0,pointerEvents:'none',zIndex:0,
        background:'radial-gradient(ellipse at 80% 10%,rgba(163,230,53,.04) 0%,transparent 50%)',
      }} />
      <div style={{
        position:'fixed',bottom:0,left:0,right:0,height:'1px',
        background:'linear-gradient(90deg,transparent,rgba(163,230,53,.15),transparent)',
        pointerEvents:'none',zIndex:0,
      }} />

      <Navbar />
      <main style={{position:'relative',zIndex:1}}>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

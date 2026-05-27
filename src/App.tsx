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
      <div style={{
        position:'fixed',inset:0,pointerEvents:'none',zIndex:0,
        background:'radial-gradient(ellipse at 85% 5%,rgba(174,254,255,.12) 0%,transparent 45%)',
      }} />
      <div style={{
        position:'fixed',bottom:0,left:0,right:0,height:'1px',
        background:'linear-gradient(90deg,transparent,rgba(79,189,186,.2),transparent)',
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

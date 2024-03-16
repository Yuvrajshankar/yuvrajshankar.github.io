import './App.css';
import Navbar from './Components/Navbar/Navbar';
import HeroSection from './Components/HeroSection/HeroSection';
import Skills from './Components/Skills/Skills';
import Projects from './Components/Projects/Projects';
import Footer from './Components/Footer/Footer';
import Contact from './Components/Contact/Contact';
import Education from './Components/Education/Education';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <Skills />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
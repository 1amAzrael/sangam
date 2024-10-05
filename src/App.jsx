
import { useEffect, useState } from 'react'
import './App.css'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import Projects from './components/Projects/Projects'
import Services from './components/Services/Services'
import Skills from './components/Skills/Skills'
import Loader from './components/Loader/Loader'

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => clearTimeout(timer); 
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
   <Navbar/>
   <Hero/>
   <About/>
   <Skills/>
   <Services/>
   <Projects/>
   <Contact/>
   
    </>
  )
}

export default App

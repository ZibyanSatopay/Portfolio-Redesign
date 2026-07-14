import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import ScrollToTop from './components/layout/ScrollToTop'
import Hero from './components/sections/Hero'
import MediDispense from './components/sections/MediDispense'
import Projects from './components/sections/Projects'
import Skills from './components/sections/Skills'
import Experience from './components/sections/Experience'
import About from './components/sections/About'
import Education from './components/sections/Education'
import Contact from './components/sections/Contact'

export default function App() {
  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <MediDispense />
        <Projects />
        <Skills />
        <Experience />
        <About />
        <Education />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}

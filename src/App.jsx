import Background from './components/Background'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Tools from './components/Tools'
import Projects from './components/Projects'
import Experience from './components/Experience'
import CreatorSection from './components/CreatorSection'
import Philosophy from './components/Philosophy'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <a
        href="#home"
        className="sr-only left-4 top-4 z-[60] rounded-full bg-brand px-4 py-2 text-sm font-medium text-base focus:not-sr-only focus:absolute"
      >
        Skip to content
      </a>

      <Background />
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Tools />
        <Projects />
        <Experience />
        <CreatorSection />
        <Philosophy />
        <Contact />
      </main>

      <Footer />
    </>
  )
}

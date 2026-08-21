import Nav from './components/Nav'
import Hero from './components/Hero'
import Projects from './components/Projects'
import InteractiveTerminal from './components/InteractiveTerminal'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-bg text-fg">
      <Nav />
      <main>
        <Hero />
        <Projects />
        <InteractiveTerminal />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

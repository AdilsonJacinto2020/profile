import { useLoaderData } from 'react-router-dom'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import InteractiveTerminal from '../components/InteractiveTerminal'
import Skills from '../components/Skills'
import Experience from '../components/Experience'
import Contact from '../components/Contact'
import { profile, projects, systems, skills, experience, education, languages } from '../data/content'
import { useScrollReveal } from '../hooks/useScrollReveal'

// Data Router Loader
export async function homeLoader() {
  // Simula ou provê os dados carregados via data router
  return {
    profile,
    projects,
    systems,
    skills,
    experience,
    education,
    languages,
  }
}

export default function HomePage() {
  const data = useLoaderData()
  useScrollReveal()

  return (
    <>
      <Hero data={data} />
      <Projects projects={data.projects} />
      <InteractiveTerminal data={data} />
      <Skills skills={data.skills} />
      <Experience experience={data.experience} education={data.education} languages={data.languages} />
      <Contact profile={data.profile} />
    </>
  )
}


import AboutSection from './components/about_section'
import ContactSection from './components/contactUs_section'
import Header from './components/header'
import ProjectsSection from './components/project_section'
import ServicesSection from './components/services_section'

export default function Home() {
  return (
    <div>
      <Header />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  )
}

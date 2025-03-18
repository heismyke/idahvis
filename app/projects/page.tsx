'use client'

import React from 'react'
import { motion, useInView } from 'framer-motion'

interface Project {
  title: string
  client: string
  description: string
  scope: string
}

interface ProjectCardProps {
  project: Project
  index: number
}

const projectsData = [
  {
    title: 'Acoustic Call Center',
    client: 'Port Harcourt Electricity Distribution Company',
    description:
      'Set up of a state-of-the-art acoustic call center with modern equipment and sound engineering to improve customer service efficiency and quality of interactions.',
    scope:
      'Design, procurement, installation, testing, and commissioning of complete call center infrastructure.',
  },
  {
    title: 'Executive Lounge',
    client: 'Port Harcourt Electricity Distribution Company',
    description:
      'Design and setup of an executive lounge with premium furnishings and amenities for high-level meetings and client interactions.',
    scope: 'Space planning, interior design, furniture procurement, and installation of amenities.',
  },
  {
    title: 'Audio/Visual LED Screen Installation',
    client: 'Various Corporate Bodies including WHO',
    description:
      'Installation of audio/visual LED screens for corporate presentations, events, and conferences to enhance visual communications.',
    scope: 'Supply and installation of LED screens, audio systems, and control equipment.',
  },
  {
    title: 'Office Setup',
    client: 'Utchay Okorji Associates',
    description:
      'Complete office setup including furniture, equipment, and IT infrastructure for a professional working environment.',
    scope: 'Space planning, furniture procurement, IT equipment supply and setup.',
  },
  {
    title: 'IT Equipment Supply',
    client: 'Eurotube Global Resources',
    description:
      'Supply of IT equipment including computers, servers, and networking devices to support business operations.',
    scope: 'Procurement, delivery, installation, and configuration of IT equipment.',
  },
  {
    title: 'Printer Procurement',
    client: 'Skids Logistics',
    description:
      'Procurement of high-quality printers and printing equipment for business operations.',
    scope: 'Selection, procurement, delivery, and setup of printing equipment.',
  },
  {
    title: 'GMP Installation & Maintenance',
    client: 'Port Harcourt Electricity Distribution Company',
    description:
      'Installation of GMP windows and maintenance services for building infrastructure.',
    scope: 'Supply, installation, and maintenance of GMP windows and related components.',
  },
  {
    title: 'Office Space Setup',
    client: 'Zigma Oil and Gas',
    description:
      'Setup of Port Harcourt office space with modern design and efficient layout for optimal productivity.',
    scope: 'Space planning, interior design, furniture procurement, and installation.',
  },
  {
    title: 'Training Center Setup',
    client: 'Jakeriley Limited',
    description:
      'Establishment of a training center with necessary equipment and facilities for effective learning and development.',
    scope: 'Space design, equipment procurement, installation, and configuration.',
  },
]

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  // Ref for the project card
  const ref = React.useRef<HTMLDivElement>(null)
  // Check if the project card is in view
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  // Determine if this project should have a row span or column span
  const isRowSpan = index % 5 === 0
  const isColSpan = index % 3 === 1

  return (
    <motion.div
      ref={ref}
      className={`
        bg-white rounded-lg p-6 shadow-sm flex flex-col
        ${isRowSpan ? 'md:row-span-2' : ''}
        ${isColSpan ? 'md:col-span-2' : ''}
      `}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
      transition={{
        duration: 0.5,
        delay: index * 0.15,
        ease: [0.25, 0.1, 0.25, 1], // Smooth easing
      }}
      whileHover={{
        y: -5,
        boxShadow: '0 10px 20px rgba(0,0,0,0.05)',
        transition: { duration: 0.3 },
      }}
    >
      <h2 className="text-xl font-semibold mb-3">{project.title}</h2>
      <p className="text-gray-500 text-sm mb-4">Client: {project.client}</p>
      <p className="text-gray-700 text-sm mb-4">{project.description}</p>
      <div className="mt-auto">
        <h3 className="font-medium text-sm text-gray-600 mb-1">Scope:</h3>
        <p className="text-gray-700 text-sm">{project.scope}</p>
      </div>
    </motion.div>
  )
}

const Projects: React.FC = () => {
  return (
    <section className="py-16 bg-stone-50">
      <div className="container mx-auto px-4 max-w-5xl">
        <h1 className="text-4xl font-bold mb-12">Our Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
        <div className="mt-16 p-8 bg-stone-100">
          <h2 className="text-2xl font-semibold mb-4">Our Approach</h2>
          <p className="text-gray-700">
            At IDAHVIS NIGERIA LIMITED, we pride ourselves in delivering high-quality projects that
            meet and exceed our clients&apos; expectations. Our approach includes thorough planning,
            efficient execution, and continuous communication with our clients throughout the
            project lifecycle. This ensures that we deliver projects on schedule and within budget,
            while maintaining the highest standards of quality and professionalism.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Projects

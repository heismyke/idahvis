'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const ProjectsSection = () => {
  const featuredProjects = [
    {
      title: 'Acoustic Call Center',
      client: 'Port Harcourt Electricity Distribution Company',
      description:
        'Set up of a state-of-the-art acoustic call center with modern equipment and sound engineering.',
    },
    {
      title: 'Executive Lounge',
      client: 'Port Harcourt Electricity Distribution Company',
      description:
        'Design and setup of an executive lounge with premium furnishings and amenities.',
    },
    {
      title: 'Audio/Visual LED Screen',
      client: 'Various Corporate Bodies including WHO',
      description:
        'Installation of audio/visual LED screens for corporate presentations and events.',
    },
  ]

  return (
    <section className="py-16 bg-stone-50">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Featured Projects</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <div key={index} className="group">
              <div className="aspect-w-4 aspect-h-3 mb-4 bg-stone-200 relative overflow-hidden">
                {/* Placeholder for project image */}
                <div className="absolute inset-0 flex items-center justify-center text-stone-400">
                  Project Image
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-2 text-sm">{project.client}</p>
              <p className="text-gray-700">{project.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link href="/projects" className="inline-flex items-center group">
            <span className="text-lg font-medium border-b-2 border-black group-hover:border-gray-500 transition-colors duration-300">
              View all projects
            </span>
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection
